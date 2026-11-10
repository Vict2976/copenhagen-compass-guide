# Module: src/test

Vitest test suite for the app. It checks that the TanStack Router route tree matches a page for '/', tests the currency conversion helpers (EUR/DKK peg, cross-rates via DKK, inverting API rates), and tests the site knowledge keyword search and source deduplication. It also supplies a jsdom setup file that polyfills window.scrollTo and window.matchMedia.

## Key files
- `src/test/app-routing.test.tsx`: Builds a router from the generated routeTree with a QueryClient context. Asserts that '/' matches a real route rather than the root not-found fallback, without running loaders or rendering.
- `src/test/currency.test.ts`: Unit tests for convert, fallbackDkkPerUnit and invertDkkBaseRates from @/lib/currency.
- `src/test/knowledge.test.ts`: Unit tests for keywordScores, knowledge and toSources from @/lib/knowledge. Covers keyword ranking of site content (visa, Aarhus/ARoS) and deduplication of sources by page.
- `src/test/setup.ts`: Test environment setup: registers jest-dom matchers for vitest and stubs window.scrollTo and window.matchMedia for jsdom.

## Public interface
- _none_

## Dependencies
- vitest
- @tanstack/react-query
- @tanstack/react-router
- @testing-library/jest-dom
- @/routeTree.gen
- @/lib/currency
- @/lib/knowledge

## AI touchpoints [AI]
- `src/test/knowledge.test.ts`

## Open questions
- Does @/lib/knowledge feed an LLM-backed chat or assistant (e.g. an API route under src/routes/api/), or is it plain site search?
- Where do the live currency rates come from? invertDkkBaseRates implies an external DKK-based rates API.
