import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Lightbulb, MapPin, TrainFront, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ChatCta } from "@/components/chat-cta";
import { cities, getCity } from "@/lib/cities";

export const Route = createFileRoute("/cities/$slug")({
  loader: ({ params }) => {
    const city = getCity(params.slug);
    if (!city) throw notFound();
    return { city };
  },
  head: ({ loaderData }) => {
    const city = loaderData?.city;
    if (!city) {
      return { meta: [{ title: "City not found — Hej Copenhagen" }, { name: "robots", content: "noindex" }] };
    }
    const title = `What to see in ${city.name} — Hej Copenhagen`;
    const description = `${city.tagline}. Top sights in ${city.name}, how to get there from Copenhagen and local tips.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold">We don't have that city yet</h1>
      <Link to="/cities" className="mt-6 inline-block font-semibold text-primary">
        See all cities
      </Link>
    </div>
  ),
  component: CityPage,
});

function CityPage() {
  const { city } = Route.useLoaderData();
  const others = cities.filter((c) => c.slug !== city.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={city.region} title={city.name} intro={city.tagline} image={city.image} />

      <section className="mx-auto mt-12 grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[2fr_1fr]">
        <div>
          <Link to="/cities" className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary">
            <ArrowLeft className="size-4" /> All cities
          </Link>
          <p className="mt-6 text-lg leading-relaxed">{city.intro}</p>

          <h2 className="mt-12 text-3xl font-semibold">What to see</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {city.sights.map((s) => (
              <div key={s.name} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-primary" />
                  <h3 className="font-semibold">{s.name}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-4 lg:pt-14">
          <div className="rounded-2xl bg-primary-soft p-6">
            <dl className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Users className="mt-0.5 size-4 text-primary" />
                <div>
                  <dt className="text-muted-foreground">Population</dt>
                  <dd className="font-semibold">{city.population}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrainFront className="mt-0.5 size-4 text-primary" />
                <div>
                  <dt className="text-muted-foreground">From Copenhagen</dt>
                  <dd className="font-semibold">{city.fromCopenhagen}</dd>
                </div>
              </div>
            </dl>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 font-semibold">
              <Lightbulb className="size-4 text-primary" /> Local tip
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{city.tip}</p>
          </div>
        </aside>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold">More cities</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {others.map((c) => (
            <Link
              key={c.slug}
              to="/cities/$slug"
              params={{ slug: c.slug }}
              className="group relative block aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <img src={c.image} alt="" loading="lazy" width={1280} height={896} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-hero" />
              <p className="absolute bottom-4 left-4 font-display text-xl font-semibold text-overlay-foreground">{c.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <ChatCta question={`Ask the AI guide for restaurants, hidden gems or a one-day plan for ${city.name}.`} />
    </>
  );
}
