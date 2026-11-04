import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
  children?: ReactNode;
}

/** Shared top-of-page header. With an image it becomes a photo banner. */
export function PageHero({ eyebrow, title, intro, image, children }: PageHeroProps) {
  if (image) {
    return (
      <section className="relative isolate overflow-hidden">
        <img
          src={image}
          alt=""
          width={1280}
          height={896}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pt-36">
          <p className="eyebrow !text-overlay-foreground/90 animate-rise">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold text-overlay-foreground sm:text-6xl animate-rise">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-2xl text-lg text-overlay-foreground/90 animate-rise">{intro}</p>
          )}
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 pb-6 pt-16 sm:px-6 sm:pt-20">
      <p className="eyebrow animate-rise">{eyebrow}</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-semibold sm:text-6xl animate-rise">{title}</h1>
      {intro && <p className="mt-5 max-w-2xl text-lg text-muted-foreground animate-rise">{intro}</p>}
      {children}
    </section>
  );
}
