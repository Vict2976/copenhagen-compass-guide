# Module: src/integrations

Provides integration clients, authentication helpers, middleware, and database schema types for Lovable and Supabase services used by the trip planning and chat application.

## Key files
- `src/integrations/lovable/index.ts`: Wraps Lovable Cloud OAuth authentication and sets up Supabase auth sessions upon login.
- `src/integrations/supabase/auth-attacher.ts`: Provides TanStack Start client function middleware to automatically attach Supabase session tokens as Bearer authorization headers.
- `src/integrations/supabase/cron-auth.ts`: Validates authorization bearer tokens for cron requests against environment secrets (LOVABLE_CRON_SECRET and LOVABLE_CRON_SECRET_PREVIOUS) using constant-time digest comparison.
- `src/integrations/supabase/types.ts`: Defines TypeScript types for the Supabase database schema, including tables for chat_messages and trips.

## Public interface
- lovable.auth.signInWithOAuth(provider: OAuthProvider, opts?: SignInOptions)
- attachSupabaseAuth: Middleware
- authenticateCronRequest(request: Request): Promise<Response | null>
- type Database
- type Tables
- type TablesInsert
- type TablesUpdate
- type Enums
- type CompositeTypes
- Constants

## Dependencies
- @lovable.dev/cloud-auth-js
- @tanstack/react-start
- node:crypto

## Open questions
- _none_
