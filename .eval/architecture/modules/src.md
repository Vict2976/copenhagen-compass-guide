# Module: src

Configures core application bootstrapping, server entry handling, CSRF and error middlewares, TanStack Router creation, and AI gateway type imports.

## Key files
- `src/router.tsx`: Initializes and exports TanStack Router with QueryClient and generated routeTree configuration.
- `src/server.ts`: Custom server fetch handler that delegates to TanStack React Start server entry and catches/normalizes SSR and h3-swallowed errors into HTML error responses.
- `src/start.ts`: Configures TanStack React Start instance with custom error middleware, CSRF middleware for server functions, and Supabase auth attacher middleware.
- `src/ai-gateway.types.ts`: Type definitions placeholder/re-export for generated AI gateway models.
- `src/routeTree.gen.ts`: Generated route tree definition used to instantiate the TanStack Router.

## Public interface
- getRouter: () => Router
- startInstance: TanStack Start instance configured with auth, error, and CSRF middleware
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
- _none_
