# Module: src/components [AI]

(part 1 of 2) Shared React UI layer for the 'Hej Copenhagen' travel-guide site: a shadcn/Radix-based primitive component library (src/components/ui), AI chat UI building blocks (conversation log, messages with branching and markdown streaming, prompt input with attachments/screenshots, shimmer loading text) in src/components/ai-elements, and site chrome (header with Supabase sign-out, footer, page hero, chat call-to-action). (part 2 of 2) shadcn/ui-style library of presentational React UI primitives (menubar, navigation menu, pagination, popover, progress, radio group, resizable panels, scroll area, select, separator, sheet, sidebar, skeleton, slider, toaster, spinner, switch, table, tabs, textarea, toggle, toggle group, tooltip), mostly thin styled wrappers over Radix UI primitives using Tailwind classes merged via a cn() helper.

_This module does not fit in one model call, so it was read in 2 parts and their summaries were combined without a further model call._

## Key files
- `src/components/ai-elements/conversation.tsx`: Stick-to-bottom chat log container, empty state, scroll button, and Markdown export/download of UIMessage conversations
- `src/components/ai-elements/message.tsx`: Chat message rendering (user/assistant styling), actions with tooltips, branch navigation context, Streamdown markdown rendering with code/math/mermaid/cjk plugins
- `src/components/ai-elements/prompt-input.tsx`: Chat prompt input with provider/controller context, file attachments (blob->data URL), screen capture via getDisplayMedia, model select and submit/stop controls
- `src/components/ai-elements/shimmer.tsx`: Animated shimmer text (motion) for loading/thinking states
- `src/components/site-header.tsx`: Sticky nav header with routes, 'Ask AI' link to /chat, and Supabase auth sign-out clearing React Query cache
- `src/components/site-footer.tsx`: Site footer with nav links and emergency info
- `src/components/chat-cta.tsx`: Call-to-action section linking to the AI travel guide chat
- `src/components/page-hero.tsx`: Shared page header / photo banner
- `src/components/ui/button.tsx`: Core Button and buttonVariants (cva) with custom hero/inverse/glass variants, used throughout
- `src/components/ui/input-group.tsx`: Input group primitives used by the prompt input
- `src/components/ui/form.tsx`: react-hook-form integration components
- `src/components/ui/sidebar.tsx`: Most stateful component: SidebarProvider context with open/collapsed state, mobile Sheet fallback, cookie persistence (sidebar_state) and Cmd/Ctrl+B keyboard shortcut; exposes useSidebar hook.
- `src/components/ui/sheet.tsx`: Dialog-based slide-out panel with cva side variants; used by the sidebar on mobile.
- `src/components/ui/select.tsx`: Styled Radix Select wrappers (trigger, content, items, scroll buttons).
- `src/components/ui/menubar.tsx`: Styled Radix Menubar wrappers including checkbox/radio items and submenus.
- `src/components/ui/navigation-menu.tsx`: Styled Radix NavigationMenu with viewport/indicator and navigationMenuTriggerStyle cva.
- `src/components/ui/toggle.tsx`: Toggle with exported toggleVariants cva, reused by toggle-group.
- `src/components/ui/toggle-group.tsx`: ToggleGroup sharing variant/size via React context.
- `src/components/ui/pagination.tsx`: Pagination nav built on buttonVariants from the button component.
- `src/components/ui/sonner.tsx`: Themed Toaster wrapper around the sonner library.
- `src/components/ui/resizable.tsx`: Resizable panel group/handle wrappers over react-resizable-panels.
- `src/components/ui/table.tsx`: Styled HTML table element wrappers.
- `src/components/ui/tooltip.tsx`: Radix Tooltip wrappers; TooltipProvider used by the sidebar.

