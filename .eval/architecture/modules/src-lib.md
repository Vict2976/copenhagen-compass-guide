# Module: src/lib [AI]

Shared library for the Hej Copenhagen travel-guide app: static site content (cities, currencies), a site knowledge base with hybrid keyword/embedding RAG retrieval, an authenticated streaming AI chat handler persisted to Supabase, an AI trip-planner server function producing structured JSON itineraries, plus error capture/reporting helpers and UI utilities.

## Key files
- `src/lib/chat.server.ts`: Server-side chat handler: validates Supabase bearer token, loads/saves chat_messages history, retrieves RAG context, streams LLM response via Lovable AI gateway, returns plain-text stream with x-sources header.
- `src/lib/rag.server.ts`: Retrieval: embeds knowledge chunks (cached per instance) with an embedding model, blends cosine similarity with keyword scores, falls back to keyword-only on failure; formats context for prompts.
- `src/lib/knowledge.ts`: Builds the searchable knowledge base from page text and city data; keyword scoring, cosine similarity and source-link deduplication.
- `src/lib/planner.functions.ts`: TanStack Start server function (createServerFn) that generates a structured day-by-day trip plan via the AI gateway with JSON schema output and saves it to the Supabase trips table.
- `src/lib/cities.ts`: Static city data (Copenhagen, Aarhus, Odense, Aalborg, Roskilde, Helsingør) with sights, tips and images.
- `src/lib/currency.ts`: Currency list, fallback DKK rates and conversion/formatting helpers.
- `src/lib/error-capture.ts`: Wraps console.error and global error events to record the last error and expand Error cause chains for server logging.
- `src/lib/error-page.ts`: Renders a static HTML fallback error page.
- `src/lib/lovable-error-reporting.ts`: Client-side forwarding of React error-boundary errors to Lovable editor telemetry hooks.
- `src/lib/utils.ts`: cn() Tailwind class-merging helper.

## Public interface
- handleChatRequest(request: Request): Promise<Response>
- retrieve(query: string, k?: number): Promise<KnowledgeChunk[]>
- formatContext(chunks: KnowledgeChunk[]): string
- knowledge: KnowledgeChunk[]
- keywordScores(query, chunks?)
- cosine(a, b)
- toSources(chunks): Source[]
- KnowledgeChunk, Source types
- createTripPlan (server fn)
- planRequestSchema, PlanRequest, PlanDay, TripPlan
- cities: City[], City, Sight
- currencies, fallbackDkkPerUnit, convert, invertDkkBaseRates, formatMoney, CurrencyInfo
- describeError, consumeLastCapturedError
- renderErrorPage
- reportLovableError
- cn

## Dependencies
- @supabase/supabase-js
- @lovable.dev/ai-gateway
- zod
- @tanstack/react-start
- clsx
- tailwind-merge
- @/integrations/supabase/types
- @/integrations/supabase/auth-middleware
- @/assets/city-*.jpg

## AI touchpoints [AI]
- `src/lib/chat.server.ts`
- `src/lib/planner.functions.ts`
- `src/lib/rag.server.ts`
- `src/lib/knowledge.ts`

## Open questions
- Which route under src/routes/api/ invokes handleChatRequest? Not shown in this module.
- Model IDs 'openai/gpt-6-astra' and 'google/gemini-embedding-2' are gateway-specific; confirm availability and pricing.
- Where are the live exchange rates fetched that invertDkkBaseRates consumes?
- Chunk embeddings are cached in-memory per instance only; is cold-start latency acceptable?
- Chat persists user message before generation; failed generations leave orphan user messages—intended?
