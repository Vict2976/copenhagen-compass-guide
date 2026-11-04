import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { ChatCta } from "@/components/chat-cta";
import roskilde from "@/assets/city-roskilde.jpg";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "History of Denmark — from Vikings to today — Hej Copenhagen" },
      {
        name: "description",
        content:
          "A visitor-friendly timeline of Danish history: Vikings, Harald Bluetooth, the founding of Copenhagen, Christian IV, WWII and modern Denmark.",
      },
      { property: "og:title", content: "History of Denmark — from Vikings to today" },
      {
        property: "og:description",
        content: "A short, visual timeline of over a thousand years of Danish history.",
      },
    ],
  }),
  component: HistoryPage,
});

const timeline = [
  { year: "c. 793–1066", title: "The Viking Age", body: "Danish Vikings raid, trade and settle across Europe — from England and Normandy to the Baltic. See their ships in Roskilde." },
  { year: "c. 965", title: "Harald Bluetooth unites Denmark", body: "King Harald raises the Jelling Stones — Denmark's 'birth certificate' — and converts the Danes to Christianity. Bluetooth technology is named after him." },
  { year: "1016–1035", title: "Cnut the Great's North Sea empire", body: "Cnut rules Denmark, England and Norway at the same time." },
  { year: "1167", title: "Copenhagen is founded", body: "Bishop Absalon builds a castle on a small island — today's Slotsholmen, home of Christiansborg Palace and the Danish Parliament." },
  { year: "1397", title: "The Kalmar Union", body: "Queen Margrete I unites Denmark, Norway and Sweden under one crown." },
  { year: "1536", title: "The Reformation", body: "Denmark becomes Lutheran Protestant — still the official church today." },
  { year: "1588–1648", title: "Christian IV, the builder king", body: "He gives Copenhagen Rosenborg Castle, the Round Tower, the Stock Exchange and the Nyboder houses." },
  { year: "1658", title: "Southern Sweden is lost", body: "In the Treaty of Roskilde, Denmark loses Scania and other provinces to Sweden." },
  { year: "1849", title: "Denmark's constitution", body: "Absolute monarchy ends peacefully and Denmark becomes a constitutional monarchy — celebrated every 5 June." },
  { year: "1864", title: "War with Prussia", body: "Defeat costs Denmark Schleswig-Holstein; the motto becomes 'what is lost outwardly must be won inwardly'." },
  { year: "1940–1945", title: "German occupation", body: "In October 1943 ordinary Danes help over 7,000 Jews escape by boat to safety in Sweden." },
  { year: "1960s–70s", title: "Welfare state & design", body: "Free healthcare and education, plus world-famous Danish design: Arne Jacobsen, LEGO, Bang & Olufsen. Denmark joins the EEC in 1973." },
  { year: "2000", title: "The Øresund Bridge", body: "A bridge-and-tunnel link connects Copenhagen with Malmö in Sweden." },
  { year: "2024", title: "A new king", body: "Queen Margrethe II abdicates after 52 years and her son becomes King Frederik X." },
];

function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="History"
        title="Over 1,000 years of Danish history"
        intro="One of the world's oldest monarchies — from Viking longships to a modern welfare state."
        image={roskilde}
      />

      <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6">
        <ol className="relative border-l-2 border-primary/25 pl-8">
          {timeline.map((t) => (
            <li key={t.year} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[41px] top-1 flex size-5 items-center justify-center rounded-full border-4 border-background bg-primary" />
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-primary">{t.year}</p>
              <h2 className="mt-1 text-2xl font-semibold">{t.title}</h2>
              <p className="mt-2 text-muted-foreground">{t.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <ChatCta question="Want to dig deeper into a period or find the best history museums? Ask the AI guide." />
    </>
  );
}
