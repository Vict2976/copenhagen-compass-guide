# Module: src/hooks

Client-side React hooks: viewport mobile detection and tracking of the Supabase auth session, with route invalidation when auth state changes.

## Key files
- `src/hooks/use-mobile.tsx`: useIsMobile hook: uses matchMedia and window.innerWidth against a 768px breakpoint to report whether the viewport is mobile-sized.
- `src/hooks/use-session.ts`: useSession hook: subscribes to Supabase auth state changes, loads the initial session, and calls router.invalidate() on change. Returns { session, user, loading }.

## Public interface
- useIsMobile(): boolean
- useSession(): { session: Session | null; user: User | null; loading: boolean }

## Dependencies
- react
- @supabase/supabase-js
- @tanstack/react-router
- @/integrations/supabase/client

## Open questions
- useIsMobile returns false before the effect runs (the undefined state is coerced with !!), so SSR and first render always report non-mobile. Is that intended?
- In useSession, getSession() can resolve after an onAuthStateChange event and overwrite the newer session. Is that race acceptable?
