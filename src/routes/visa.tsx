import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ExternalLink, Fingerprint, Globe2, Plane, ShieldCheck, Stamp } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ChatCta } from "@/components/chat-cta";

export const Route = createFileRoute("/visa")({
  head: () => ({
    meta: [
      { title: "Visa & entry rules for Denmark — Hej Copenhagen" },
      {
        name: "description",
        content:
          "Do you need a visa for Denmark? Schengen rules, the 90/180-day limit, EES biometric registration, ETIAS and how to apply.",
      },
      { property: "og:title", content: "Visa & entry rules for Denmark" },
      {
        property: "og:description",
        content: "Schengen, the 90/180 rule, EES, ETIAS and how to apply for a Danish visa.",
      },
    ],
  }),
  component: VisaPage,
});

const groups = [
  {
    icon: Globe2,
    title: "EU / EEA & Swiss citizens",
    body: "No visa needed. Bring a valid passport or national ID card. You can stay, work and study freely.",
  },
  {
    icon: Plane,
    title: "Visa-free countries",
    body: "Citizens of e.g. the USA, UK, Canada, Australia, Japan and Brazil can visit for up to 90 days in any 180-day period without a visa.",
  },
  {
    icon: Stamp,
    title: "Visa-required countries",
    body: "Citizens of e.g. India, China, Türkiye, Nigeria and many others need a Schengen short-stay visa before travelling.",
  },
];

const steps = [
  "Check whether you need a visa on the official Danish immigration site (nyidanmark.dk).",
  "Apply online and book an appointment at a visa centre or Danish embassy — ideally 1–3 months before you travel (at most 6 months ahead).",
  "Prepare your passport (valid at least 3 months after you leave, issued within the last 10 years), photos, travel insurance with at least €30,000 medical cover, flight and hotel bookings, and proof of funds.",
  "Pay the visa fee (currently €90 for adults, reduced for children) and give your fingerprints.",
  "Processing usually takes up to 15 days, but can be longer in peak season.",
];

function VisaPage() {
  return (
    <>
      <PageHero
        eyebrow="Visa & entry"
        title="Do I need a visa for Denmark?"
        intro="Denmark is part of the Schengen Area, so one set of rules covers 29 European countries. Here's what that means for you."
      />

      <section className="mx-auto mt-8 grid max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-3">
        {groups.map((g) => (
          <div key={g.title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
            <g.icon className="size-6 text-primary" />
            <h2 className="mt-4 text-xl font-semibold">{g.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{g.body}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-primary-soft p-8 sm:p-12">
          <p className="eyebrow">The golden rule</p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">90 days in any 180</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Visitors without residence can spend a maximum of 90 days within any rolling 180-day window in the whole
            Schengen Area — not per country. Days in Sweden, Germany or France all count towards the same total.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
          <Fingerprint className="size-6 text-primary" />
          <h2 className="mt-4 text-xl font-semibold">EES — the new Entry/Exit System</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Since October 2025, non-EU travellers have their fingerprints and a facial photo registered the first
            time they cross a Schengen border. It replaces passport stamps and automatically counts your 90 days.
            Allow a little extra time at the airport on your first trip.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
          <ShieldCheck className="size-6 text-primary" />
          <h2 className="mt-4 text-xl font-semibold">ETIAS — online travel authorisation</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Visa-free travellers will need an ETIAS — a quick online authorisation (around €20, valid for 3 years)
            — once the EU switches it on, expected from late 2026. Check the official EU site before you book so you
            know whether it applies on your travel dates.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-semibold">How to apply for a Schengen visa</h2>
        <ol className="mt-8 space-y-4">
          {steps.map((step, i) => (
            <li key={step} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-display font-semibold text-primary-foreground">
                {i + 1}
              </span>
              <p className="pt-1.5 text-sm">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold">Official sources</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            { href: "https://www.nyidanmark.dk/en-GB", label: "New to Denmark (visa rules)" },
            { href: "https://travel-europe.europa.eu/etias_en", label: "ETIAS — official EU site" },
            { href: "https://travel-europe.europa.eu/ees_en", label: "EES — official EU site" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
            >
              {l.label} <ExternalLink className="size-4" />
            </a>
          ))}
        </div>
        <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
          Rules change — always confirm the latest requirements for your nationality before you travel.
        </p>
      </section>

      <ChatCta question="Not sure what applies to your passport? Ask the AI guide and get an answer for your situation." />
    </>
  );
}
