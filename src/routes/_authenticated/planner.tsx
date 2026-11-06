import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BookOpen, CalendarDays, Loader2, MapPin, Sparkles, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { cities } from "@/lib/cities";
import type { Source } from "@/lib/knowledge";
import { createTripPlan, type PlanRequest, type TripPlan } from "@/lib/planner.functions";

export const Route = createFileRoute("/_authenticated/planner")({
  head: () => ({
    meta: [
      { title: "AI trip planner for Denmark — Hej Copenhagen" },
      { name: "description", content: "Get a personalised day-by-day itinerary for Copenhagen and Denmark, built by our AI guide." },
      { property: "og:title", content: "AI trip planner for Denmark — Hej Copenhagen" },
      { property: "og:description", content: "A day-by-day Denmark itinerary built around your interests and budget." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PlannerPage,
});

interface Trip {
  id: string;
  title: string;
  created_at: string;
  plan: TripPlan;
  sources: Source[];
}

const interestOptions = ["History", "Food", "Design", "Museums", "Nature", "Nightlife", "Kids", "Shopping"];
const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function PlannerPage() {
  const planFn = useServerFn(createTripPlan);
  const [trips, setTrips] = useState<Trip[]>([]);
  const [active, setActive] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState<PlanRequest>({
    cities: ["Copenhagen"],
    days: 3,
    month: "",
    budget: "mid-range",
    interests: ["Food", "History"],
    notes: "",
  });

  async function load(selectId?: string) {
    const { data, error } = await supabase
      .from("trips")
      .select("id, title, created_at, plan, sources")
      .order("created_at", { ascending: false });
    if (error) {
      toast.error("Couldn't load your trips.");
      return;
    }
    const list = (data ?? []) as unknown as Trip[];
    setTrips(list);
    setActive(selectId ?? list[0]?.id ?? null);
  }

  useEffect(() => {
    void load();
  }, []);

  function toggle<K extends "cities" | "interests">(key: K, value: string) {
    setForm((f) => {
      const cur = f[key];
      return { ...f, [key]: cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value] };
    });
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (form.cities.length === 0) {
      toast.error("Pick at least one city.");
      return;
    }
    setBusy(true);
    try {
      const { id } = await planFn({ data: form });
      await load(id);
      toast.success("Your trip is ready!");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  async function remove(id: string) {
    const { error } = await supabase.from("trips").delete().eq("id", id);
    if (error) {
      toast.error("Couldn't delete that trip.");
      return;
    }
    await load();
  }

  const trip = trips.find((t) => t.id === active);
  const chip = (on: boolean) =>
    `rounded-full border px-3 py-1.5 text-sm transition-colors ${on ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary/50"}`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="eyebrow">AI trip planner</p>
      <h1 className="mt-2 text-4xl font-semibold sm:text-5xl">Plan your Danish adventure</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Tell Hej Guide what you like and it builds a day-by-day plan using our city guides. Every plan is saved to your account.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[380px_1fr]">
        <div className="space-y-6">
          <form onSubmit={submit} className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-card">
            <div>
              <p className="text-sm font-semibold">Cities</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {cities.map((c) => (
                  <button type="button" key={c.slug} className={chip(form.cities.includes(c.name))} onClick={() => toggle("cities", c.name)}>
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <label className="text-sm font-semibold">
                Days
                <input
                  type="number" min={1} max={14} value={form.days}
                  onChange={(e) => setForm({ ...form, days: Math.min(14, Math.max(1, Number(e.target.value) || 1)) })}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 font-normal"
                />
              </label>
              <label className="text-sm font-semibold">
                Month
                <select value={form.month} onChange={(e) => setForm({ ...form, month: e.target.value })}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 font-normal">
                  {months.map((m) => <option key={m} value={m}>{m || "Any time"}</option>)}
                </select>
              </label>
            </div>
            <div>
              <p className="text-sm font-semibold">Budget</p>
              <div className="mt-2 flex gap-2">
                {(["budget", "mid-range", "luxury"] as const).map((b) => (
                  <button type="button" key={b} className={chip(form.budget === b)} onClick={() => setForm({ ...form, budget: b })}>
                    {b}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold">Interests</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {interestOptions.map((i) => (
                  <button type="button" key={i} className={chip(form.interests.includes(i))} onClick={() => toggle("interests", i)}>
                    {i}
                  </button>
                ))}
              </div>
            </div>
            <label className="block text-sm font-semibold">
              Anything else?
              <textarea value={form.notes} maxLength={500} rows={3} placeholder="e.g. travelling with a toddler, vegetarian, arriving by ferry"
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 font-normal" />
            </label>
            <Button type="submit" className="w-full rounded-full" disabled={busy}>
              {busy ? <><Loader2 className="animate-spin" /> Planning your trip…</> : <><Sparkles /> Build my itinerary</>}
            </Button>
          </form>

          {trips.length > 0 && (
            <div>
              <p className="text-sm font-semibold">Your saved trips</p>
              <ul className="mt-2 space-y-2">
                {trips.map((t) => (
                  <li key={t.id} className={`flex items-center justify-between gap-2 rounded-xl border px-4 py-3 ${t.id === active ? "border-primary bg-primary-soft" : "border-border bg-card"}`}>
                    <button className="text-left text-sm font-medium" onClick={() => setActive(t.id)}>
                      {t.title}
                      <span className="block text-xs font-normal text-muted-foreground">{new Date(t.created_at).toLocaleDateString()}</span>
                    </button>
                    <Button variant="ghost" size="icon-sm" aria-label="Delete trip" onClick={() => remove(t.id)}><Trash2 /></Button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          {!trip ? (
            <div className="flex h-full min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
              <CalendarDays className="size-8 text-primary" />
              <p className="mt-3">Your itinerary will appear here.</p>
            </div>
          ) : (
            <article className="space-y-5">
              <div className="rounded-2xl bg-primary-soft p-7">
                <h2 className="text-3xl font-semibold">{trip.plan.title}</h2>
                <p className="mt-2 text-muted-foreground">{trip.plan.summary}</p>
              </div>
              {trip.plan.days.map((d) => (
                <div key={d.day} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold">Day {d.day} · {d.theme}</h3>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="size-4" /> {d.city} · ≈ {Math.round(d.estimatedCostDkk)} kr</span>
                  </div>
                  <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
                    {([["Morning", d.morning], ["Afternoon", d.afternoon], ["Evening", d.evening]] as const).map(([k, v]) => (
                      <div key={k}><dt className="font-semibold text-primary">{k}</dt><dd className="mt-1 text-muted-foreground">{v}</dd></div>
                    ))}
                  </dl>
                  <p className="mt-4 text-sm"><span className="font-semibold">Eat:</span> {d.food}</p>
                  <p className="mt-1 text-sm"><span className="font-semibold">Getting around:</span> {d.transport}</p>
                </div>
              ))}
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="font-semibold">Budget</p>
                <p className="mt-1 text-sm text-muted-foreground">{trip.plan.budgetNote}</p>
                <p className="mt-4 font-semibold">Packing tips</p>
                <ul className="mt-1 list-disc pl-5 text-sm text-muted-foreground">
                  {trip.plan.packingTips.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
              {trip.sources.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <BookOpen className="size-3.5" /> Based on:
                  {trip.sources.map((s) => (
                    <a key={s.url} href={s.url} className="rounded-full border border-border bg-card px-2.5 py-1 font-medium text-foreground hover:text-primary">{s.title}</a>
                  ))}
                </div>
              )}
            </article>
          )}
        </div>
      </div>
    </div>
  );
}
