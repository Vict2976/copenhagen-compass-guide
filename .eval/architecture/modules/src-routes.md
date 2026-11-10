# Module: src/routes [AI]

Implements application routing, server endpoints, and view pages for the travel guide, including public informational guides (cities, currency, history, culture, visas), authentication flows, and authenticated AI-assisted chat and itinerary planning features.

## Key files
- `src/routes/__root.tsx`: Root layout shell configuring document metadata, fonts, QueryClientProvider, global header/footer, error boundaries, and 404 views.
- `src/routes/_authenticated/route.tsx`: Authentication gate layout checking Supabase auth session and redirecting unauthorized visitors to /auth.
- `src/routes/_authenticated/chat.tsx`: Interactive AI chat interface for asking travel questions, managing conversation history with Supabase, and streaming responses.
- `src/routes/_authenticated/planner.tsx`: AI trip planner view collecting travel preferences, calling the createTripPlan server function, and rendering saved itineraries.
- `src/routes/api/chat.ts`: TanStack Start server route handling POST requests and streaming AI travel assistant responses.
- `src/routes/auth.tsx`: Authentication page providing email/password registration, login, and OAuth via Google and Lovable.
- `src/routes/cities.$slug.tsx`: Dynamic city guide route loading and displaying sights, local tips, and travel info for a selected Danish city.
- `src/routes/currency.tsx`: Danish krone guide and interactive currency calculator fetching live exchange rates.
- `src/routes/index.tsx`: Landing page introducing key travel guides and call-to-actions for the AI guide.

## Public interface
- Route (exported from src/routes/__root.tsx)
- Route (exported from src/routes/_authenticated/route.tsx)
- Route (exported from src/routes/_authenticated/chat.tsx)
- Route (exported from src/routes/_authenticated/planner.tsx)
- Route (exported from src/routes/api/chat.ts)
- Route (exported from src/routes/auth.tsx)
- Route (exported from src/routes/cities.$slug.tsx)
- Route (exported from src/routes/cities.index.tsx)
- Route (exported from src/routes/currency.tsx)
- Route (exported from src/routes/history.tsx)
- Route (exported from src/routes/index.tsx)
- Route (exported from src/routes/people.tsx)
- Route (exported from src/routes/visa.tsx)

## Dependencies
- @tanstack/react-router
- @tanstack/react-start
- @tanstack/react-query
- @/integrations/supabase/client
- @/integrations/lovable/index
- @/components/site-header
- @/components/site-footer
- @/components/page-hero
- @/components/chat-cta
- @/components/ai-elements/conversation
- @/components/ai-elements/message
- @/components/ai-elements/prompt-input
- @/components/ai-elements/shimmer
- @/components/ui/button
- @/components/ui/input
- @/components/ui/select
- @/lib/cities
- @/lib/currency
- @/lib/knowledge
- @/lib/planner.functions
- @/lib/chat.server
- @/lib/lovable-error-reporting
- ai
- lucide-react
- sonner
- zod

## AI touchpoints [AI]
- `src/routes/_authenticated/chat.tsx`
- `src/routes/_authenticated/planner.tsx`
- `src/routes/api/chat.ts`

## Open questions
- _none_
