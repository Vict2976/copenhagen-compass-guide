# Guidelines

Conventions backed by **≥2** real, verbatim code examples. Anything with fewer is omitted below.

## Tooling config files (Drizzle, ESLint, Vite, Vitest) expose a single default export built with the tool's `defineConfig`/`config` helper rather than plain object literals or named exports.

- `drizzle.config.ts`:

  ```
  export default defineConfig({
  ```

- `eslint.config.js`:

  ```
  export default tseslint.config(
  ```

- `vite.config.ts`:

  ```
  export default defineConfig({
  ```

- `vitest.config.ts`:

  ```
  export default defineConfig({
  ```

## In `src/components/ui`, re-export Radix primitives that need no customization by aliasing the primitive root/trigger to a `const` instead of wrapping them in a new component.

- `src/components/ui/accordion.tsx`:

  ```
  const Accordion = AccordionPrimitive.Root;
  ```

- `src/components/ui/alert-dialog.tsx`:

  ```
  const AlertDialog = AlertDialogPrimitive.Root;
  ```

- `src/components/ui/alert-dialog.tsx`:

  ```
  const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
  ```

- `src/components/ui/aspect-ratio.tsx`:

  ```
  const AspectRatio = AspectRatioPrimitive.Root;
  ```

## UI primitives that add styling or markup are implemented with `React.forwardRef`, explicitly typed with the target element and `React.ComponentPropsWithoutRef`/element props so refs and native attributes pass through.

- `src/components/ui/accordion.tsx`:

  ```
  const AccordionItem = React.forwardRef<
  ```

- `src/components/ui/alert.tsx`:

  ```
  const Alert = React.forwardRef<
  ```

- `src/components/ui/avatar.tsx`:

  ```
  const Avatar = React.forwardRef<
  ```

- `src/components/ui/avatar.tsx`:

  ```
  const AvatarImage = React.forwardRef<
  ```

- `src/components/ui/breadcrumb.tsx`:

  ```
  const Breadcrumb = React.forwardRef<
  ```

- `src/components/ui/breadcrumb.tsx`:

  ```
  const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ```

## Define visual variants with `class-variance-authority` (`cva`) in a module-level `*Variants` constant that the component consumes and, where useful, exports alongside the component.

- `src/components/ui/alert.tsx`:

  ```
  const alertVariants = cva(
  ```

- `src/components/ui/badge.tsx`:

  ```
  const badgeVariants = cva(
  ```

- `src/components/ui/button-group.tsx`:

  ```
  const buttonGroupVariants = cva(
  ```

## ai-elements components export a named `*Props` type derived from the underlying component or HTML element and implement the component as an arrow function that destructures `className` and spreads the remaining props.

- `src/components/ai-elements/conversation.tsx`:

  ```
  export type ConversationProps = ComponentProps<typeof StickToBottom>;
  ```

- `src/components/ai-elements/conversation.tsx`:

  ```
  export const Conversation = ({ className, ...props }: ConversationProps) => (
  ```

- `src/components/ai-elements/message.tsx`:

  ```
  export type MessageProps = HTMLAttributes<HTMLDivElement> & {
  ```

- `src/components/ai-elements/message.tsx`:

  ```
  export const Message = ({ className, from, ...props }: MessageProps) => (
  ```

## App-level composite components (header, footer, hero, CTA) are plain named `export function` components taking an explicitly typed props object or interface, not forwardRef wrappers.

- `src/components/chat-cta.tsx`:

  ```
  export function ChatCta({ question }: { question?: string }) {
  ```

- `src/components/page-hero.tsx`:

  ```
  export function PageHero({ eyebrow, title, intro, image, children }: PageHeroProps) {
  ```

- `src/components/site-footer.tsx`:

  ```
  export function SiteFooter() {
  ```

- `src/components/site-header.tsx`:

  ```
  export function SiteHeader() {
  ```

- `src/components/ui/button-group.tsx`:

  ```
  function ButtonGroup({
  ```

## Declare local `type`/`interface` aliases at the top of a file for structural shapes (server entry contracts, motion props, component props) instead of inlining complex object types in signatures.

- `src/server.ts`:

  ```
  type ServerEntry = {
  ```

- `src/components/ai-elements/shimmer.tsx`:

  ```
  type MotionHTMLProps = MotionProps & Record<string, unknown>;
  ```

- `src/components/page-hero.tsx`:

  ```
  interface PageHeroProps {
  ```

- `src/components/ui/badge.tsx`:

  ```
  export interface BadgeProps
  ```

## Cross-cutting server concerns in `src/start.ts` are expressed as composable TanStack Start middleware (`createMiddleware().server(...)`, `createCsrfMiddleware`) rather than inline logic in route handlers.

- `src/start.ts`:

  ```
  const errorMiddleware = createMiddleware().server(async ({ next }) => {
  ```

- `src/start.ts`:

  ```
  const csrfMiddleware = createCsrfMiddleware({
  ```

## Shared, long-lived instances and lookup data (QueryClient, component caches, navigation lists) are created once as module-level constants rather than inside render functions.

- `src/router.tsx`:

  ```
  const queryClient = new QueryClient();
  ```

- `src/components/ai-elements/shimmer.tsx`:

  ```
  const motionComponentCache = new Map<
  ```

- `src/components/site-header.tsx`:

  ```
  const nav = [
  ```

## Async helper functions declare an explicit `Promise<T>` return type and keep `await fetch`/IO calls isolated in small dedicated helpers.

- `src/server.ts`:

  ```
  async function getServerEntry(): Promise<ServerEntry> {
  ```

- `src/components/ai-elements/prompt-input.tsx`:

  ```
  const convertBlobUrlToDataUrl = async (url: string): Promise<string | null> => {
  ```

- `src/components/ai-elements/prompt-input.tsx`:

  ```
  const response = await fetch(url);
  ```
