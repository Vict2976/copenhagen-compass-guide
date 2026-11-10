# Module: src/routes [AI]

File-based TanStack Router route tree for the Hej Copenhagen travel guide: root shell/layout with error and 404 handling, static content pages (home, visa, currency, cities, people, history), an auth page (Supabase email/password and Lovable OAuth), an authenticated layout guarding AI chat and AI trip planner pages, and a server API route that streams AI chat replies.

## Key files
- `src/routes/__root.tsx`: Root route: HTML shell, head meta/fonts/CSS, QueryClientProvider, site header/footer, NotFound and Error components (errors reported via reportLovableError).
- `src/routes/_authenticated/route.tsx`: Client-only (ssr: false) layout route that redirects to /auth when no Supabase session exists.
- `src/routes/_authenticated/chat.tsx`: AI travel guide chat UI: loads history from Supabase chat_messages, POSTs to /api/chat with bearer token, streams plain-text response, parses x-sources header, handles [[ERROR]] marker, supports clearing conversation.
- `src/routes/_authenticated/planner.tsx`: AI trip planner UI: form for cities/days/month/budget/interests/notes, calls createTripPlan server function, lists/deletes saved trips from Supabase trips table.
- `src/routes/api/chat.ts`: TanStack Start server route; POST handler lazily imports handleChatRequest from @/lib/chat.server to stream AI reply.
- `src/routes/auth.tsx`: Sign-in/sign-up page with Supabase password auth, Google/Lovable OAuth via lovable integration, and safe same-origin redirect handling.
- `src/routes/currency.tsx`: Danish krone info and currency calculator fetching live rates from open.er-api.com with fallback rates.
- `src/routes/cities.$slug.tsx`: City detail page with loader using getCity and notFound handling.
- `src/routes/cities.index.tsx`: City listing page.
- `src/routes/index.tsx`: Home landing page with facts and section links.
- `src/routes/visa.tsx`: Static visa/entry rules content page.
- `src/routes/people.tsx`: Static Danish culture/etiquette/phrases page.
- `src/routes/history.tsx`: Static Danish history timeline page.

## Public interface
- Route (each file exports a TanStack Router Route)
- GET pages: /, /visa, /currency, /cities, /cities/$slug, /people, /history, /auth (search: redirect?)
- Authenticated pages: /chat, /planner
- POST /api/chat (JSON body {message}, Authorization: Bearer token; streams text/plain, x-sources header)

## Dependencies
- @tanstack/react-router
- @tanstack/react-start
- @tanstack/react-query
- react
- ai (ChatStatus type)
- lucide-react
- sonner
- zod
- @lovable.dev/cloud-auth-js
- @/integrations/supabase/client
- @/integrations/lovable/index
- @/lib/chat.server
- @/lib/planner.functions
- @/lib/knowledge
- @/lib/cities
- @/lib/currency
- ../lib/lovable-error-reporting
- @/components/ai-elements/*
- @/components/ui/*
- @/components/site-header
- @/components/site-footer
- @/components/page-hero
- @/components/chat-cta
- open.er-api.com (external exchange-rate API)

## AI touchpoints [AI]
- `src/routes/_authenticated/chat.tsx`
- `src/routes/api/chat.ts`
- `src/routes/_authenticated/planner.tsx`

## Open questions
- Prompt construction, model provider, and retrieval logic live in @/lib/chat.server and @/lib/planner.functions, which are not included here.
- How chat_messages rows are persisted (server-side in chat.server?) is not visible; the client only reads and deletes them.
- Row-level security on chat_messages/trips is assumed but not shown; planner delete filters only by trip id.
- chat.tsx and planner.tsx are truncated, so full render details are unknown.
