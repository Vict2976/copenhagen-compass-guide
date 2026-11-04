import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowDownUp, Banknote, CreditCard, HandCoins, Receipt, Smartphone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ChatCta } from "@/components/chat-cta";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  convert,
  currencies,
  fallbackDkkPerUnit,
  formatMoney,
  invertDkkBaseRates,
} from "@/lib/currency";

export const Route = createFileRoute("/currency")({
  head: () => ({
    meta: [
      { title: "Danish krone & currency calculator — Hej Copenhagen" },
      {
        name: "description",
        content:
          "The local currency in Denmark is the Danish krone (DKK). Convert prices with our calculator and learn about cards, cash, MobilePay and tipping.",
      },
      { property: "og:title", content: "Danish krone & currency calculator" },
      {
        property: "og:description",
        content: "Convert to and from Danish kroner, plus tips on paying, tipping and tax-free shopping.",
      },
    ],
  }),
  component: CurrencyPage,
});

const examples = [
  { item: "Coffee in a café", price: 45 },
  { item: "Smørrebrød lunch", price: 120 },
  { item: "Beer in a bar", price: 65 },
  { item: "Metro ticket (2 zones)", price: 30 },
  { item: "Dinner for one, mid-range", price: 350 },
  { item: "Tivoli entry", price: 185 },
];

function CurrencyPage() {
  const [rates, setRates] = useState<Record<string, number>>(fallbackDkkPerUnit);
  const [live, setLive] = useState(false);
  const [updated, setUpdated] = useState<string | null>(null);
  const [amount, setAmount] = useState("100");
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("DKK");

  useEffect(() => {
    let cancelled = false;
    fetch("https://open.er-api.com/v6/latest/DKK")
      .then((r) => r.json())
      .then((json: { result?: string; rates?: Record<string, number>; time_last_update_utc?: string }) => {
        if (cancelled || json.result !== "success" || !json.rates) return;
        setRates({ ...fallbackDkkPerUnit, ...invertDkkBaseRates(json.rates) });
        setLive(true);
        setUpdated(json.time_last_update_utc ?? null);
      })
      .catch(() => {
        /* keep approximate fallback rates */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const numeric = Number(amount.replace(",", "."));
  const result = useMemo(() => convert(numeric, from, to, rates), [numeric, from, to, rates]);
  const homeCode = from === "DKK" ? to : from;

  return (
    <>
      <PageHero
        eyebrow="Money"
        title="The Danish krone (DKK)"
        intro="Denmark keeps its own currency — the krone, written 'kr.' or DKK. 1 krone = 100 øre. It's pegged to the euro at about 7.46 kr."
      />

      <section className="mx-auto mt-8 max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-2xl font-semibold">Currency calculator</h2>
            <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-accent-foreground">
              {live ? "Live rates" : "Approximate rates"}
            </span>
          </div>

          <div className="mt-8 grid items-end gap-4 md:grid-cols-[1fr_auto_1fr]">
            <div className="space-y-2">
              <label htmlFor="amount" className="text-sm font-medium text-muted-foreground">
                Amount
              </label>
              <div className="flex gap-2">
                <Input
                  id="amount"
                  inputMode="decimal"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="h-12 text-lg font-semibold"
                />
                <CurrencySelect value={from} onChange={setFrom} label="From currency" />
              </div>
            </div>
            <Button
              variant="outline"
              size="icon-lg"
              className="mx-auto rounded-full"
              aria-label="Swap currencies"
              onClick={() => {
                setFrom(to);
                setTo(from);
              }}
            >
              <ArrowDownUp />
            </Button>
            <div className="space-y-2">
              <span className="text-sm font-medium text-muted-foreground">Converted</span>
              <div className="flex gap-2">
                <div className="flex h-12 flex-1 items-center rounded-md bg-primary-soft px-3 text-lg font-semibold text-accent-foreground">
                  {formatMoney(result, to)}
                </div>
                <CurrencySelect value={to} onChange={setTo} label="To currency" />
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            {live && updated
              ? `Rates updated ${updated}. `
              : "Using approximate rates. "}
            Your bank or card may charge a small fee on top.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-semibold">What things cost</h2>
        <p className="mt-2 text-muted-foreground">Typical Copenhagen prices, shown in {homeCode} too.</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((e) => (
            <div key={e.item} className="flex items-center justify-between rounded-xl border border-border bg-card p-5">
              <span className="text-sm font-medium">{e.item}</span>
              <span className="text-right">
                <span className="block font-display font-semibold">{e.price} kr.</span>
                <span className="block text-xs text-muted-foreground">
                  ≈ {formatMoney(convert(e.price, "DKK", homeCode, rates), homeCode)}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: CreditCard,
            title: "Cards everywhere",
            body: "Visa and Mastercard are accepted almost everywhere, even for a single coffee. Some shops are completely cash-free.",
          },
          {
            icon: Smartphone,
            title: "Phone payments",
            body: "Apple Pay and Google Pay work widely. Locals use MobilePay — you can usually ignore it as a visitor.",
          },
          {
            icon: Banknote,
            title: "Cash",
            body: "Notes: 50, 100, 200, 500, 1000 kr. Coins: 50 øre and 1, 2, 5, 10, 20 kr. Euros are rarely accepted.",
          },
          {
            icon: HandCoins,
            title: "Tipping",
            body: "Not expected — service is included in prices. Rounding up or leaving 5–10% for great service is a kind extra.",
          },
          {
            icon: Receipt,
            title: "Tax-free shopping",
            body: "Prices include 25% VAT (moms). Non-EU visitors can claim part of it back on larger purchases — ask for a tax-free form.",
          },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
            <c.icon className="size-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
          </div>
        ))}
      </section>

      <ChatCta question="Want help planning a daily budget? The AI guide can estimate costs for your trip." />
    </>
  );
}

function CurrencySelect({
  value,
  onChange,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  label: string;
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger aria-label={label} className="!h-12 w-32 font-semibold">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {currencies.map((c) => (
          <SelectItem key={c.code} value={c.code}>
            {c.flag} {c.code}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
