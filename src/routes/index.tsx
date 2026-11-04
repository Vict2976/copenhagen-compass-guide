import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Coins,
  Droplets,
  MapPinned,
  Phone,
  Plug,
  Clock,
  Languages,
  Stamp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatCta } from "@/components/chat-cta";
import hero from "@/assets/hero-nyhavn.jpg";
import people from "@/assets/people-copenhagen.jpg";
import roskilde from "@/assets/city-roskilde.jpg";
import copenhagen from "@/assets/city-copenhagen.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hej Copenhagen — Your friendly guide to Copenhagen & Denmark" },
      {
        name: "description",
        content:
          "Everything travellers need for Copenhagen and Denmark: visa rules, the Danish krone with a currency calculator, main cities, local culture, history and an AI travel guide.",
      },
      { property: "og:title", content: "Hej Copenhagen — Your friendly guide to Copenhagen & Denmark" },
      {
        property: "og:description",
        content: "Visa, currency, cities, culture, history and an AI travel guide for visitors to Denmark.",
      },
    ],
  }),
  component: Index,
});

const facts = [
  { icon: Coins, label: "Currency", value: "Danish krone (DKK)" },
  { icon: Languages, label: "Language", value: "Danish · English widely spoken" },
  { icon: Clock, label: "Time zone", value: "CET (UTC+1), summer UTC+2" },
  { icon: Phone, label: "Emergency", value: "112" },
  { icon: Plug, label: "Plugs", value: "Type C, E/F & K · 230 V" },
  { icon: Droplets, label: "Tap water", value: "Safe & delicious" },
];

const sections = [
  {
    to: "/visa" as const,
    icon: Stamp,
    title: "Visa & entry",
    text: "Do you need a visa? The Schengen 90/180 rule, EES and ETIAS explained.",
  },
  {
    to: "/currency" as const,
    icon: Coins,
    title: "Money & calculator",
    text: "The Danish krone, cards vs cash, tipping — and a live currency calculator.",
  },
  {
    to: "/cities" as const,
    icon: MapPinned,
    title: "Main cities",
    text: "Copenhagen, Aarhus, Odense, Aalborg and more — with the best things to see.",
  },
  {
    to: "/people" as const,
    icon: Users,
    title: "The Danish people",
    text: "What Danes are like, how they dress, hygge, etiquette and useful phrases.",
  },
  {
    to: "/history" as const,
    icon: BookOpen,
    title: "History",
    text: "From Vikings and kings to the modern welfare state, in one timeline.",
  },
];

function Index() {
  return (
    <>
      <section className="relative isolate -mt-16 flex min-h-[88vh] items-end overflow-hidden">
        <img
          src={hero}
          alt="Colourful houses and old ships along Nyhavn harbour in Copenhagen"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-40 sm:px-6">
          <p className="eyebrow !text-overlay-foreground/90 animate-rise">Velkommen til Danmark</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.02] text-overlay-foreground sm:text-7xl animate-rise">
            Your friendly guide to Copenhagen.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-overlay-foreground/90 animate-rise">
            Visa rules, money, cities, culture and history — and an AI guide you can ask anything, any time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-rise">
            <Button asChild variant="hero" size="xl">
              <Link to="/chat">
                Ask the AI guide <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/cities">Explore cities</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-10 max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-card md:grid-cols-3 lg:grid-cols-6">
          {facts.map((f) => (
            <div key={f.label} className="bg-card p-5">
              <f.icon className="size-5 text-primary" />
              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {f.label}
              </p>
              <p className="mt-1 text-sm font-semibold">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-4 sm:px-6">
        <p className="eyebrow">Plan your trip</p>
        <h2 className="mt-2 text-3xl font-semibold sm:text-5xl">Everything you need to know</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Read more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
          <Link
            to="/chat"
            className="group flex flex-col justify-between rounded-2xl bg-gradient-red p-7 text-primary-foreground shadow-lift transition-transform hover:-translate-y-1"
          >
            <div>
              <h3 className="text-xl font-semibold">Ask the AI guide</h3>
              <p className="mt-2 text-sm text-primary-foreground/85">
                Personal answers about your trip — routes, food, budgets and more.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold">
              Start chatting <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-24 grid max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-3">
        {[
          { img: copenhagen, title: "Copenhagen from above", to: "/cities/$slug" as const, slug: "copenhagen" },
          { img: people, title: "Meet the Danes", to: "/people" as const },
          { img: roskilde, title: "1,000 years of history", to: "/history" as const },
        ].map((card) => (
          <Link
            key={card.title}
            to={card.to}
            params={card.slug ? { slug: card.slug } : undefined}
            className="group relative block aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <img
              src={card.img}
              alt=""
              loading="lazy"
              width={1280}
              height={896}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-hero" />
            <p className="absolute bottom-5 left-5 right-5 text-2xl font-semibold text-overlay-foreground font-display">
              {card.title}
            </p>
          </Link>
        ))}
      </section>

      <ChatCta />
    </>
  );
}
