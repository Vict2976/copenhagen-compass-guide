import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ChatStatus } from "ai";
import { BookOpen, RotateCcw } from "lucide-react";
import type { Source } from "@/lib/knowledge";
import { supabase } from "@/integrations/supabase/client";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  type PromptInputMessage,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { Button } from "@/components/ui/button";
import logo from "@/assets/hej-guide-logo.png";

export const Route = createFileRoute("/_authenticated/chat")({
  head: () => ({
    meta: [
      { title: "Ask the AI travel guide — Hej Copenhagen" },
      {
        name: "description",
        content: "Chat with Hej Guide, an AI travel assistant for Copenhagen and Denmark. Get answers about visas, money, sights and more.",
      },
      { property: "og:title", content: "Ask the AI travel guide — Hej Copenhagen" },
      { property: "og:description", content: "Your personal AI guide to Copenhagen and Denmark." },
    ],
  }),
  component: ChatPage,
});

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
}

const suggestions = [
  "Do I need a visa to visit Denmark from India?",
  "Plan a 3-day itinerary for Copenhagen",
  "How do I get from the airport to the city centre?",
  "What should I eat in Denmark?",
  "Is Copenhagen expensive? Give me a daily budget",
  "Best day trips from Copenhagen by train",
];

const ERROR_MARKER = "[[ERROR]]";

