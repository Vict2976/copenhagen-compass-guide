# Module: src

Provides the core client router initialization, server-side fetch handler with error handling, and TanStack Start instance configuration with authentication, CSRF, and error middleware.

## Key files
- `src/router.tsx`: Configures and instantiates the TanStack Router with QueryClient and the generated route tree.
- `src/server.ts`: Defines the server fetch handler, managing SSR execution and normalizing swallowed 500 errors into custom HTML error pages.
- `src/start.ts`: Sets up the TanStack Start instance with CSRF protection, error middleware, and Supabase auth attachment middleware.
- `src/ai-gateway.types.ts`: Import declarations for generated AI gateway models.
- `src/routeTree.gen.ts`: Generated route tree definition used by TanStack Router.

## Public interface
- getRouter: () => Router
- startInstance: TanStack Start instance
- default export (src/server.ts): { fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> }

## Dependencies
- @tanstack/react-query
- @tanstack/react-router
- @tanstack/react-start
- @tanstack/react-start/server-entry
- @/integrations/supabase/auth-attacher
- ./lib/error-capture
- ./lib/error-page
- ./routeTree.gen
- ./generated/ai-gateway/models

## AI touchpoints [AI]
- `src/ai-gateway.types.ts`

## Open questions
- What specific types are expected to be exposed from src/ai-gateway.types.ts given the empty type import?
