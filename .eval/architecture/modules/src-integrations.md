# Module: src/integrations

Integration layer wiring the app to Supabase (auth, typed DB schema, client/server clients) and Lovable cloud OAuth. Provides OAuth sign-in that hands tokens to the Supabase session, a TanStack Start client function middleware that attaches the Supabase bearer token to server function RPCs, a shared-secret check for cron requests, and generated TypeScript types for the public schema (chat_messages, trips).

## Key files
- `src/integrations/lovable/index.ts`: Auto-generated Lovable OAuth wrapper; signInWithOAuth delegates to @lovable.dev/cloud-auth-js, then sets the Supabase session from the returned tokens
- `src/integrations/supabase/auth-attacher.ts`: TanStack Start function middleware (client side) that adds Authorization: Bearer <supabase access token> to serverFn calls; must be registered globally in src/start.ts
- `src/integrations/supabase/cron-auth.ts`: Validates cron requests against LOVABLE_CRON_SECRET / LOVABLE_CRON_SECRET_PREVIOUS using SHA-256 digests and timingSafeEqual; returns an error Response or null
- `src/integrations/supabase/types.ts`: Generated Supabase Database types: chat_messages (role, content, sources) and trips (title, plan, request, sources), plus the Tables/TablesInsert/TablesUpdate/Enums helpers
- `src/integrations/supabase/client.ts`: Generated browser Supabase client (not read)
- `src/integrations/supabase/client.server.ts`: Generated server-side Supabase client (not read)
- `src/integrations/supabase/auth-middleware.ts`: Generated server auth middleware (not read)
- `src/integrations/supabase/previewAuthStorage.ts`: Generated auth storage for preview environments (not read)

## Public interface
- lovable.auth.signInWithOAuth(provider, opts?)
- attachSupabaseAuth
- authenticateCronRequest(request)
- Database
- Json
- Tables
- TablesInsert
- TablesUpdate
- Enums
- CompositeTypes
- Constants

## Dependencies
- @lovable.dev/cloud-auth-js
- @tanstack/react-start
- node:crypto
- Supabase (via ./client)

## AI touchpoints [AI]
- `src/integrations/supabase/types.ts`

## Open questions
- What do the unread generated files contain? This covers the exports of client.ts, client.server.ts, auth-middleware.ts and previewAuthStorage.ts.
- Is attachSupabaseAuth actually registered in src/start.ts as the comment requires?
- Which routes call authenticateCronRequest, and what scheduler sends those requests?
- Where are chat responses and trip plans generated? That AI logic is not in this module.
- previousMatches falls back to the current secret when LOVABLE_CRON_SECRET_PREVIOUS is unset. Is this intended?
