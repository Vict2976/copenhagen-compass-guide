import copenhagen from "@/assets/city-copenhagen.jpg";
import aarhus from "@/assets/city-aarhus.jpg";
import odense from "@/assets/city-odense.jpg";
import aalborg from "@/assets/city-aalborg.jpg";
import roskilde from "@/assets/city-roskilde.jpg";
import helsingor from "@/assets/city-helsingor.jpg";

export interface Sight {
  name: string;
  description: string;
}

export interface City {
  slug: string;
  name: string;
  tagline: string;
  region: string;
  population: string;
  fromCopenhagen: string;
  image: string;
  intro: string;
  sights: Sight[];
  tip: string;
}

export const cities: City[] = [
  {
    slug: "copenhagen",
    name: "Copenhagen",
    tagline: "The capital of canals, bikes and New Nordic food",
    region: "Zealand",
    population: "≈ 1.4 million (metro)",
    fromCopenhagen: "You're here!",
    image: copenhagen,
    intro:
      "Denmark's capital mixes royal palaces and colourful harbour houses with world-class design, cycling culture and some of the best restaurants in Europe. It's compact, safe and easy to explore on foot, by bike or by metro.",
    sights: [
      { name: "Nyhavn", description: "The iconic 17th-century harbour with colourful townhouses, old wooden ships and canal-side cafés." },
      { name: "Tivoli Gardens", description: "One of the world's oldest amusement parks (1843) — rides, gardens, concerts and magical evening lights." },
      { name: "Rosenborg Castle", description: "Renaissance castle of King Christian IV, home to the Danish Crown Jewels, set in the King's Garden." },
      { name: "Amalienborg Palace", description: "Home of the Danish royal family. Watch the changing of the guard daily at noon." },
      { name: "The Round Tower", description: "A 17th-century observatory with a spiral ramp instead of stairs and great views over the old town." },
      { name: "Christiania", description: "The famous free-town with murals, workshops and green paths. Respect the 'no photos' rule on Pusher Street." },
      { name: "The Little Mermaid", description: "The small bronze statue inspired by H.C. Andersen's fairy tale, along the Langelinie promenade." },
      { name: "Canal tour", description: "A one-hour boat trip is the easiest way to see the city from the water." },
    ],
    tip: "Buy a Copenhagen Card or a City Pass for unlimited metro, bus and train in the central zones — the metro runs 24/7 and connects the airport to the centre in about 15 minutes.",
  },
  {
    slug: "aarhus",
    name: "Aarhus",
    tagline: "Denmark's young, creative second city",
    region: "Jutland",
    population: "≈ 370,000",
    fromCopenhagen: "≈ 3 h by train",
    image: aarhus,
    intro:
      "A lively student city on Jutland's east coast with striking modern architecture, a beautiful old town and beaches and forests just outside the centre.",
    sights: [
      { name: "ARoS Art Museum", description: "Walk the rainbow-coloured 'Your rainbow panorama' on the roof for 360° views." },
      { name: "Den Gamle By", description: "An open-air museum of Danish town life from the 1600s up to the 1970s." },
      { name: "Moesgaard Museum", description: "Superb archaeology and Viking-age exhibits in a building with a walkable grass roof." },
      { name: "Aarhus Ø & The Iceberg", description: "The new harbour district with bold apartments and a harbour bath for swimming." },
      { name: "Latin Quarter", description: "Cobbled streets full of cafés, vintage shops and small boutiques." },
    ],
    tip: "Take bus 18 or a short bike ride to Moesgaard and continue to the beach and forest trails nearby.",
  },
  {
    slug: "odense",
    name: "Odense",
    tagline: "Fairy-tale hometown of Hans Christian Andersen",
    region: "Funen",
    population: "≈ 210,000",
    fromCopenhagen: "≈ 1 h 15 min by train",
    image: odense,
    intro:
      "Denmark's third-largest city sits in the middle of the island of Funen. Its charming old quarter of low, colourful houses is where H.C. Andersen grew up.",
    sights: [
      { name: "H.C. Andersen's House", description: "A modern, imaginative museum about the storyteller's life and fairy tales." },
      { name: "Old town lanes", description: "Wander Overgade and the little streets around the birthplace museum." },
      { name: "The Funen Village", description: "Open-air museum with old farms, animals and rural life on Funen." },
      { name: "Odense Zoo", description: "One of Europe's best-rated zoos, by the river Odense Å." },
      { name: "St. Canute's Cathedral", description: "Gothic cathedral holding the remains of King Canute IV." },
    ],
    tip: "Odense is an easy day trip from Copenhagen — combine it with the castle Egeskov in south Funen.",
  },
  {
    slug: "aalborg",
    name: "Aalborg",
    tagline: "Waterfront life and nightlife in North Jutland",
    region: "North Jutland",
    population: "≈ 120,000",
    fromCopenhagen: "≈ 4 h 30 min by train, 45 min by plane",
    image: aalborg,
    intro:
      "A friendly harbour city on the Limfjord with a revitalised waterfront, great architecture and Denmark's famous party street, Jomfru Ane Gade.",
    sights: [
      { name: "Utzon Center", description: "Architecture centre designed by Jørn Utzon, creator of the Sydney Opera House." },
      { name: "Kunsten", description: "Modern art museum in a white Alvar Aalto building, surrounded by a sculpture park." },
      { name: "Lindholm Høje", description: "One of Scandinavia's largest Viking burial grounds, with stone ship settings." },
      { name: "Jomfru Ane Gade", description: "A lively street packed with bars and restaurants." },
      { name: "Aalborghus Castle", description: "A half-timbered 16th-century castle with underground passages." },
    ],
    tip: "Continue north to Skagen, where the North Sea meets the Baltic and you can stand with a foot in each sea.",
  },
  {
    slug: "roskilde",
    name: "Roskilde",
    tagline: "Vikings, kings and Northern Europe's biggest festival",
    region: "Zealand",
    population: "≈ 52,000",
    fromCopenhagen: "≈ 25 min by train",
    image: roskilde,
    intro:
      "An ancient royal town on Roskilde Fjord. It's home to the burial church of Danish monarchs and real Viking ships — and every summer, the huge Roskilde Festival.",
    sights: [
      { name: "Viking Ship Museum", description: "Five original 11th-century Viking ships, plus reconstructed boats you can sail in summer." },
      { name: "Roskilde Cathedral", description: "UNESCO World Heritage site and burial place of around 40 Danish kings and queens." },
      { name: "RAGNAROCK", description: "Museum of rock, pop and youth culture in a striking gold-studded building." },
      { name: "Roskilde Festival", description: "One of Europe's largest music festivals, held late June/early July." },
    ],
    tip: "It's within the Copenhagen region, so it's a cheap and quick half-day trip.",
  },
  {
    slug: "helsingor",
    name: "Helsingør",
    tagline: "Hamlet's castle on the Øresund",
    region: "North Zealand",
    population: "≈ 47,000",
    fromCopenhagen: "≈ 45 min by train",
    image: helsingor,
    intro:
      "A historic port town facing Sweden across the narrowest point of the Øresund. Kronborg Castle, the setting of Shakespeare's Hamlet, guards the water.",
    sights: [
      { name: "Kronborg Castle", description: "UNESCO-listed Renaissance castle — explore the casemates and find the sleeping Holger Danske." },
      { name: "M/S Maritime Museum", description: "Award-winning museum built into an old dry dock next to the castle." },
      { name: "Old town", description: "Well-preserved medieval streets and merchant houses." },
      { name: "Louisiana Museum", description: "Famous modern art museum by the sea in nearby Humlebæk, on the same train line." },
      { name: "Ferry to Helsingborg", description: "Hop on the 20-minute ferry to Sweden for lunch." },
    ],
    tip: "Combine Louisiana Museum (Humlebæk) and Kronborg in one day along the coastal train line.",
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
