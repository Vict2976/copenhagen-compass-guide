# Module: src

Application bootstrap for a TanStack Start app: creates the router with a React Query client in context, configures the Start instance with request middleware (error-to-HTML-page handling and CSRF protection for server functions) and function middleware that attaches Supabase auth, and provides a custom server fetch entry that lazily loads the TanStack Start server entry and converts h3-swallowed SSR errors and thrown errors into a rendered HTML 500 error page.

## Key files
- `src/server.ts`: Custom server fetch entry; lazily imports @tanstack/react-start/server-entry, detects h3-swallowed 500 JSON bodies, logs the last captured error, and returns an HTML error page.
- `src/start.ts`: Defines startInstance via createStart with errorMiddleware and csrfMiddleware (serverFn only) as request middleware and attachSupabaseAuth as function middleware.
- `src/router.tsx`: getRouter factory creating a TanStack Router from the generated routeTree with a QueryClient in context, scroll restoration, and defaultPreloadStaleTime 0.
- `src/routeTree.gen.ts`: Generated route tree consumed by the router (not read).
- `src/ai-gateway.types.ts`: Type-only import of ./generated/ai-gateway/models, presumably to bring AI gateway model type declarations into scope.

## Public interface
- getRouter (src/router.tsx)
- startInstance (src/start.ts)
- default export { fetch } server entry (src/server.ts)

## Dependencies
- @tanstack/react-query
- @tanstack/react-router
- @tanstack/react-start
- @tanstack/react-start/server-entry
- ./lib/error-capture
- ./lib/error-page
- @/integrations/supabase/auth-attacher
- ./generated/ai-gateway/models
- ./routeTree.gen

## AI touchpoints [AI]
- `src/ai-gateway.types.ts`

## Open questions
- What does ./generated/ai-gateway/models declare, and where are AI gateway calls actually made?
- How does attachSupabaseAuth attach credentials to server function calls (headers, cookies)?
- What populates consumeLastCapturedError in ./lib/error-capture (global error hooks?).
