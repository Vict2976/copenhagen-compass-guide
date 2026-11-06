import { describe, expect, it } from "vitest";
import { keywordScores, knowledge, toSources } from "@/lib/knowledge";

describe("site knowledge search", () => {
  it("ranks the visa page first for a visa question", () => {
    const scores = keywordScores("Do I need a Schengen visa?");
    const best = knowledge[scores.indexOf(Math.max(...scores))];
    expect(best?.url).toBe("/visa");
  });

  it("finds Aarhus content for ARoS", () => {
    const scores = keywordScores("ARoS rainbow museum");
    const best = knowledge[scores.indexOf(Math.max(...scores))];
    expect(best?.url).toBe("/cities/aarhus");
  });

  it("deduplicates sources by page", () => {
    const visa = knowledge.filter((c) => c.url === "/visa");
    expect(toSources(visa)).toEqual([{ title: "Visa & entry", url: "/visa" }]);
  });
});
