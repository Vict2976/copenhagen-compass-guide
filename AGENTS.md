<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture rules

- AI chat streams from the server route `src/routes/api/chat.ts`, which dynamically imports `src/lib/chat.server.ts`; the handler verifies the bearer token itself because server routes are not protected by the `_authenticated` gate.
- Chat history is a single conversation per user in `public.chat_messages` (RLS scoped to `auth.uid()`); the server loads it for model context, so the client only sends the new message.
- Static travel content (cities, currency list) lives in `src/lib/*.ts` data modules, not the database, so pages render without a backend round-trip.
- Currency conversion uses "DKK per unit" rates via `src/lib/currency.ts` (covered by `src/test/currency.test.ts`); live rates load client-side with an approximate fallback.
