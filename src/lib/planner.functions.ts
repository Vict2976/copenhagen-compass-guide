import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const planRequestSchema = z.object({
  cities: z.array(z.string().min(1).max(40)).min(1).max(4),
  days: z.number().int().min(1).max(14),
  month: z.string().max(20),
  budget: z.enum(["budget", "mid-range", "luxury"]),
  interests: z.array(z.string().max(30)).max(8),
  notes: z.string().max(500),
});
export type PlanRequest = z.infer<typeof planRequestSchema>;

export interface PlanDay {
  day: number;
  city: string;
  theme: string;
  morning: string;
  afternoon: string;
  evening: string;
  food: string;
  transport: string;
  estimatedCostDkk: number;
}
export interface TripPlan {
  title: string;
  summary: string;
  days: PlanDay[];
  packingTips: string[];
  budgetNote: string;
}

const planSchema = {
  type: "object",
  additionalProperties: false,
  required: ["title", "summary", "days", "packingTips", "budgetNote"],
  properties: {
    title: { type: "string" },
    summary: { type: "string" },
    budgetNote: { type: "string" },
    packingTips: { type: "array", items: { type: "string" } },
    days: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["day", "city", "theme", "morning", "afternoon", "evening", "food", "transport", "estimatedCostDkk"],
        properties: {
          day: { type: "integer" },
          city: { type: "string" },
          theme: { type: "string" },
          morning: { type: "string" },
          afternoon: { type: "string" },
          evening: { type: "string" },
          food: { type: "string" },
          transport: { type: "string" },
          estimatedCostDkk: { type: "number" },
        },
      },
    },
  },
} as const;

export const createTripPlan = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => planRequestSchema.parse(d))
  .handler(async ({ data, context }) => {
    const { generateResponse, GatewayError } = await import("@lovable.dev/ai-gateway");
    const { retrieve, formatContext } = await import("@/lib/rag.server");
    const { toSources } = await import("@/lib/knowledge");

    const query = `Trip to ${data.cities.join(", ")}. Interests: ${data.interests.join(", ")}. ${data.notes}`;
    const chunks = await retrieve(query, 8);
    const sources = toSources(chunks);

    let plan: TripPlan;
    try {
      const res = await generateResponse({
        model: "openai/gpt-6-astra",
        instructions: `You are Hej Guide, an expert Denmark trip planner. Build a realistic day-by-day itinerary. Group nearby sights, include travel time between cities, suggest Danish food, and give approximate per-person daily costs in DKK (excluding accommodation) matching the budget level. Base sights on this site knowledge where possible:\n\n${formatContext(chunks)}`,
        input: `Plan a ${data.days}-day trip. Cities: ${data.cities.join(", ")}. Month: ${data.month || "not specified"}. Budget: ${data.budget}. Interests: ${data.interests.join(", ") || "general sightseeing"}. Extra notes: ${data.notes || "none"}. Return exactly ${data.days} days.`,
        text: { format: { type: "json_schema", name: "trip_plan", strict: true, schema: planSchema } },
      });
      const text = res.output
        .flatMap((o) => (o.type === "message" ? o.content : []))
        .map((c) => (c.type === "output_text" ? c.text : ""))
        .join("");
      plan = JSON.parse(text) as TripPlan;
    } catch (err) {
      if (err instanceof GatewayError) console.error("planner gateway error", err.code, err.httpStatus, err.ids);
      else console.error("planner failed", err);
      throw new Error("The planner couldn't build your trip right now. Please try again.");
    }

    const { data: row, error } = await context.supabase
      .from("trips")
      .insert({
        user_id: context.userId,
        title: plan.title,
        request: data,
        plan: plan as never,
        sources: sources as never,
      })
      .select("id")
      .single();
    if (error) {
      console.error("trip save failed", error);
      throw new Error("Your trip was planned but couldn't be saved.");
    }
    return { id: row.id };
  });
