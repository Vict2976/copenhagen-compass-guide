# Module: src/integrations

Provides client and server integrations for external backend services, specifically Supabase database types and authentication middleware, Lovable cloud OAuth integration, and secret-based cron request authentication.

## Key files
- `src/integrations/lovable/index.ts`: Wraps Lovable Cloud OAuth authentication and synchronizes session tokens with the Supabase client.
- `src/integrations/supabase/auth-attacher.ts`: TanStack Start client function middleware that attaches the Supabase session access token as a Bearer authorization header to server function calls.
- `src/integrations/supabase/cron-auth.ts`: Authenticates incoming cron HTTP requests using constant-time comparison against configured Lovable cron secrets.
- `src/integrations/supabase/types.ts`: Defines TypeScript types for the Supabase database schema, including tables for chat messages and trip plans.

## Public interface
- lovable.auth.signInWithOAuth
- attachSupabaseAuth
- authenticateCronRequest
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

## Open questions
- _none_
