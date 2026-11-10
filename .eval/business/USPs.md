# Unique selling propositions

_Each USP is sourced to a business document (verbatim) and mapped to the components that deliver it._

## AI chat bot for Denmark trip questions

An AI chat bot that can help users with questions regarding their trip to Denmark.

- **Sources:**
  - `About_the_organisation.md`: "An AI Chat bot that can help with questions regarding the users trip to denmark"
- **Delivered by:**
  - `src/routes/_authenticated/chat::ChatPage`, matched on named by the model while reading the business documents
  - `src/lib/chat.server::systemPrompt.prompt`, matched on named by the model while reading the business documents
  - `src/components/ai-elements/prompt-input::PromptInput`, matched on named by the model while reading the business documents

## Trip planning with tips and tricks

Visitors of Denmark use the product to plan their trip and see tips and tricks.

- **Sources:**
  - `About_the_organisation.md`: "A few people I know use it: Visitors of denmark uses the product top lan their trip and see tips and trick"
- **Delivered by:** _no linked components_

## Coverage

- **Statements linked to code:** 1 of 2 · usp: 1/2
- **Artifacts reached from the business:** 3 of 444 linkable artifacts in the scan
- **How the links were made:** candidates from names, paths, routes and endpoints in your own code, confirmed by the model.

### Reach by area

- Ui: 0 of 255
- Ai elements: 1 of 70
- Other: 1 of 59
- Integrations: 0 of 20
- Routes: 1 of 8
- Root: 0 of 5
- Auth: 0 of 4
- Hooks: 0 of 4
- Test: 0 of 4
- Currency: 0 of 3
- Cities.$slug: 0 of 2
- Cities.index: 0 of 2
- History: 0 of 2
- People: 0 of 2
- Visa: 0 of 2
- Drizzle: 0 of 1
- Generated: 0 of 1

### Linked to nothing (1)

- **usp** Trip planning with tips and tricks: Everything that matched is shared plumbing rather than something a business statement can be about: Button (it is a shared UI primitive in "ui/", used by every screen rather than by one rule).

## Gaps

- ⚠️ No business rules survived sourcing. Provide explicit rules/constraints.
