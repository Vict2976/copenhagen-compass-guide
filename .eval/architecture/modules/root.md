# Module: (root)

Provides root-level configuration for database migrations (Drizzle ORM), code linting and formatting (ESLint, Prettier), application bundling with TanStack Start (Vite), and unit testing (Vitest).

## Key files
- `drizzle.config.ts`: Configures Drizzle Kit for PostgreSQL schema mapping and migrations.
- `eslint.config.js`: Configures ESLint rules for TypeScript, React hooks, and TanStack Start-specific import restrictions.
- `vite.config.ts`: Configures Vite and TanStack Start via @lovable.dev/vite-tanstack-config, setting up server entry redirection.
- `vitest.config.ts`: Configures Vitest with jsdom, React plugin, path aliases, and setup files for unit tests.

## Public interface
- default export (DrizzleConfig from drizzle.config.ts)
- default export (FlatConfig array from eslint.config.js)
- default export (UserConfig from vite.config.ts)
- default export (UserConfig from vitest.config.ts)

## Dependencies
- drizzle-kit
- @eslint/js
- eslint-plugin-prettier/recommended
- globals
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- typescript-eslint
- @lovable.dev/vite-tanstack-config
- vitest/config
- @vitejs/plugin-react
- node:path

## Open questions
- _none_
