import { describe, expect, it } from "vitest";
import { convert, fallbackDkkPerUnit, invertDkkBaseRates } from "@/lib/currency";

describe("currency calculator", () => {
  it("converts 100 EUR to 746 DKK at the peg rate", () => {
    expect(convert(100, "EUR", "DKK", fallbackDkkPerUnit)).toBeCloseTo(746, 5);
  });

  it("converts 746 DKK back to 100 EUR", () => {
    expect(convert(746, "DKK", "EUR", fallbackDkkPerUnit)).toBeCloseTo(100, 5);
  });

  it("converts between two foreign currencies via DKK", () => {
    const rates = { DKK: 1, EUR: 7.5, USD: 6.0 };
    expect(convert(10, "EUR", "USD", rates)).toBeCloseTo(12.5, 5);
  });

  it("returns 0 for an unknown currency", () => {
    expect(convert(10, "XYZ", "DKK", fallbackDkkPerUnit)).toBe(0);
  });

  it("inverts DKK-based API rates into DKK per unit", () => {
    const rates = invertDkkBaseRates({ DKK: 1, EUR: 0.134 });
    expect(rates.EUR).toBeCloseTo(7.4627, 3);
    expect(rates.DKK).toBe(1);
  });
});
