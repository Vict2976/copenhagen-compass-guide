import { createFileRoute } from "@tanstack/react-router";
import { Bike, Clock, Coffee, Flag, MessageSquareQuote, Ruler, Shirt, Smile, Volume1 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ChatCta } from "@/components/chat-cta";
import people from "@/assets/people-copenhagen.jpg";

export const Route = createFileRoute("/people")({
  head: () => ({
    meta: [
      { title: "The Danish people — looks, style & culture — Hej Copenhagen" },
      {
        name: "description",
        content:
          "What do Danish people look like and how do they live? Style, hygge, etiquette, cycling culture and useful Danish phrases for visitors.",
      },
      { property: "og:title", content: "The Danish people — looks, style & culture" },
      {
        property: "og:description",
        content: "Danish style, hygge, etiquette and phrases every visitor should know.",
      },
    ],
  }),
  component: PeoplePage,
});

const looks = [
  {
    icon: Ruler,
    title: "Among the tallest in the world",
    body: "Danes are on average tall — around 1.81 m for men and 1.68 m for women. Many have blond or light-brown hair and blue or grey eyes.",
  },
  {
    icon: Smile,
    title: "A diverse country",
    body: "Around one in seven people living in Denmark has roots abroad, so you'll see every look on the streets of Copenhagen.",
  },
  {
    icon: Shirt,
    title: "Effortless Scandi style",
    body: "Think minimalist and practical: black, grey, beige and navy, good sneakers, a great coat and a rain jacket. Showing off is not very Danish.",
  },
  {
    icon: Bike,
    title: "Life on two wheels",
    body: "Over half of Copenhageners cycle to work or school — in suits, dresses, and all weather.",
  },
];

const etiquette = [
  { icon: Bike, title: "Respect the bike lanes", body: "Never walk or stand in a bike lane — cyclists are fast and won't expect you." },
  { icon: Clock, title: "Be on time", body: "Punctuality matters, for dinners and meetings alike." },
  { icon: Volume1, title: "Keep it quiet", body: "Danes talk softly on buses and trains. Look for the quiet zone carriages." },
  { icon: MessageSquareQuote, title: "Direct, not rude", body: "Danes are honest and informal — first names, few 'pleases'. It's friendliness, not coldness." },
  { icon: Coffee, title: "Hygge", body: "Cosy togetherness: candles, coffee, good company. Danes light more candles than almost anyone in Europe." },
  { icon: Flag, title: "Flags everywhere", body: "The Dannebrog flag shows up on birthdays and celebrations — it's festive, not political." },
];

const phrases = [
  { da: "Hej", en: "Hi", say: "hi" },
  { da: "Tak", en: "Thank you", say: "tak" },
  { da: "Mange tak", en: "Thanks a lot", say: "mang-eh tak" },
  { da: "Undskyld", en: "Excuse me / sorry", say: "oon-skewl" },
  { da: "Ja / Nej", en: "Yes / No", say: "ya / nai" },
  { da: "Skål!", en: "Cheers!", say: "skoal" },
  { da: "Farvel", en: "Goodbye", say: "far-vel" },
  { da: "Hvor er…?", en: "Where is…?", say: "voor air" },
];

function PeoplePage() {
  return (
    <>
      <PageHero
        eyebrow="The Danes"
        title="Meet the Danish people"
        intro="Consistently ranked among the happiest people on earth — relaxed, trusting, a little reserved at first and very warm once you get to know them."
        image={people}
      />

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <p className="eyebrow">Looks & style</p>
        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">How do Danes look?</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {looks.map((l) => (
            <div key={l.title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <l.icon className="size-6 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{l.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{l.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <p className="eyebrow">Culture & etiquette</p>
        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Fit in like a local</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {etiquette.map((e) => (
            <div key={e.title} className="rounded-2xl bg-primary-soft p-6">
              <e.icon className="size-5 text-primary" />
              <h3 className="mt-3 font-semibold">{e.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{e.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
          <strong className="text-foreground">Good to know:</strong> almost everyone speaks excellent English, so don't
          worry about the language — but a "tak" always earns a smile.
        </p>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <p className="eyebrow">Speak a little Danish</p>
        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Useful phrases</h2>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          {phrases.map((p, i) => (
            <div
              key={p.da}
              className={`grid grid-cols-3 gap-4 px-6 py-4 text-sm ${i % 2 ? "bg-muted/50" : ""}`}
            >
              <span className="font-display text-base font-semibold text-primary">{p.da}</span>
              <span>{p.en}</span>
              <span className="text-muted-foreground italic">"{p.say}"</span>
            </div>
          ))}
        </div>
      </section>

      <ChatCta question="Curious about Danish customs, food or how to make friends? Ask the AI guide." />
    </>
  );
}
