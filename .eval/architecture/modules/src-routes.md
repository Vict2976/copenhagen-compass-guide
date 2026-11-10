# Module: src/routes [AI]

Implements application routes, pages, and API endpoints using TanStack Router / TanStack Start, providing travel guide content (visas, currency, cities, people, history), user authentication, AI trip planning, and conversational AI travel chat.

## Key files
- `src/routes/__root.tsx`: Root application layout setting HTML shell, global meta, QueryClientProvider, global header/footer, error boundaries, and 404 pages
- `src/routes/_authenticated/route.tsx`: Protected layout route verifying user authentication sessions and redirecting unauthenticated users to /auth
- `src/routes/_authenticated/chat.tsx`: In-app AI travel guide chat UI for conversational trip questions, displaying streaming responses and past message history
- `src/routes/_authenticated/planner.tsx`: AI trip planner interface allowing users to configure city preferences, budget, and interests to generate and save itineraries
- `src/routes/api/chat.ts`: Server route handling POST requests to stream AI guide chat responses via the server-side chat handler
- `src/routes/auth.tsx`: Authentication page for email/password and OAuth (Google, Lovable) sign-in and registration
- `src/routes/index.tsx`: Home landing page highlighting essential travel facts, section overviews, and entry points into the AI guide
- `src/routes/cities.index.tsx`: City directory page displaying main Danish destinations and transit times from Copenhagen
- `src/routes/cities.$slug.tsx`: Dynamic city guide page loading sights, population, tips, and travel details by city slug
- `src/routes/currency.tsx`: Danish krone guide and interactive currency converter with live exchange rate integration
- `src/routes/visa.tsx`: Visa and Schengen entry regulations guide covering 90/180 rules, EES, and ETIAS
- `src/routes/history.tsx`: Visual timeline of Danish history from the Viking Age to modern Denmark
- `src/routes/people.tsx`: Danish culture, lifestyle, etiquette, hygge, and common language phrases guide

## Public interface
- Route (exported from src/routes/__root.tsx)
- Route (exported from src/routes/_authenticated/route.tsx)
- Route (exported from src/routes/_authenticated/chat.tsx)
- Route (exported from src/routes/_authenticated/planner.tsx)
- Route (exported from src/routes/api/chat.ts)
- Route (exported from src/routes/auth.tsx)
- Route (exported from src/routes/index.tsx)
- Route (exported from src/routes/cities.index.tsx)
- Route (exported from src/routes/cities.$slug.tsx)
- Route (exported from src/routes/currency.tsx)
- Route (exported from src/routes/visa.tsx)
- Route (exported from src/routes/history.tsx)
- Route (exported from src/routes/people.tsx)

## Dependencies
- @tanstack/react-router
- @tanstack/react-start
- @tanstack/react-query
- ai
- lucide-react
- sonner
- zod
- @/integrations/supabase/client
- @/integrations/lovable/index
- @/lib/chat.server
- @/lib/cities
- @/lib/currency
- @/lib/knowledge
- @/lib/lovable-error-reporting
- @/lib/planner.functions
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

## AI touchpoints [AI]
- `src/routes/_authenticated/chat.tsx`
- `src/routes/_authenticated/planner.tsx`
- `src/routes/api/chat.ts`

## Open questions
- _none_
