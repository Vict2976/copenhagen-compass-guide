# Guidelines

Conventions backed by **≥2** real, verbatim code examples. Anything with fewer is omitted below.

## Root tooling configs are single default exports produced by the tool's own config helper (defineConfig / tseslint.config) rather than hand-built plain objects.

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

## In ui/ primitives, alias Radix Root/Trigger parts directly to named consts when no styling is needed, then export them at the bottom of the file.

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

- `src/components/ui/aspect-ratio.tsx`:

  ```
  export { AspectRatio };
  ```

## Styled UI primitives are built with React.forwardRef, typed with explicit ref element and ComponentPropsWithoutRef generics, so refs and native props pass through.

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

## Define visual variants with class-variance-authority (cva) in a `xxxVariants` const colocated with the component and export it alongside the component.

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

## Shared layout/site components are plain `export function` declarations with a named props interface or inline destructured props—not forwardRef or default exports.

- `src/components/chat-cta.tsx`:

  ```
  export function ChatCta({ question }: { question?: string }) {
  ```

- `src/components/page-hero.tsx`:

  ```
  interface PageHeroProps {
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

## AI element components export their props type (derived from ComponentProps or HTMLAttributes) and are arrow components that destructure className and spread remaining props onto the underlying element.

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

## Server-side cross-cutting concerns are expressed as TanStack Start middleware consts (createMiddleware().server, createCsrfMiddleware) composed in src/start.ts.

- `src/start.ts`:

  ```
  const errorMiddleware = createMiddleware().server(async ({ next }) => {
  ```

- `src/start.ts`:

  ```
  const csrfMiddleware = createCsrfMiddleware({
  ```

## Async helpers declare explicit Promise return types and are kept as module-private functions near their call sites.

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

## Declare local type aliases for complex shapes (server entry contracts, motion prop unions, component props) instead of inlining them.

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

## Module-level singletons and static data (QueryClient, nav items, component caches) are created once at file scope rather than inside render functions.

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
