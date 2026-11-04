import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-gradient-red text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold">Hej Copenhagen</p>
          <p className="mt-3 max-w-xs text-sm text-primary-foreground/80">
            A friendly guide for travellers visiting Copenhagen and the rest of Denmark.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <Link to="/visa" className="hover:underline">Visa & entry</Link>
          <Link to="/currency" className="hover:underline">Currency</Link>
          <Link to="/cities" className="hover:underline">Cities</Link>
          <Link to="/people" className="hover:underline">Danish people</Link>
          <Link to="/history" className="hover:underline">History</Link>
          <Link to="/chat" className="hover:underline">Ask the AI guide</Link>
        </div>
        <div className="text-sm text-primary-foreground/80">
          <p className="font-semibold text-primary-foreground">Emergency: 112</p>
          <p className="mt-1">Non-urgent police: 114</p>
          <p className="mt-4 text-xs">
            Information is a general guide. Always check official sources for visa and entry rules before you travel.
          </p>
        </div>
      </div>
    </footer>
  );
}
