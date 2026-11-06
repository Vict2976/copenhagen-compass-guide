import { generateEmbeddings } from "@lovable.dev/ai-gateway";
import { cosine, keywordScores, knowledge, type KnowledgeChunk } from "@/lib/knowledge";

const EMBED_MODEL = "google/gemini-embedding-2" as const;

// Chunk embeddings are computed once per server instance and reused.
let chunkVectors: Promise<number[][]> | null = null;

async function embed(texts: string[]): Promise<number[][]> {
  const res = await generateEmbeddings({ model: EMBED_MODEL, input: texts });
  return [...res.data]
    .sort((a, b) => a.index - b.index)
    .map((d) => (typeof d.embedding === "string" ? [] : d.embedding));
}

function getChunkVectors() {
  if (!chunkVectors) {
    chunkVectors = embed(knowledge.map((c) => `${c.title}\n${c.text}`)).catch((e) => {
      chunkVectors = null;
      throw e;
    });
  }
  return chunkVectors;
}

/** Retrieve the most relevant site knowledge: semantic search blended with keywords. */
export async function retrieve(query: string, k = 5): Promise<KnowledgeChunk[]> {
  const kw = keywordScores(query);
  let scores = kw;
  try {
    const [vectors, [q]] = await Promise.all([getChunkVectors(), embed([query])]);
    scores = vectors.map((v, i) => 0.8 * cosine(q ?? [], v) + 0.2 * (kw[i] ?? 0));
  } catch (err) {
    console.error("semantic search unavailable, using keyword search", err);
  }
  const minScore = scores === kw ? 0.2 : 0.35;
  return scores
    .map((s, i) => ({ s, c: knowledge[i] }))
    .filter((x) => x.s >= minScore)
    .sort((a, b) => b.s - a.s)
    .slice(0, k)
    .flatMap((x) => (x.c ? [x.c] : []));
}

export function formatContext(chunks: KnowledgeChunk[]): string {
  if (!chunks.length) return "No matching pages on the Hej Copenhagen site.";
  return chunks.map((c, i) => `[${i + 1}] ${c.title} (page ${c.url})\n${c.text}`).join("\n\n");
}
