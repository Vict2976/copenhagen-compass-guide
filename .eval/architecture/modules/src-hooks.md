# Module: src/hooks

Provides reusable React hooks for client-side viewport responsiveness detection and Supabase authentication session tracking with router invalidation.

## Key files
- `src/hooks/use-mobile.tsx`: Detects whether the client viewport width is below the 768px mobile breakpoint using matchMedia
- `src/hooks/use-session.ts`: Tracks the active Supabase authentication session and user state in the browser, invalidating TanStack router routes upon auth changes

## Public interface
- export function useIsMobile(): boolean
- export function useSession(): { session: Session | null, user: User | null, loading: boolean }

## Dependencies
- react
- @supabase/supabase-js
- @tanstack/react-router
- @/integrations/supabase/client

## Open questions
- _none_
