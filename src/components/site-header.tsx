import { Link, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { LogOut, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/hooks/use-session";
import logo from "@/assets/hej-guide-logo.png";

const nav = [
  { to: "/visa", label: "Visa" },
  { to: "/currency", label: "Currency" },
  { to: "/cities", label: "Cities" },
  { to: "/people", label: "People" },
  { to: "/history", label: "History" },
  { to: "/planner", label: "Trip planner" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { user } = useSession();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  async function handleSignOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/", replace: true });
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={logo} alt="" width={32} height={32} className="size-8" />
          <span className="font-display text-lg font-semibold tracking-tight">
            Hej <span className="text-primary">Copenhagen</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              activeProps={{ className: "bg-accent text-accent-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {user && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSignOut}
              className="hidden rounded-full sm:inline-flex"
            >
              <LogOut /> Sign out
            </Button>
          )}
          <Button asChild variant="hero" size="sm" className="px-4">
            <Link to="/chat">
              <MessageCircle /> Ask AI
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-3 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 font-medium text-foreground hover:bg-accent"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
          {user && (
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                void handleSignOut();
              }}
              className="mt-1 block w-full rounded-lg px-3 py-2.5 text-left font-medium text-muted-foreground hover:bg-accent"
            >
              Sign out
            </button>
          )}
        </nav>
      )}
    </header>
  );
}
