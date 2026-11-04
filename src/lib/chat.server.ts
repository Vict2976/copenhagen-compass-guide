import { createClient } from "@supabase/supabase-js";
import { GatewayError, streamResponse } from "@lovable.dev/ai-gateway";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const MODEL = "openai/gpt-6-astra" as const;
const HISTORY_LIMIT = 40;

const bodySchema = z.object({ message: z.string().trim().min(1).max(4000) });

function systemPrompt() {
  const today = new Date().toISOString().slice(0, 10);
  return `You are "Hej Guide", a warm, knowledgeable local travel guide for visitors to Copenhagen and Denmark. Today's date is ${today}.

Help travellers with anything about their trip: visas and entry rules (Schengen, the 90/180-day rule, EES, ETIAS), the Danish krone and prices, transport (metro, trains, bikes, airport), what to see in Copenhagen, Aarhus, Odense, Aalborg, Roskilde, Helsingør and beyond, food and restaurants, Danish culture and etiquette, history, weather, safety and day trips.

Guidelines:
- Be friendly, practical and concise. Use short paragraphs and bullet lists in Markdown. Sprinkle in the odd Danish word (with translation) when it adds charm.
- Give concrete suggestions: names of places, neighbourhoods, approximate prices in DKK, travel times.
- For visa, legal, health or safety questions, give your best general answer and remind them to confirm on official sources (e.g. nyidanmark.dk, travel-europe.europa.eu). In an emergency, tell them to call 112.
- If you're not sure about something (opening hours, current prices, events), say so and suggest how to check.
- If a question has nothing to do with travel, Denmark or the user's trip, answer briefly and gently steer back to helping with their visit.`;
}

function createUserClient(token: string) {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
  if (!url || !key) throw new Error("Backend is not configured");
  return createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      headers: { Authorization: `Bearer ${token}` },
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

export async function handleChatRequest(request: Request): Promise<Response> {
  const auth = request.headers.get("authorization") ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!token || token.split(".").length !== 3) {
    return Response.json({ error: "Please sign in to chat." }, { status: 401 });
  }

  const supabase = createUserClient(token);
  const { data: claims, error: claimsError } = await supabase.auth.getClaims(token);
  const userId = claims?.claims?.sub;
  if (claimsError || !userId) {
    return Response.json({ error: "Your session has expired. Please sign in again." }, { status: 401 });
  }

  let message: string;
  try {
    message = bodySchema.parse(await request.json()).message;
  } catch {
    return Response.json({ error: "Please write a message (max 4000 characters)." }, { status: 400 });
  }

  const { data: historyDesc, error: historyError } = await supabase
    .from("chat_messages")
    .select("role, content")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(HISTORY_LIMIT);
  if (historyError) {
    console.error("chat history load failed", historyError);
    return Response.json({ error: "Could not load your conversation." }, { status: 500 });
  }
  const history = (historyDesc ?? []).reverse();

  const { error: insertError } = await supabase
    .from("chat_messages")
    .insert({ user_id: userId, role: "user", content: message });
  if (insertError) {
    console.error("chat user message save failed", insertError);
    return Response.json({ error: "Could not save your message." }, { status: 500 });
  }

  const input = [
    ...history.map((m) => ({
      role: m.role === "assistant" ? ("assistant" as const) : ("user" as const),
      content: m.content,
    })),
    { role: "user" as const, content: message },
  ];

  let stream: Awaited<ReturnType<typeof streamResponse<typeof MODEL>>>;
  try {
    stream = await streamResponse(
      { model: MODEL, instructions: systemPrompt(), input },
      { signal: request.signal },
    );
  } catch (err) {
    return gatewayErrorResponse(err);
  }

  const encoder = new TextEncoder();
  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      let full = "";
      try {
        for await (const event of stream) {
          if (event.type === "response.output_text.delta") {
            full += event.delta;
            controller.enqueue(encoder.encode(event.delta));
          }
        }
        if (full.trim()) {
          const { error } = await supabase
            .from("chat_messages")
            .insert({ user_id: userId, role: "assistant", content: full });
          if (error) console.error("chat assistant message save failed", error);
        }
      } catch (err) {
        console.error("chat stream failed", err);
        if (full.trim()) {
          await supabase.from("chat_messages").insert({ user_id: userId, role: "assistant", content: full });
        }
        controller.enqueue(encoder.encode("\n\n[[ERROR]]"));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-cache" },
  });
}

function gatewayErrorResponse(err: unknown): Response {
  if (err instanceof GatewayError) {
    console.error("AI gateway error", err.code, err.httpStatus, err.ids);
    if (err.httpStatus === 429) {
      return Response.json({ error: "The guide is very busy right now. Please try again in a moment." }, { status: 429 });
    }
    if (err.httpStatus === 402) {
      return Response.json({ error: "The AI guide is temporarily unavailable." }, { status: 503 });
    }
  } else {
    console.error("chat failed", err);
  }
  return Response.json({ error: "The guide couldn't answer right now. Please try again." }, { status: 502 });
}
