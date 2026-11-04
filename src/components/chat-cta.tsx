import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ChatCta({ question }: { question?: string }) {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
      <div className="flag-cross overflow-hidden rounded-3xl bg-gradient-red p-8 text-primary-foreground shadow-lift sm:p-12 [&::after]:opacity-15 [&::before]:opacity-15">
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Still have questions?</h2>
          <p className="mt-3 text-primary-foreground/85">
            {question ??
              "Ask our AI travel guide anything about Copenhagen and Denmark — from metro tickets to where to eat smørrebrød."}
          </p>
          <Button asChild variant="inverse" size="xl" className="mt-6">
            <Link to="/chat">
              Chat with the guide <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
