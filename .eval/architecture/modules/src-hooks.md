# Module: src/hooks

Provides reusable React client-side hooks for responsive viewport detection and Supabase authentication session state tracking.

## Key files
- `src/hooks/use-mobile.tsx`: Hook that listens to window matchMedia changes to detect whether the viewport width is below the mobile breakpoint (768px).
- `src/hooks/use-session.ts`: Hook that observes Supabase authentication state changes, maintains session and user state, and invalidates TanStack Router routes on auth changes.

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
