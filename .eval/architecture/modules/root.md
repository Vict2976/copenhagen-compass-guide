# Module: (root)

Provide root-level build, database migration, linting, and testing configuration for the TanStack Start application.

## Key files
- `drizzle.config.ts`: Defines Drizzle ORM configuration for PostgreSQL migrations and schema location.
- `eslint.config.js`: Configures ESLint rules, TypeScript integration, Prettier plugin, React hooks/refresh plugins, and TanStack Start-specific import restrictions.
- `vite.config.ts`: Configures Vite and TanStack Start using @lovable.dev/vite-tanstack-config, targeting a custom server entry point.
- `vitest.config.ts`: Configures the Vitest test runner with jsdom environment, React plugin, setup files, and path aliases.

## Public interface
- default export from drizzle.config.ts (DrizzleConfig)
- default export from eslint.config.js (ESLint FlatConfig)
- default export from vite.config.ts (Vite/TanStack Start config)
- default export from vitest.config.ts (Vitest config)

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
