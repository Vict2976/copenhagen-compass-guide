import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TrainFront } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ChatCta } from "@/components/chat-cta";
import { cities } from "@/lib/cities";

export const Route = createFileRoute("/cities/")({
  head: () => ({
    meta: [
      { title: "Main cities in Denmark & what to see — Hej Copenhagen" },
      {
        name: "description",
        content:
          "Copenhagen, Aarhus, Odense, Aalborg, Roskilde and Helsingør: the main cities in Denmark and the best sights in each.",
      },
      { property: "og:title", content: "Main cities in Denmark & what to see" },
      {
        property: "og:description",
        content: "Six Danish cities worth visiting, with top sights and travel times from Copenhagen.",
      },
    ],
  }),
  component: CitiesPage,
});

function CitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Cities"
        title="Denmark's main cities"
        intro="Denmark is small — the train gets you from Copenhagen to almost anywhere in a few hours. Here's where to go and what to see."
      />
      <section className="mx-auto mt-8 grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2">
        {cities.map((city, i) => (
          <Link
            key={city.slug}
            to="/cities/$slug"
            params={{ slug: city.slug }}
            className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={city.image}
                alt={city.name}
                loading={i < 2 ? "eager" : "lazy"}
                width={1280}
                height={896}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-7">
              <p className="eyebrow">{city.region}</p>
              <h2 className="mt-2 text-2xl font-semibold">{city.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{city.tagline}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <TrainFront className="size-4" /> {city.fromCopenhagen}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  What to see <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>
      <ChatCta question="Planning a route? Ask the AI guide to build a day-by-day itinerary across Denmark." />
    </>
  );
}
