# Module: src/test

Unit and integration test suite verifying app routing, currency conversion calculations, and site knowledge retrieval scoring, along with test environment configuration.

## Key files
- `src/test/app-routing.test.tsx`: Verifies route matching for the root path using the TanStack Router route tree without triggering loaders.
- `src/test/currency.test.ts`: Tests currency conversion calculations, peg rates, fallback rates, and DKK rate inversion logic.
- `src/test/knowledge.test.ts`: Validates keyword scoring, page ranking, and source deduplication over site knowledge entries.
- `src/test/setup.ts`: Initializes testing-library DOM matchers and mocks DOM APIs like scrollTo and matchMedia for the test environment.

## Public interface
- _none_

## Dependencies
- @tanstack/react-query
- @tanstack/react-router
- vitest
- @testing-library/jest-dom/vitest
- @/routeTree.gen
- @/lib/currency
- @/lib/knowledge

## Open questions
- _none_
