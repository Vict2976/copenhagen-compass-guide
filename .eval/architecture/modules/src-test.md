# Module: src/test

Provides test suites and test environment setup for validating client-side routing, currency conversion calculations, and knowledge base search/retrieval algorithms.

## Key files
- `src/test/setup.ts`: Sets up the testing environment by importing DOM matchers and stubbing browser APIs (window.scrollTo, window.matchMedia).
- `src/test/app-routing.test.tsx`: Tests client router route resolution for the root path using TanStack Router.
- `src/test/currency.test.ts`: Tests currency conversion logic, base rate inversion, and fallback peg handling.
- `src/test/knowledge.test.ts`: Tests keyword-based search ranking across site knowledge chunks and source deduplication.

## Public interface
- _none_

## Dependencies
- @tanstack/react-query
- @tanstack/react-router
- @testing-library/jest-dom/vitest
- vitest

## Open questions
- _none_
