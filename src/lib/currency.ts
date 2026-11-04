export interface CurrencyInfo {
  code: string;
  name: string;
  flag: string;
}

export const currencies: CurrencyInfo[] = [
  { code: "DKK", name: "Danish krone", flag: "🇩🇰" },
  { code: "EUR", name: "Euro", flag: "🇪🇺" },
  { code: "USD", name: "US dollar", flag: "🇺🇸" },
  { code: "GBP", name: "British pound", flag: "🇬🇧" },
  { code: "SEK", name: "Swedish krona", flag: "🇸🇪" },
  { code: "NOK", name: "Norwegian krone", flag: "🇳🇴" },
  { code: "CHF", name: "Swiss franc", flag: "🇨🇭" },
  { code: "CAD", name: "Canadian dollar", flag: "🇨🇦" },
  { code: "AUD", name: "Australian dollar", flag: "🇦🇺" },
  { code: "JPY", name: "Japanese yen", flag: "🇯🇵" },
  { code: "CNY", name: "Chinese yuan", flag: "🇨🇳" },
  { code: "INR", name: "Indian rupee", flag: "🇮🇳" },
];

/**
 * Approximate fallback rates, expressed as "how many DKK one unit buys".
 * The krone is pegged to the euro at roughly 7.46.
 */
export const fallbackDkkPerUnit: Record<string, number> = {
  DKK: 1,
  EUR: 7.46,
  USD: 6.45,
  GBP: 8.6,
  SEK: 0.68,
  NOK: 0.63,
  CHF: 8.0,
  CAD: 4.65,
  AUD: 4.2,
  JPY: 0.043,
  CNY: 0.9,
  INR: 0.075,
};

/** Convert an amount between two currencies using "DKK per unit" rates. */
export function convert(
  amount: number,
  from: string,
  to: string,
  dkkPerUnit: Record<string, number>,
): number {
  const fromRate = dkkPerUnit[from];
  const toRate = dkkPerUnit[to];
  if (!fromRate || !toRate || !Number.isFinite(amount)) return 0;
  return (amount * fromRate) / toRate;
}

/**
 * Turn an API response of "units per 1 DKK" (base DKK) into "DKK per unit".
 */
export function invertDkkBaseRates(perDkk: Record<string, number>): Record<string, number> {
  const out: Record<string, number> = {};
  for (const [code, rate] of Object.entries(perDkk)) {
    if (rate > 0) out[code] = 1 / rate;
  }
  out["DKK"] = 1;
  return out;
}

export function formatMoney(value: number, code: string): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: code,
    maximumFractionDigits: code === "JPY" ? 0 : 2,
  }).format(value);
}
