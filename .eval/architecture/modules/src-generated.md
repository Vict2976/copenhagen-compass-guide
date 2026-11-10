# Module: src/generated [AI]

Provides generated TypeScript module augmentation declarations for @lovable.dev/ai-gateway, mapping available AI model identifiers to distinct capability surfaces such as chat-completions, image generation, speech, and embeddings.

## Key files
- `src/generated/ai-gateway/models.d.ts`: TypeScript declaration file augmenting @lovable.dev/ai-gateway with the GeneratedModelsBySurface interface for ES module contexts.
- `src/generated/ai-gateway/models.d.cts`: CommonJS-compatible declaration file providing identical GeneratedModelsBySurface module augmentation for @lovable.dev/ai-gateway.

## Public interface
- declare module "@lovable.dev/ai-gateway" { interface GeneratedModelsBySurface }

## Dependencies
- @lovable.dev/ai-gateway

## AI touchpoints [AI]
- `src/generated/ai-gateway/models.d.cts`
- `src/generated/ai-gateway/models.d.ts`

## Open questions
- What code generator or CLI updates these definitions when new models become available on the AI gateway?
