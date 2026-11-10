# Module: src/lib [AI]

Provides core server-side and client-side utilities for the Denmark travel assistant, including AI chat generation and streaming, structured trip planning, RAG-based knowledge retrieval with hybrid semantic and keyword search, static Denmark travel knowledge and city data, currency conversion, styling helpers, and error telemetry handling.

## Key files
- `src/lib/chat.server.ts`: Handles authenticated streaming chat requests with RAG augmentation and saves chat history into Supabase.
- `src/lib/planner.functions.ts`: TanStack Start server function generating structured trip planning itineraries using AI and saving them to the database.
- `src/lib/rag.server.ts`: Implements hybrid retrieval (vector embeddings + keyword scores) over the site knowledge base.
- `src/lib/knowledge.ts`: Defines static knowledge base chunks, tokenization, keyword scoring, cosine similarity, and citation extraction.
- `src/lib/cities.ts`: Static metadata and sight descriptions for Danish cities (Copenhagen, Aarhus, Odense, Aalborg, Roskilde, Helsingør).
- `src/lib/currency.ts`: Currency definitions, conversion math, formatting helpers, and fallback exchange rates against DKK.
- `src/lib/error-capture.ts`: Captures and expands unhandled server errors and cause chains out-of-band.
- `src/lib/error-page.ts`: Renders a standalone fallback HTML error page.
- `src/lib/lovable-error-reporting.ts`: Client error boundary telemetry reporting to Lovable runtime hooks.
- `src/lib/utils.ts`: Standard Tailwind CSS class merging helper using clsx and twMerge.

## Public interface
- handleChatRequest(request: Request): Promise<Response>
- createTripPlan server function (input: PlanRequest, returns: { id: string })
- retrieve(query: string, k?: number): Promise<KnowledgeChunk[]>
- formatContext(chunks: KnowledgeChunk[]): string
- cities: City[]
- knowledge: KnowledgeChunk[]
- keywordScores(query: string, chunks?: KnowledgeChunk[]): number[]
- cosine(a: number[], b: number[]): number
- toSources(chunks: KnowledgeChunk[]): Source[]
- currencies: CurrencyInfo[]
- fallbackDkkPerUnit: Record<string, number>
- convert(amount: number, from: string, to: string, dkkPerUnit: Record<string, number>): number
- invertDkkBaseRates(perDkk: Record<string, number>): Record<string, number>
- formatMoney(value: number, code: string): string
- describeError(error: unknown): string
- consumeLastCapturedError(): unknown
- renderErrorPage(): string
- reportLovableError(error: unknown, context?: Record<string, unknown>): void
- cn(...inputs: ClassValue[]): string

## Dependencies
- @supabase/supabase-js
- @lovable.dev/ai-gateway
- @tanstack/react-start
- zod
- clsx
- tailwind-merge
- @/integrations/supabase/types
- @/integrations/supabase/auth-middleware
- @/assets/*

## AI touchpoints [AI]
- `src/lib/chat.server.ts`
- `src/lib/planner.functions.ts`
- `src/lib/rag.server.ts`

## Open questions
- _none_
