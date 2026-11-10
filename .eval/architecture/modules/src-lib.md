# Module: src/lib [AI]

Core library containing shared domain data (Danish cities, currency conversions, site knowledge chunks), server utilities for RAG retrieval and streaming AI chat/trip planning, and client/server error and styling helpers.

## Key files
- `src/lib/chat.server.ts`: Server request handler managing authenticated AI travel guide chat sessions, chat history persistence, RAG context injection, and streaming responses.
- `src/lib/planner.functions.ts`: TanStack Start server function (createTripPlan) that generates structured multi-day travel itineraries via LLM and saves them to Supabase.
- `src/lib/rag.server.ts`: Hybrid semantic and keyword retrieval service using vector embeddings over static site knowledge.
- `src/lib/knowledge.ts`: Static site knowledge base chunks covering Danish visas, currency, culture, history, and city sights with keyword search and source mapping utilities.
- `src/lib/cities.ts`: Static dataset of key Danish travel destinations (Copenhagen, Aarhus, Odense, Aalborg, Roskilde, Helsingør) with sights, tips, and transport info.
- `src/lib/currency.ts`: Currency data, fallback exchange rates pegged against the Danish krone (DKK), conversion calculation, and currency formatting helpers.
- `src/lib/error-capture.ts`: Out-of-band error recording and stack description wrapper for console.error and global error events.
- `src/lib/lovable-error-reporting.ts`: Client runtime error reporter forwarding boundary exceptions to Lovable telemetry hooks.
- `src/lib/error-page.ts`: Static HTML error page fallback renderer.
- `src/lib/utils.ts`: Tailwind CSS class merging helper using clsx and twMerge.

## Public interface
- handleChatRequest(request: Request): Promise<Response>
- createTripPlan(input: PlanRequest): Promise<{ id: string }>
- planRequestSchema: z.ZodObject
- retrieve(query: string, k?: number): Promise<KnowledgeChunk[]>
- formatContext(chunks: KnowledgeChunk[]): string
- knowledge: KnowledgeChunk[]
- keywordScores(query: string, chunks?: KnowledgeChunk[]): number[]
- cosine(a: number[], b: number[]): number
- toSources(chunks: KnowledgeChunk[]): Source[]
- cities: City[]
- currencies: CurrencyInfo[]
- fallbackDkkPerUnit: Record<string, number>
- convert(amount: number, from: string, to: string, dkkPerUnit: Record<string, number>): number
- invertDkkBaseRates(perDkk: Record<string, number>): Record<string, number>
- formatMoney(value: number, code: string): string
- describeError(error: unknown): string
- consumeLastCapturedError(): unknown
- reportLovableError(error: unknown, context?: Record<string, unknown>): void
- renderErrorPage(): string
- cn(...inputs: ClassValue[]): string

## Dependencies
- @supabase/supabase-js
- @lovable.dev/ai-gateway
- zod
- @tanstack/react-start
- clsx
- tailwind-merge
- @/integrations/supabase/types
- @/integrations/supabase/auth-middleware
- @/assets/city-copenhagen.jpg
- @/assets/city-aarhus.jpg
- @/assets/city-odense.jpg
- @/assets/city-aalborg.jpg
- @/assets/city-roskilde.jpg
- @/assets/city-helsingor.jpg

## AI touchpoints [AI]
- `src/lib/chat.server.ts`
- `src/lib/planner.functions.ts`
- `src/lib/rag.server.ts`

## Open questions
- _none_
