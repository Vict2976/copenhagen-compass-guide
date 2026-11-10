# Guidelines

Conventions backed by **≥2** real, verbatim code examples. Anything with fewer is omitted below.

## Root tooling configs are single default exports built with the tool's typed defineConfig/config helper; keep each tool's config in its own root file rather than merging or inlining options elsewhere.

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

## In src/components/ui, expose un-styled Radix roots and triggers as plain const aliases of the primitive, only adding wrapper components where styling is required.

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

## Styled UI wrappers use React.forwardRef with explicit element and props generics so refs pass through to the underlying DOM/Radix element.

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

## Define visual variants with class-variance-authority (cva) in a module-level xxxVariants constant and export it so other components (e.g. pagination, toggle-group) can reuse the same classes.

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

## Export a named Props type/interface alongside each component, deriving it from ComponentProps/HTMLAttributes of the wrapped element and extending with component-specific fields.

- `src/components/ai-elements/conversation.tsx`:

  ```
  export type ConversationProps = ComponentProps<typeof StickToBottom>;
  ```

- `src/components/ai-elements/message.tsx`:

  ```
  export type MessageProps = HTMLAttributes<HTMLDivElement> & {
  ```

- `src/components/page-hero.tsx`:

  ```
  interface PageHeroProps {
  ```

- `src/components/ui/badge.tsx`:

  ```
  export interface BadgeProps
  ```

- `src/components/ai-elements/shimmer.tsx`:

  ```
  type MotionHTMLProps = MotionProps & Record<string, unknown>;
  ```

## Components accept className and spread remaining props onto the wrapped element, merging classes with cn() so consumers can extend styling without forking the component.

- `src/components/ai-elements/conversation.tsx`:

  ```
  export const Conversation = ({ className, ...props }: ConversationProps) => (
  ```

- `src/components/ai-elements/message.tsx`:

  ```
  export const Message = ({ className, from, ...props }: MessageProps) => (
  ```

## Site chrome and feature components are exported as named function declarations with destructured, typed props (no default exports).

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

## Register cross-cutting server concerns as TanStack Start middleware constructed via createMiddleware/createCsrfMiddleware in src/start.ts instead of handling them per route.

- `src/start.ts`:

  ```
  const errorMiddleware = createMiddleware().server(async ({ next }) => {
  ```

- `src/start.ts`:

  ```
  const csrfMiddleware = createCsrfMiddleware({
  ```

## Keep per-instance singletons and static lookup data (query clients, component caches, nav lists) as module-level constants rather than recreating them inside render or request handlers.

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

## Async helpers declare explicit Promise return types and are written as small named functions that can be lazily invoked or awaited by callers.

- `src/server.ts`:

  ```
  async function getServerEntry(): Promise<ServerEntry> {
  ```

- `src/components/ai-elements/prompt-input.tsx`:

  ```
  const convertBlobUrlToDataUrl = async (url: string): Promise<string | null> => {
  ```
