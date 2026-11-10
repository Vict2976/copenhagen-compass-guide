# Module: (root)

Root-level tooling configuration for the project: Vite/TanStack Start build config (via Lovable's preset), Drizzle ORM migration config for PostgreSQL, ESLint rules, and Vitest test setup.

## Key files
- `vite.config.ts`: Build config using @lovable.dev/vite-tanstack-config; redirects the TanStack Start server entry to src/server.ts (SSR error wrapper). The preset bundles tanstackStart, React, Tailwind, tsconfig paths and a nitro build with a Cloudflare default target.
- `drizzle.config.ts`: Drizzle Kit config: postgresql dialect, schema at ./drizzle/schema.ts, migrations output to ./drizzle/migrations, DB URL from LOVABLE_DB_MIGRATION_URL.
- `eslint.config.js`: Flat ESLint config with TypeScript, react-hooks, react-refresh and prettier. It forbids importing the Next.js 'server-only' package in favor of *.server.ts or @tanstack/react-start/server-only.
- `vitest.config.ts`: Vitest config: jsdom environment, globals, setup file src/test/setup.ts, tests matched by src/**/*.{test,spec}.{ts,tsx}, and an '@' alias pointing to ./src.

## Public interface
- _none_

## Dependencies
- @lovable.dev/vite-tanstack-config
- drizzle-kit
- @eslint/js
- eslint-plugin-prettier
- globals
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- typescript-eslint
- vitest
- @vitejs/plugin-react

## Open questions
- Is the deployment target Cloudflare (the nitro default noted in the vite.config.ts comment) or an override configured elsewhere?
- How is LOVABLE_DB_MIGRATION_URL provisioned, and what happens when it is unset? It falls back to an empty string.
