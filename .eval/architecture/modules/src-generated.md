# Module: src/generated [AI]

Generated TypeScript declaration files that augment the @lovable.dev/ai-gateway module with the GeneratedModelsBySurface interface. It lists, as string-literal union types, the model IDs available on each AI gateway surface: chat-completions, responses, image-generation, image-edit, embeddings, speech, transcription and videos. Surfaces without models (messages, interactions, music, systemone, live) are typed as never. The two files are identical, one for CommonJS (.d.cts) and one for ESM/TS (.d.ts) resolution. They contain types only, with no runtime code.

## Key files
- `src/generated/ai-gateway/models.d.ts`: Module augmentation declaring GeneratedModelsBySurface, the per-surface model ID unions, for ESM/TS consumers.
- `src/generated/ai-gateway/models.d.cts`: Identical module augmentation for CommonJS (.cts) type resolution.

## Public interface
- GeneratedModelsBySurface (interface augmentation on @lovable.dev/ai-gateway)

## Dependencies
- @lovable.dev/ai-gateway

## AI touchpoints [AI]
- `src/generated/ai-gateway/models.d.cts`
- `src/generated/ai-gateway/models.d.ts`

## Open questions
- Which tool or step generates these files, and when are they regenerated?
- Which surfaces and models does the application code actually use? No call sites are included in this module.
- Why are both .d.ts and .d.cts variants maintained?