function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [status, setStatus] = useState<ChatStatus>("ready");
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const focusInput = useCallback(() => {
    requestAnimationFrame(() => textareaRef.current?.focus());
  }, []);

  useEffect(() => {
    let cancelled = false;
    void supabase
      .from("chat_messages")
      .select("id, role, content, sources")
      .order("created_at", { ascending: true })
      .then(({ data, error: err }) => {
        if (cancelled) return;
        if (err) setError("Couldn't load your previous conversation.");
        setMessages(
          (data ?? []).map((m) => ({
            id: m.id,
            role: m.role === "assistant" ? "assistant" : "user",
            content: m.content,
            sources: Array.isArray(m.sources) ? (m.sources as unknown as Source[]) : [],
          })),
        );
        setLoaded(true);
        focusInput();
      });
    return () => {
      cancelled = true;
    };
  }, [focusInput]);

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || status === "submitted" || status === "streaming") return;
      setError(null);

      const userMsg: ChatMessage = { id: `u-${Date.now()}`, role: "user", content: trimmed };
      const assistantId = `a-${Date.now()}`;
      setMessages((prev) => [...prev, userMsg]);
      setStatus("submitted");
      focusInput();

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const { data } = await supabase.auth.getSession();
        const token = data.session?.access_token;
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            ...(token ? { authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({ message: trimmed }),
          signal: controller.signal,
        });

        if (!res.ok || !res.body) {
          const body = (await res.json().catch(() => null)) as { error?: string } | null;
          throw new Error(body?.error ?? "The guide couldn't answer right now. Please try again.");
        }

        let sources: Source[] = [];
        try {
          sources = JSON.parse(decodeURIComponent(res.headers.get("x-sources") ?? "%5B%5D")) as Source[];
        } catch {
          sources = [];
        }
        setMessages((prev) => [...prev, { id: assistantId, role: "assistant", content: "", sources }]);
        setStatus("streaming");

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let full = "";
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          full += decoder.decode(value, { stream: true });
          const visible = full.replace(ERROR_MARKER, "").trimEnd();
          setMessages((prev) =>
            prev.map((m) => (m.id === assistantId ? { ...m, content: visible } : m)),
          );
        }

        if (full.includes(ERROR_MARKER)) {
          setError("The answer was cut off. Please try asking again.");
          setStatus("error");
        } else {
          setStatus("ready");
        }
      } catch (err) {
        if (controller.signal.aborted) {
          setStatus("ready");
        } else {
          setError(err instanceof Error ? err.message : "Something went wrong.");
          setStatus("error");
        }
      } finally {
        abortRef.current = null;
        setMessages((prev) => prev.filter((m) => m.role === "user" || m.content.length > 0));
        focusInput();
      }
    },
    [status, focusInput],
  );

  function handleSubmit(message: PromptInputMessage) {
    void send(message.text);
  }

  async function startOver() {
    abortRef.current?.abort();
    const { data } = await supabase.auth.getUser();
    if (!data.user) return;
    const { error: err } = await supabase.from("chat_messages").delete().eq("user_id", data.user.id);
    if (err) {
      setError("Couldn't clear the conversation. Please try again.");
      return;
    }
    setMessages([]);
    setError(null);
    setStatus("ready");
    focusInput();
  }

  const busy = status === "submitted" || status === "streaming";

  return (
    <div className="mx-auto flex h-[calc(100dvh-4rem)] max-w-3xl flex-col px-4 sm:px-6">
      <div className="flex items-center justify-between gap-3 border-b border-border py-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" width={40} height={40} className="size-10" />
          <div>
            <h1 className="text-lg font-semibold leading-tight">Hej Guide</h1>
            <p className="text-xs text-muted-foreground">Your AI travel guide to Denmark</p>
          </div>
        </div>
        {messages.length > 0 && (
          <Button variant="ghost" size="sm" className="rounded-full" onClick={startOver} disabled={busy}>
            <RotateCcw /> Start over
          </Button>
        )}
      </div>

      <Conversation className="flex-1">
        <ConversationContent className="gap-6 py-6">
          {loaded && messages.length === 0 ? (
            <div className="flex flex-col items-center py-10 text-center">
              <img src={logo} alt="" width={72} height={72} className="size-18 animate-rise" />
              <h2 className="mt-5 text-3xl font-semibold">Hej! How can I help?</h2>
              <p className="mt-2 max-w-md text-muted-foreground">
                Ask me anything about your trip to Copenhagen and Denmark — visas, money, sights, food or getting around.
              </p>
              <div className="mt-8 grid w-full gap-2 sm:grid-cols-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => void send(s)}
                    className="rounded-xl border border-border bg-card px-4 py-3 text-left text-sm transition-colors hover:border-primary/50 hover:bg-primary-soft"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((m) => (
              <Message key={m.id} from={m.role}>
                <MessageContent className="group-[.is-user]:bg-primary group-[.is-user]:text-primary-foreground group-[.is-user]:rounded-2xl text-[15px] leading-relaxed">
                  {m.role === "assistant" ? (
                    <MessageResponse isAnimating={status === "streaming"}>{m.content}</MessageResponse>
                  ) : (
                    <p className="whitespace-pre-wrap">{m.content}</p>
                  )}
                </MessageContent>
                {m.role === "assistant" && m.content && m.sources && m.sources.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <BookOpen className="size-3.5" /> Sources:
                    {m.sources.map((src) => (
                      <a
                        key={src.url}
                        href={src.url}
                        className="rounded-full border border-border bg-card px-2.5 py-1 font-medium text-foreground hover:border-primary/50 hover:text-primary"
                      >
                        {src.title}
                      </a>
                    ))}
                  </div>
                )}
              </Message>
            ))
          )}
          {status === "submitted" && (
            <Message from="assistant">
              <MessageContent>
                <Shimmer>Thinking…</Shimmer>
              </MessageContent>
            </Message>
          )}
          {error && (
            <p role="alert" className="rounded-xl bg-primary-soft px-4 py-3 text-sm text-accent-foreground">
              {error}
            </p>
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <div className="pb-4 pt-2">
        <PromptInput onSubmit={handleSubmit} className="rounded-2xl bg-card shadow-card">
          <PromptInputTextarea
            ref={textareaRef}
            autoFocus
            placeholder="Ask about visas, money, sights, food…"
          />
          <PromptInputFooter className="justify-end">
            <PromptInputSubmit
              status={status}
              onStop={() => abortRef.current?.abort()}
              className="rounded-full"
            />
          </PromptInputFooter>
        </PromptInput>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          The AI guide can make mistakes — double-check visa rules on official sites.
        </p>
      </div>
    </div>
  );
}
