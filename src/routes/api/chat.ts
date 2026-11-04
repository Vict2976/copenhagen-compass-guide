import { createFileRoute } from "@tanstack/react-router";

// Streams the AI travel guide's reply as plain text. The handler verifies the
// caller's session itself; chat logic lives in a server-only module.
export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { handleChatRequest } = await import("@/lib/chat.server");
        return handleChatRequest(request);
      },
    },
  },
});
