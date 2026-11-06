import { cities } from "@/lib/cities";

// Searchable knowledge base built from the site's own pages. Each chunk links
// back to the page it came from so the AI guide can cite it.
export interface KnowledgeChunk {
  id: string;
  title: string;
  url: string;
  text: string;
}

const pageChunks: KnowledgeChunk[] = [
  {
    id: "visa-who",
    title: "Visa & entry: who needs a visa",
    url: "/visa",
    text: "Denmark is part of the Schengen Area (29 European countries). EU/EEA and Swiss citizens need no visa, only a valid passport or national ID card, and can stay, work and study freely. Citizens of visa-free countries such as the USA, UK, Canada, Australia, Japan and Brazil can visit for up to 90 days in any 180-day period without a visa. Citizens of e.g. India, China, Türkiye, Nigeria and many others need a Schengen short-stay visa before travelling.",
  },
  {
    id: "visa-90-180",
    title: "Visa & entry: the 90/180-day rule",
    url: "/visa",
    text: "Visitors without residence can spend a maximum of 90 days within any rolling 180-day window in the whole Schengen Area, not per country. Days in Sweden, Germany or France all count towards the same total.",
  },
  {
    id: "visa-apply",
    title: "Visa & entry: how to apply for a Schengen visa",
    url: "/visa",
    text: "Check whether you need a visa on nyidanmark.dk. Apply online and book an appointment at a visa centre or Danish embassy, ideally 1–3 months before travel (at most 6 months ahead). Prepare a passport valid at least 3 months after you leave and issued within 10 years, photos, travel insurance with at least €30,000 medical cover, flight and hotel bookings and proof of funds. Pay the visa fee (currently €90 for adults, reduced for children) and give fingerprints. Processing usually takes up to 15 days, longer in peak season.",
  },
  {
    id: "currency",
    title: "Currency: the Danish krone",
    url: "/currency",
    text: "Denmark uses the Danish krone (DKK, kr), not the euro. The krone is pegged to the euro at roughly 7.46 DKK per EUR. Cards and mobile payments are accepted almost everywhere, including small cafés; cash is rarely needed. Use the currency calculator on the site to convert prices.",
  },
  {
    id: "people-looks",
    title: "Danish people: looks and style",
    url: "/people",
    text: "Danes are among the tallest in the world — around 1.81 m for men and 1.68 m for women, often blond or light-brown hair and blue or grey eyes. About one in seven people living in Denmark has roots abroad. Style is minimalist and practical: black, grey, beige and navy, good sneakers, a great coat and a rain jacket. Over half of Copenhageners cycle to work or school in all weather.",
  },
  {
    id: "people-etiquette",
    title: "Danish people: etiquette",
    url: "/people",
    text: "Never walk or stand in a bike lane. Be on time. Talk quietly on buses and trains and look for quiet-zone carriages. Danes are direct and informal — first names, few 'pleases' — which is friendliness, not rudeness. Hygge means cosy togetherness: candles, coffee and good company. The Dannebrog flag appears at birthdays and celebrations; it's festive, not political.",
  },
  {
    id: "people-phrases",
    title: "Danish people: useful phrases",
    url: "/people",
    text: "Hej (hi), Tak (thank you), Mange tak (thanks a lot, 'mang-eh tak'), Undskyld (excuse me / sorry, 'oon-skewl'), Ja / Nej (yes / no), Skål! (cheers, 'skoal'), Farvel (goodbye), Hvor er…? (where is…?, 'voor air').",
  },
  {
    id: "history-early",
    title: "History: Vikings to the Kalmar Union",
    url: "/history",
    text: "Viking Age c. 793–1066: Danish Vikings raid, trade and settle across Europe; see their ships in Roskilde. c. 965 Harald Bluetooth raises the Jelling Stones and converts Danes to Christianity. 1016–1035 Cnut the Great rules Denmark, England and Norway. 1167 Bishop Absalon founds Copenhagen on Slotsholmen, today home of Christiansborg Palace. 1397 Queen Margrete I unites Denmark, Norway and Sweden in the Kalmar Union.",
  },
  {
    id: "history-middle",
    title: "History: Reformation to constitution",
    url: "/history",
    text: "1536 the Reformation makes Denmark Lutheran. 1588–1648 Christian IV builds Rosenborg Castle, the Round Tower, the Stock Exchange and Nyboder. 1658 Treaty of Roskilde: Scania is lost to Sweden. 1849 the constitution ends absolute monarchy, celebrated every 5 June. 1864 defeat by Prussia costs Schleswig-Holstein.",
  },
  {
    id: "history-modern",
    title: "History: modern Denmark",
    url: "/history",
    text: "1940–1945 German occupation; in October 1943 Danes help over 7,000 Jews escape by boat to Sweden. 1960s–70s welfare state and Danish design (Arne Jacobsen, LEGO, Bang & Olufsen); Denmark joins the EEC in 1973. 2000 the Øresund Bridge links Copenhagen and Malmö. 2024 Queen Margrethe II abdicates and King Frederik X takes the throne.",
  },
];

const cityChunks: KnowledgeChunk[] = cities.flatMap((c) => [
  {
    id: `city-${c.slug}`,
    title: `${c.name}: overview`,
    url: `/cities/${c.slug}`,
    text: `${c.name} (${c.region}) — ${c.tagline}. Population ${c.population}. From Copenhagen: ${c.fromCopenhagen}. ${c.intro} Local tip: ${c.tip}`,
  },
  {
    id: `city-${c.slug}-sights`,
    title: `${c.name}: what to see`,
    url: `/cities/${c.slug}`,
    text: `Top sights in ${c.name}: ${c.sights.map((s) => `${s.name} — ${s.description}`).join(" ")}`,
  },
]);

export const knowledge: KnowledgeChunk[] = [...pageChunks, ...cityChunks];

function tokens(s: string): string[] {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2);
}

// Keyword relevance score (used to blend with, or fall back from, embeddings).
export function keywordScores(query: string, chunks: KnowledgeChunk[] = knowledge): number[] {
  const q = new Set(tokens(query));
  return chunks.map((c) => {
    if (q.size === 0) return 0;
    const words = new Set(tokens(`${c.title} ${c.title} ${c.text}`));
    let hit = 0;
    for (const t of q) if (words.has(t)) hit++;
    return hit / q.size;
  });
}

export function cosine(a: number[], b: number[]): number {
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) {
    const x = a[i] ?? 0, y = b[i] ?? 0;
    dot += x * y;
    na += x * x;
    nb += y * y;
  }
  return na && nb ? dot / Math.sqrt(na * nb) : 0;
}

export interface Source {
  title: string;
  url: string;
}

// Unique page links for a set of chunks, in rank order.
export function toSources(chunks: KnowledgeChunk[]): Source[] {
  const seen = new Map<string, Source>();
  for (const c of chunks) if (!seen.has(c.url)) seen.set(c.url, { title: c.title.split(":")[0] ?? c.title, url: c.url });
  return [...seen.values()];
}