## Public interface
- Conversation, ConversationContent, ConversationEmptyState, ConversationScrollButton, ConversationDownload, messagesToMarkdown
- Message, MessageContent, MessageActions, MessageAction, MessageBranch, MessageBranchContent, MessageBranchSelector, MessageBranchPrevious, MessageBranchNext, MessageBranchPage
- PromptInputProvider, usePromptInputController, useProviderAttachments, AttachmentsContext, TextInputContext
- Shimmer
- SiteHeader, SiteFooter, ChatCta, PageHero
- Button, buttonVariants, ButtonGroup, ButtonGroupText, ButtonGroupSeparator, buttonGroupVariants
- Accordion*, AlertDialog*, Alert*, AspectRatio, Avatar*, Badge, Breadcrumb*, Calendar, CalendarDayButton, Card*, Carousel*, ChartContainer/ChartStyle/ChartTooltip/ChartTooltipContent, Checkbox, Collapsible*, Command*, ContextMenu*, Dialog*, Drawer*, DropdownMenu*, Form/FormField/FormItem/FormLabel/FormControl/FormDescription/FormMessage/useFormField, HoverCard*, InputGroup*, InputOTP*, Input, Label
- Menubar, MenubarMenu, MenubarGroup, MenubarPortal, MenubarRadioGroup, MenubarSub, MenubarTrigger, MenubarSubTrigger, MenubarSubContent, MenubarContent, MenubarItem, MenubarCheckboxItem, MenubarRadioItem, MenubarLabel (menubar.tsx)
- navigationMenuTriggerStyle, NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuIndicator, NavigationMenuViewport
- Pagination, PaginationContent, PaginationLink, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis
- Popover, PopoverTrigger, PopoverContent, PopoverAnchor
- Progress
- RadioGroup, RadioGroupItem
- ResizablePanelGroup, ResizablePanel, ResizableHandle
- ScrollArea, ScrollBar
- Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton
- Separator
- Sheet, SheetPortal, SheetOverlay, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription
- SidebarProvider, Sidebar, useSidebar (sidebar.tsx; remaining exports truncated)
- Skeleton
- Slider
- Toaster (sonner.tsx)
- Spinner
- Switch
- Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption
- Tabs, TabsList, TabsTrigger, TabsContent
- Textarea
- Toggle, toggleVariants
- ToggleGroup, ToggleGroupItem
- Tooltip, TooltipTrigger, TooltipContent, TooltipProvider

## Dependencies
- react
- ai (UIMessage, ChatStatus, FileUIPart, SourceDocumentUIPart types)
- streamdown
- @streamdown/code
- @streamdown/math
- @streamdown/mermaid
- @streamdown/cjk
- use-stick-to-bottom
- motion
- nanoid
- lucide-react
- @tanstack/react-router
- @tanstack/react-query
- @radix-ui/* primitives
- class-variance-authority
- cmdk
- vaul
- embla-carousel-react
- recharts
- react-day-picker
- react-hook-form
- input-otp
- @/lib/utils
- @/integrations/supabase/client
- @/hooks/use-session
- @/assets/hej-guide-logo.png
- @radix-ui/react-menubar
- @radix-ui/react-navigation-menu
- @radix-ui/react-popover
- @radix-ui/react-progress
- @radix-ui/react-radio-group
- @radix-ui/react-scroll-area
- @radix-ui/react-select
- @radix-ui/react-separator
- @radix-ui/react-dialog
- @radix-ui/react-slot
- @radix-ui/react-slider
- @radix-ui/react-switch
- @radix-ui/react-tabs
- @radix-ui/react-toggle
- @radix-ui/react-toggle-group
- @radix-ui/react-tooltip
- react-resizable-panels
- sonner
- @/lib/utils (cn)
- @/hooks/use-mobile (useIsMobile)
- @/components/ui/button
- @/components/ui/input

## AI touchpoints [AI]
- `src/components/ai-elements/prompt-input.tsx`
- `src/components/ai-elements/message.tsx`
- `src/components/ai-elements/conversation.tsx`
- `src/components/ai-elements/shimmer.tsx`
- `src/components/chat-cta.tsx`
- `src/components/site-header.tsx`

## Open questions
- No model API calls in this module; the chat route and server handler that call the model are not shown.
- prompt-input.tsx and message.tsx are truncated; the full set of exported subcomponents (e.g. submit button, model select, MessageResponse) cannot be confirmed.
- Many ui primitives may be unused scaffolding; actual usage not verifiable from these files.
- menubar.tsx and sidebar.tsx are truncated; the full export lists (e.g. MenubarSeparator/Shortcut, SidebarContent/SidebarMenu*) cannot be confirmed.
- button.tsx, input.tsx, @/lib/utils and @/hooks/use-mobile are imported but not included in the provided files.
- Several files carry a "use client" directive (Next.js/RSC convention), which has no effect in a TanStack Start + Vite app; likely copied verbatim from shadcn templates.
- resizable.tsx imports Group/Panel/Separator from react-resizable-panels (newer API) while styling with data-[panel-group-direction] attributes from the older API; styling may not apply depending on installed version.
