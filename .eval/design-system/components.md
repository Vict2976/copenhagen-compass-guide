# Components

Every row is an applied `// @uxid` identifier. Ids are path-derived and permanent.

| identifier | file | flow | type | description |
| --- | --- | --- | --- | --- |
| `src/components/ai-elements/conversation::Conversation` | src/components/ai-elements/conversation.tsx | all | component | Arrow function component. Props: className, ...props. Renders: StickToBottom. |
| `src/components/ai-elements/conversation::ConversationContent` | src/components/ai-elements/conversation.tsx | all | component | Arrow function component. Props: className, ...props. Renders: StickToBottom.Content. |
| `src/components/ai-elements/conversation::ConversationDownload` | src/components/ai-elements/conversation.tsx | all | component | Arrow function component. Props: messages, filename, formatMessage, className, children, ...props. Hooks: useCallback. Renders: Button, DownloadIcon. |
| `src/components/ai-elements/conversation::ConversationEmptyState` | src/components/ai-elements/conversation.tsx | all | component | Arrow function component. Props: className, title, description, icon, children, ...props. Renders: div, h3, p. |
| `src/components/ai-elements/conversation::ConversationScrollButton` | src/components/ai-elements/conversation.tsx | all | component | Arrow function component. Props: className, ...props. Hooks: useStickToBottomContext, useCallback. Renders: Button, ArrowDownIcon. |
| `src/components/ai-elements/message::Message` | src/components/ai-elements/message.tsx | all | component | Arrow function component. Props: className, from, ...props. Renders: div. |
| `src/components/ai-elements/message::MessageAction` | src/components/ai-elements/message.tsx | all | component | Arrow function component. Props: tooltip, children, label, variant, size, ...props. Renders: span, p, Button, TooltipProvider, Tooltip, TooltipTrigger, TooltipContent. |
| `src/components/ai-elements/message::MessageActions` | src/components/ai-elements/message.tsx | all | component | Arrow function component. Props: className, children, ...props. Renders: div. |
| `src/components/ai-elements/message::MessageBranch` | src/components/ai-elements/message.tsx | all | component | Arrow function component. Props: defaultBranch, onBranchChange, className, ...props. Hooks: useState, useCallback, useMemo. Renders: div, MessageBranchContext.Provider. |
| `src/components/ai-elements/message::MessageBranchContent` | src/components/ai-elements/message.tsx | all | component | Arrow function component. Props: children, ...props. Hooks: useMessageBranch, useMemo, useEffect. Renders: div. |
| `src/components/ai-elements/message::MessageBranchNext` | src/components/ai-elements/message.tsx | all | component | Arrow function component. Props: children, ...props. Hooks: useMessageBranch. Renders: Button, ChevronRightIcon. |
| `src/components/ai-elements/message::MessageBranchPage` | src/components/ai-elements/message.tsx | all | component | Arrow function component. Props: className, ...props. Hooks: useMessageBranch. Renders: ButtonGroupText. |
| `src/components/ai-elements/message::MessageBranchPrevious` | src/components/ai-elements/message.tsx | all | component | Arrow function component. Props: children, ...props. Hooks: useMessageBranch. Renders: Button, ChevronLeftIcon. |
| `src/components/ai-elements/message::MessageBranchSelector` | src/components/ai-elements/message.tsx | all | component | Arrow function component. Props: className, ...props. Hooks: useMessageBranch. Renders: ButtonGroup. |
| `src/components/ai-elements/message::MessageContent` | src/components/ai-elements/message.tsx | all | component | Arrow function component. Props: children, className, ...props. Renders: div. |
| `src/components/ai-elements/message::MessageResponse` | src/components/ai-elements/message.tsx | all | component | Wrapped component. Props: className, ...props. Renders: Streamdown. |
| `src/components/ai-elements/message::MessageToolbar` | src/components/ai-elements/message.tsx | all | component | Arrow function component. Props: className, children, ...props. Renders: div. |
| `src/components/ai-elements/prompt-input::PromptInput` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, accept, multiple, globalDrop, syncHiddenInput, maxFiles, +5 more. Hooks: useOptionalPromptInputController, useRef, useState, useEffect, useCallback, useMemo. Renders: input, form, InputGroup, LocalReferencedSourcesContext.Provider, LocalAttachmentsContext.Provider. |
| `src/components/ai-elements/prompt-input::PromptInputActionAddAttachments` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: label, ...props. Hooks: usePromptInputAttachments, useCallback. Renders: DropdownMenuItem, ImageIcon. |
| `src/components/ai-elements/prompt-input::PromptInputActionAddScreenshot` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: label, onSelect, ...props. Hooks: usePromptInputAttachments, useCallback. Renders: DropdownMenuItem, Monitor. |
| `src/components/ai-elements/prompt-input::PromptInputActionMenu` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: props: PromptInputActionMenuProps. Renders: DropdownMenu. |
| `src/components/ai-elements/prompt-input::PromptInputActionMenuContent` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, ...props. Renders: DropdownMenuContent. |
| `src/components/ai-elements/prompt-input::PromptInputActionMenuItem` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, ...props. Renders: DropdownMenuItem. |
| `src/components/ai-elements/prompt-input::PromptInputActionMenuTrigger` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, children, ...props. Renders: DropdownMenuTrigger, PromptInputButton, PlusIcon. |
| `src/components/ai-elements/prompt-input::PromptInputBody` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ai-elements/prompt-input::PromptInputButton` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: variant, className, size, tooltip, ...props. Renders: span, InputGroupButton, Tooltip, TooltipTrigger, TooltipContent. |
| `src/components/ai-elements/prompt-input::PromptInputCommand` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, ...props. Renders: Command. |
| `src/components/ai-elements/prompt-input::PromptInputCommandEmpty` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, ...props. Renders: CommandEmpty. |
| `src/components/ai-elements/prompt-input::PromptInputCommandGroup` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, ...props. Renders: CommandGroup. |
| `src/components/ai-elements/prompt-input::PromptInputCommandInput` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, ...props. Renders: CommandInput. |
| `src/components/ai-elements/prompt-input::PromptInputCommandItem` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, ...props. Renders: CommandItem. |
| `src/components/ai-elements/prompt-input::PromptInputCommandList` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, ...props. Renders: CommandList. |
| `src/components/ai-elements/prompt-input::PromptInputCommandSeparator` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, ...props. Renders: CommandSeparator. |
| `src/components/ai-elements/prompt-input::PromptInputFooter` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, ...props. Renders: InputGroupAddon. |
| `src/components/ai-elements/prompt-input::PromptInputHeader` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, ...props. Renders: InputGroupAddon. |
| `src/components/ai-elements/prompt-input::PromptInputHoverCard` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: openDelay, closeDelay, ...props. Renders: HoverCard. |
| `src/components/ai-elements/prompt-input::PromptInputHoverCardContent` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: align, ...props. Renders: HoverCardContent. |
| `src/components/ai-elements/prompt-input::PromptInputHoverCardTrigger` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: props: PromptInputHoverCardTriggerProps. Renders: HoverCardTrigger. |
| `src/components/ai-elements/prompt-input::PromptInputProvider` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: initialInput, children. Hooks: useState, useCallback, useRef, useEffect, useMemo. Renders: PromptInputController.Provider, ProviderAttachmentsContext.Provider. |
| `src/components/ai-elements/prompt-input::PromptInputSelect` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: props: PromptInputSelectProps. Renders: Select. |
| `src/components/ai-elements/prompt-input::PromptInputSelectContent` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, ...props. Renders: SelectContent. |
| `src/components/ai-elements/prompt-input::PromptInputSelectItem` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, ...props. Renders: SelectItem. |
| `src/components/ai-elements/prompt-input::PromptInputSelectTrigger` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, ...props. Renders: SelectTrigger. |
| `src/components/ai-elements/prompt-input::PromptInputSelectValue` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, ...props. Renders: SelectValue. |
| `src/components/ai-elements/prompt-input::PromptInputSubmit` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, variant, size, status, onStop, onClick, +2 more. Hooks: useCallback. Renders: CornerDownLeftIcon, Spinner, SquareIcon, XIcon, InputGroupButton. |
| `src/components/ai-elements/prompt-input::PromptInputTab` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ai-elements/prompt-input::PromptInputTabBody` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ai-elements/prompt-input::PromptInputTabItem` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ai-elements/prompt-input::PromptInputTabLabel` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, ...props. Renders: h3. |
| `src/components/ai-elements/prompt-input::PromptInputTabsList` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ai-elements/prompt-input::PromptInputTextarea` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: onChange, onKeyDown, className, placeholder, ...props. Hooks: useOptionalPromptInputController, usePromptInputAttachments, useState, useCallback. Renders: InputGroupTextarea. |
| `src/components/ai-elements/prompt-input::PromptInputTools` | src/components/ai-elements/prompt-input.tsx | all | component | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ai-elements/shimmer::ShimmerComponent` | src/components/ai-elements/shimmer.tsx | all | component | Arrow function component. Props: children, as, className, duration, spread. Hooks: useMemo. Renders: MotionComponent. |
| `src/components/chat-cta::ChatCta` | src/components/chat-cta.tsx | all | component | Function component. Props: question. Renders: section, div, h2, p, Button, Link, ArrowRight. |
| `src/components/page-hero::PageHero` | src/components/page-hero.tsx | all | component | Function component. Props: eyebrow, title, intro, image, children. Renders: section, img, div, p, h1. |
| `src/components/site-footer::SiteFooter` | src/components/site-footer.tsx | all | component | Function component. Renders: footer, div, p, Link. |
| `src/components/site-header::SiteHeader` | src/components/site-header.tsx | all | component | Function component. Hooks: useState, useSession, useQueryClient, useNavigate. Renders: header, div, img, span, nav, button, Link, Button, +4 more. |
| `src/components/ui/accordion::AccordionContent` | src/components/ui/accordion.tsx | all | component | Wrapped component. Props: className, children, ...props. Renders: div, AccordionPrimitive.Content. |
| `src/components/ui/accordion::AccordionItem` | src/components/ui/accordion.tsx | all | component | Wrapped component. Props: className, ...props. Renders: AccordionPrimitive.Item. |
| `src/components/ui/accordion::AccordionTrigger` | src/components/ui/accordion.tsx | all | component | Wrapped component. Props: className, children, ...props. Renders: AccordionPrimitive.Header, AccordionPrimitive.Trigger, ChevronDown. |
| `src/components/ui/alert-dialog::AlertDialogAction` | src/components/ui/alert-dialog.tsx | all | component | Wrapped component. Props: className, ...props. Renders: AlertDialogPrimitive.Action. |
| `src/components/ui/alert-dialog::AlertDialogCancel` | src/components/ui/alert-dialog.tsx | all | component | Wrapped component. Props: className, ...props. Renders: AlertDialogPrimitive.Cancel. |
| `src/components/ui/alert-dialog::AlertDialogContent` | src/components/ui/alert-dialog.tsx | all | component | Wrapped component. Props: className, ...props. Renders: AlertDialogPortal, AlertDialogOverlay, AlertDialogPrimitive.Content. |
| `src/components/ui/alert-dialog::AlertDialogDescription` | src/components/ui/alert-dialog.tsx | all | component | Wrapped component. Props: className, ...props. Renders: AlertDialogPrimitive.Description. |
| `src/components/ui/alert-dialog::AlertDialogFooter` | src/components/ui/alert-dialog.tsx | all | component | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ui/alert-dialog::AlertDialogHeader` | src/components/ui/alert-dialog.tsx | all | component | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ui/alert-dialog::AlertDialogOverlay` | src/components/ui/alert-dialog.tsx | all | component | Wrapped component. Props: className, ...props. Renders: AlertDialogPrimitive.Overlay. |
| `src/components/ui/alert-dialog::AlertDialogTitle` | src/components/ui/alert-dialog.tsx | all | component | Wrapped component. Props: className, ...props. Renders: AlertDialogPrimitive.Title. |
| `src/components/ui/alert::Alert` | src/components/ui/alert.tsx | all | component | Wrapped component. Props: className, variant, ...props. Renders: div. |
| `src/components/ui/alert::AlertDescription` | src/components/ui/alert.tsx | all | component | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/alert::AlertTitle` | src/components/ui/alert.tsx | all | component | Wrapped component. Props: className, ...props. Renders: h5. |
| `src/components/ui/avatar::Avatar` | src/components/ui/avatar.tsx | all | component | Wrapped component. Props: className, ...props. Renders: AvatarPrimitive.Root. |
| `src/components/ui/avatar::AvatarFallback` | src/components/ui/avatar.tsx | all | component | Wrapped component. Props: className, ...props. Renders: AvatarPrimitive.Fallback. |
| `src/components/ui/avatar::AvatarImage` | src/components/ui/avatar.tsx | all | component | Wrapped component. Props: className, ...props. Renders: AvatarPrimitive.Image. |
| `src/components/ui/badge::Badge` | src/components/ui/badge.tsx | all | component | Function component. Props: className, variant, ...props. Renders: div. |
| `src/components/ui/breadcrumb::Breadcrumb` | src/components/ui/breadcrumb.tsx | all | component | Wrapped component. Props: ...props. Renders: nav. |
| `src/components/ui/breadcrumb::BreadcrumbEllipsis` | src/components/ui/breadcrumb.tsx | all | component | Arrow function component. Props: className, ...props. Renders: span, MoreHorizontal. |
| `src/components/ui/breadcrumb::BreadcrumbItem` | src/components/ui/breadcrumb.tsx | all | component | Wrapped component. Props: className, ...props. Renders: li. |
| `src/components/ui/breadcrumb::BreadcrumbLink` | src/components/ui/breadcrumb.tsx | all | component | Wrapped component. Props: asChild, className, ...props. Renders: Comp. |
| `src/components/ui/breadcrumb::BreadcrumbList` | src/components/ui/breadcrumb.tsx | all | component | Wrapped component. Props: className, ...props. Renders: ol. |
| `src/components/ui/breadcrumb::BreadcrumbPage` | src/components/ui/breadcrumb.tsx | all | component | Wrapped component. Props: className, ...props. Renders: span. |
| `src/components/ui/breadcrumb::BreadcrumbSeparator` | src/components/ui/breadcrumb.tsx | all | component | Arrow function component. Props: children, className, ...props. Renders: li, ChevronRight. |
| `src/components/ui/button-group::ButtonGroup` | src/components/ui/button-group.tsx | all | component | Function component. Props: className, orientation, ...props. Renders: div. |
| `src/components/ui/button-group::ButtonGroupSeparator` | src/components/ui/button-group.tsx | all | component | Function component. Props: className, orientation, ...props. Renders: Separator. |
| `src/components/ui/button-group::ButtonGroupText` | src/components/ui/button-group.tsx | all | component | Function component. Props: className, asChild, ...props. Renders: Comp. |
| `src/components/ui/button::Button` | src/components/ui/button.tsx | all | component | Wrapped component. Props: className, variant, size, asChild, ...props. Renders: Comp. |
| `src/components/ui/calendar::Calendar` | src/components/ui/calendar.tsx | all | component | Function component. Props: className, classNames, showOutsideDays, captionLayout, buttonVariant, formatters, +2 more. Renders: div, td, DayPicker, ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon. |
| `src/components/ui/calendar::CalendarDayButton` | src/components/ui/calendar.tsx | all | component | Function component. Props: className, day, modifiers, ...props. Hooks: useRef, useEffect. Renders: Button. |
| `src/components/ui/card::Card` | src/components/ui/card.tsx | all | component | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/card::CardContent` | src/components/ui/card.tsx | all | component | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/card::CardDescription` | src/components/ui/card.tsx | all | component | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/card::CardFooter` | src/components/ui/card.tsx | all | component | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/card::CardHeader` | src/components/ui/card.tsx | all | component | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/card::CardTitle` | src/components/ui/card.tsx | all | component | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/carousel::Carousel` | src/components/ui/carousel.tsx | all | component | Wrapped component. Props: orientation, opts, setApi, plugins, className, children, +1 more. Hooks: useEmblaCarousel, useState, useCallback, useEffect. Renders: div, CarouselContext.Provider. |
| `src/components/ui/carousel::CarouselContent` | src/components/ui/carousel.tsx | all | component | Wrapped component. Props: className, ...props. Hooks: useCarousel. Renders: div. |
| `src/components/ui/carousel::CarouselItem` | src/components/ui/carousel.tsx | all | component | Wrapped component. Props: className, ...props. Hooks: useCarousel. Renders: div. |
| `src/components/ui/carousel::CarouselNext` | src/components/ui/carousel.tsx | all | component | Wrapped component. Props: className, variant, size, ...props. Hooks: useCarousel. Renders: span, Button, ArrowRight. |
| `src/components/ui/carousel::CarouselPrevious` | src/components/ui/carousel.tsx | all | component | Wrapped component. Props: className, variant, size, ...props. Hooks: useCarousel. Renders: span, Button, ArrowLeft. |
| `src/components/ui/chart::ChartContainer` | src/components/ui/chart.tsx | all | component | Wrapped component. Props: id, className, children, config, ...props. Hooks: useId. Renders: div, ChartContext.Provider, ChartStyle, RechartsPrimitive.ResponsiveContainer. |
| `src/components/ui/chart::ChartLegendContent` | src/components/ui/chart.tsx | all | component | Wrapped component. Props: className, hideIcon, payload, verticalAlign, nameKey. Hooks: useChart. Renders: div, itemConfig.icon. |
| `src/components/ui/chart::ChartStyle` | src/components/ui/chart.tsx | all | component | Arrow function component. Props: id, config. Renders: style. |
| `src/components/ui/chart::ChartTooltipContent` | src/components/ui/chart.tsx | all | component | Wrapped component. Props: active, payload, className, indicator, hideLabel, hideIndicator, +7 more. Hooks: useChart, useMemo. Renders: div, itemConfig.icon, span. |
| `src/components/ui/checkbox::Checkbox` | src/components/ui/checkbox.tsx | all | component | Wrapped component. Props: className, ...props. Renders: CheckboxPrimitive.Root, CheckboxPrimitive.Indicator, Check. |
| `src/components/ui/command::Command` | src/components/ui/command.tsx | all | component | Wrapped component. Props: className, ...props. Renders: CommandPrimitive. |
| `src/components/ui/command::CommandDialog` | src/components/ui/command.tsx | all | component | Arrow function component. Props: children, ...props. Renders: Dialog, DialogContent, Command. |
| `src/components/ui/command::CommandEmpty` | src/components/ui/command.tsx | all | component | Wrapped component. Renders: CommandPrimitive.Empty. |
| `src/components/ui/command::CommandGroup` | src/components/ui/command.tsx | all | component | Wrapped component. Props: className, ...props. Renders: CommandPrimitive.Group. |
| `src/components/ui/command::CommandInput` | src/components/ui/command.tsx | all | component | Wrapped component. Props: className, ...props. Renders: div, Search, CommandPrimitive.Input. |
| `src/components/ui/command::CommandItem` | src/components/ui/command.tsx | all | component | Wrapped component. Props: className, ...props. Renders: CommandPrimitive.Item. |
| `src/components/ui/command::CommandList` | src/components/ui/command.tsx | all | component | Wrapped component. Props: className, ...props. Renders: CommandPrimitive.List. |
| `src/components/ui/command::CommandSeparator` | src/components/ui/command.tsx | all | component | Wrapped component. Props: className, ...props. Renders: CommandPrimitive.Separator. |
| `src/components/ui/command::CommandShortcut` | src/components/ui/command.tsx | all | component | Arrow function component. Props: className, ...props. Renders: span. |
| `src/components/ui/context-menu::ContextMenuCheckboxItem` | src/components/ui/context-menu.tsx | all | component | Wrapped component. Props: className, children, ...props. Renders: span, ContextMenuPrimitive.CheckboxItem, ContextMenuPrimitive.ItemIndicator, Check. |
| `src/components/ui/context-menu::ContextMenuContent` | src/components/ui/context-menu.tsx | all | component | Wrapped component. Props: className, ...props. Renders: ContextMenuPrimitive.Portal, ContextMenuPrimitive.Content. |
| `src/components/ui/context-menu::ContextMenuItem` | src/components/ui/context-menu.tsx | all | component | Wrapped component. Props: className, inset, ...props. Renders: ContextMenuPrimitive.Item. |
| `src/components/ui/context-menu::ContextMenuLabel` | src/components/ui/context-menu.tsx | all | component | Wrapped component. Props: className, inset, ...props. Renders: ContextMenuPrimitive.Label. |
| `src/components/ui/context-menu::ContextMenuRadioItem` | src/components/ui/context-menu.tsx | all | component | Wrapped component. Props: className, children, ...props. Renders: span, ContextMenuPrimitive.RadioItem, ContextMenuPrimitive.ItemIndicator, Circle. |
| `src/components/ui/context-menu::ContextMenuSeparator` | src/components/ui/context-menu.tsx | all | component | Wrapped component. Props: className, ...props. Renders: ContextMenuPrimitive.Separator. |
| `src/components/ui/context-menu::ContextMenuShortcut` | src/components/ui/context-menu.tsx | all | component | Arrow function component. Props: className, ...props. Renders: span. |
| `src/components/ui/context-menu::ContextMenuSubContent` | src/components/ui/context-menu.tsx | all | component | Wrapped component. Props: className, ...props. Renders: ContextMenuPrimitive.SubContent. |
| `src/components/ui/context-menu::ContextMenuSubTrigger` | src/components/ui/context-menu.tsx | all | component | Wrapped component. Props: className, inset, children, ...props. Renders: ContextMenuPrimitive.SubTrigger, ChevronRight. |
| `src/components/ui/dialog::DialogContent` | src/components/ui/dialog.tsx | all | component | Wrapped component. Props: className, children, ...props. Renders: span, DialogPortal, DialogOverlay, DialogPrimitive.Content, DialogPrimitive.Close, X. |
| `src/components/ui/dialog::DialogDescription` | src/components/ui/dialog.tsx | all | component | Wrapped component. Props: className, ...props. Renders: DialogPrimitive.Description. |
| `src/components/ui/dialog::DialogFooter` | src/components/ui/dialog.tsx | all | component | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ui/dialog::DialogHeader` | src/components/ui/dialog.tsx | all | component | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ui/dialog::DialogOverlay` | src/components/ui/dialog.tsx | all | component | Wrapped component. Props: className, ...props. Renders: DialogPrimitive.Overlay. |
| `src/components/ui/dialog::DialogTitle` | src/components/ui/dialog.tsx | all | component | Wrapped component. Props: className, ...props. Renders: DialogPrimitive.Title. |
| `src/components/ui/drawer::Drawer` | src/components/ui/drawer.tsx | all | component | Arrow function component. Props: shouldScaleBackground, ...props. Renders: DrawerPrimitive.Root. |
| `src/components/ui/drawer::DrawerContent` | src/components/ui/drawer.tsx | all | component | Wrapped component. Props: className, children, ...props. Renders: div, DrawerPortal, DrawerOverlay, DrawerPrimitive.Content. |
| `src/components/ui/drawer::DrawerDescription` | src/components/ui/drawer.tsx | all | component | Wrapped component. Props: className, ...props. Renders: DrawerPrimitive.Description. |
| `src/components/ui/drawer::DrawerFooter` | src/components/ui/drawer.tsx | all | component | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ui/drawer::DrawerHeader` | src/components/ui/drawer.tsx | all | component | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ui/drawer::DrawerOverlay` | src/components/ui/drawer.tsx | all | component | Wrapped component. Props: className, ...props. Renders: DrawerPrimitive.Overlay. |
| `src/components/ui/drawer::DrawerTitle` | src/components/ui/drawer.tsx | all | component | Wrapped component. Props: className, ...props. Renders: DrawerPrimitive.Title. |
| `src/components/ui/dropdown-menu::DropdownMenuCheckboxItem` | src/components/ui/dropdown-menu.tsx | all | component | Wrapped component. Props: className, children, ...props. Renders: span, DropdownMenuPrimitive.CheckboxItem, DropdownMenuPrimitive.ItemIndicator, Check. |
| `src/components/ui/dropdown-menu::DropdownMenuContent` | src/components/ui/dropdown-menu.tsx | all | component | Wrapped component. Props: className, sideOffset, ...props. Renders: DropdownMenuPrimitive.Portal, DropdownMenuPrimitive.Content. |
| `src/components/ui/dropdown-menu::DropdownMenuItem` | src/components/ui/dropdown-menu.tsx | all | component | Wrapped component. Props: className, inset, ...props. Renders: DropdownMenuPrimitive.Item. |
| `src/components/ui/dropdown-menu::DropdownMenuLabel` | src/components/ui/dropdown-menu.tsx | all | component | Wrapped component. Props: className, inset, ...props. Renders: DropdownMenuPrimitive.Label. |
| `src/components/ui/dropdown-menu::DropdownMenuRadioItem` | src/components/ui/dropdown-menu.tsx | all | component | Wrapped component. Props: className, children, ...props. Renders: span, DropdownMenuPrimitive.RadioItem, DropdownMenuPrimitive.ItemIndicator, Circle. |
| `src/components/ui/dropdown-menu::DropdownMenuSeparator` | src/components/ui/dropdown-menu.tsx | all | component | Wrapped component. Props: className, ...props. Renders: DropdownMenuPrimitive.Separator. |
| `src/components/ui/dropdown-menu::DropdownMenuShortcut` | src/components/ui/dropdown-menu.tsx | all | component | Arrow function component. Props: className, ...props. Renders: span. |
| `src/components/ui/dropdown-menu::DropdownMenuSubContent` | src/components/ui/dropdown-menu.tsx | all | component | Wrapped component. Props: className, ...props. Renders: DropdownMenuPrimitive.SubContent. |
| `src/components/ui/dropdown-menu::DropdownMenuSubTrigger` | src/components/ui/dropdown-menu.tsx | all | component | Wrapped component. Props: className, inset, children, ...props. Renders: DropdownMenuPrimitive.SubTrigger, ChevronRight. |
| `src/components/ui/form::FormControl` | src/components/ui/form.tsx | all | component | Wrapped component. Props: ...props. Hooks: useFormField. Renders: Slot. |
| `src/components/ui/form::FormDescription` | src/components/ui/form.tsx | all | component | Wrapped component. Props: className, ...props. Hooks: useFormField. Renders: p. |
| `src/components/ui/form::FormField` | src/components/ui/form.tsx | all | component | Arrow function component. Props: ...props. Renders: FormFieldContext.Provider, Controller. |
| `src/components/ui/form::FormItem` | src/components/ui/form.tsx | all | component | Wrapped component. Props: className, ...props. Hooks: useId. Renders: div, FormItemContext.Provider. |
| `src/components/ui/form::FormLabel` | src/components/ui/form.tsx | all | component | Wrapped component. Props: className, ...props. Hooks: useFormField. Renders: Label. |
| `src/components/ui/form::FormMessage` | src/components/ui/form.tsx | all | component | Wrapped component. Props: className, children, ...props. Hooks: useFormField. Renders: p. |
| `src/components/ui/hover-card::HoverCardContent` | src/components/ui/hover-card.tsx | all | component | Wrapped component. Props: className, align, sideOffset, ...props. Renders: HoverCardPrimitive.Content. |
| `src/components/ui/input-group::InputGroup` | src/components/ui/input-group.tsx | all | component | Function component. Props: className, ...props. Renders: div. |
| `src/components/ui/input-group::InputGroupAddon` | src/components/ui/input-group.tsx | all | component | Function component. Props: className, align, ...props. Renders: div. |
| `src/components/ui/input-group::InputGroupButton` | src/components/ui/input-group.tsx | all | component | Function component. Props: className, type, variant, size, ...props. Renders: Button. |
| `src/components/ui/input-group::InputGroupInput` | src/components/ui/input-group.tsx | all | component | Function component. Props: className, ...props. Renders: Input. |
| `src/components/ui/input-group::InputGroupText` | src/components/ui/input-group.tsx | all | component | Function component. Props: className, ...props. Renders: span. |
| `src/components/ui/input-group::InputGroupTextarea` | src/components/ui/input-group.tsx | all | component | Function component. Props: className, ...props. Renders: Textarea. |
| `src/components/ui/input-otp::InputOTP` | src/components/ui/input-otp.tsx | all | component | Wrapped component. Props: className, containerClassName, ...props. Renders: OTPInput. |
| `src/components/ui/input-otp::InputOTPGroup` | src/components/ui/input-otp.tsx | all | component | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/input-otp::InputOTPSeparator` | src/components/ui/input-otp.tsx | all | component | Wrapped component. Props: ...props. Renders: div, Minus. |
| `src/components/ui/input-otp::InputOTPSlot` | src/components/ui/input-otp.tsx | all | component | Wrapped component. Props: index, className, ...props. Hooks: useContext. Renders: div. |
| `src/components/ui/input::Input` | src/components/ui/input.tsx | all | component | Wrapped component. Props: className, type, ...props. Renders: input. |
| `src/components/ui/label::Label` | src/components/ui/label.tsx | all | component | Wrapped component. Props: className, ...props. Renders: LabelPrimitive.Root. |
| `src/components/ui/menubar::Menubar` | src/components/ui/menubar.tsx | all | component | Wrapped component. Props: className, ...props. Renders: MenubarPrimitive.Root. |
| `src/components/ui/menubar::MenubarCheckboxItem` | src/components/ui/menubar.tsx | all | component | Wrapped component. Props: className, children, ...props. Renders: span, MenubarPrimitive.CheckboxItem, MenubarPrimitive.ItemIndicator, Check. |
| `src/components/ui/menubar::MenubarContent` | src/components/ui/menubar.tsx | all | component | Wrapped component. Props: className, align, alignOffset, sideOffset, ...props. Renders: MenubarPrimitive.Portal, MenubarPrimitive.Content. |
| `src/components/ui/menubar::MenubarGroup` | src/components/ui/menubar.tsx | all | component | Function component. Props: ...props. Renders: MenubarPrimitive.Group. |
| `src/components/ui/menubar::MenubarItem` | src/components/ui/menubar.tsx | all | component | Wrapped component. Props: className, inset, ...props. Renders: MenubarPrimitive.Item. |
| `src/components/ui/menubar::MenubarLabel` | src/components/ui/menubar.tsx | all | component | Wrapped component. Props: className, inset, ...props. Renders: MenubarPrimitive.Label. |
| `src/components/ui/menubar::MenubarMenu` | src/components/ui/menubar.tsx | all | component | Function component. Props: ...props. Renders: MenubarPrimitive.Menu. |
| `src/components/ui/menubar::MenubarPortal` | src/components/ui/menubar.tsx | all | component | Function component. Props: ...props. Renders: MenubarPrimitive.Portal. |
| `src/components/ui/menubar::MenubarRadioGroup` | src/components/ui/menubar.tsx | all | component | Function component. Props: ...props. Renders: MenubarPrimitive.RadioGroup. |
| `src/components/ui/menubar::MenubarRadioItem` | src/components/ui/menubar.tsx | all | component | Wrapped component. Props: className, children, ...props. Renders: span, MenubarPrimitive.RadioItem, MenubarPrimitive.ItemIndicator, Circle. |
| `src/components/ui/menubar::MenubarSeparator` | src/components/ui/menubar.tsx | all | component | Wrapped component. Props: className, ...props. Renders: MenubarPrimitive.Separator. |
| `src/components/ui/menubar::MenubarShortcut` | src/components/ui/menubar.tsx | all | component | Arrow function component. Props: className, ...props. Renders: span. |
| `src/components/ui/menubar::MenubarSub` | src/components/ui/menubar.tsx | all | component | Function component. Props: ...props. Renders: MenubarPrimitive.Sub. |
| `src/components/ui/menubar::MenubarSubContent` | src/components/ui/menubar.tsx | all | component | Wrapped component. Props: className, ...props. Renders: MenubarPrimitive.SubContent. |
| `src/components/ui/menubar::MenubarSubTrigger` | src/components/ui/menubar.tsx | all | component | Wrapped component. Props: className, inset, children, ...props. Renders: MenubarPrimitive.SubTrigger, ChevronRight. |
| `src/components/ui/menubar::MenubarTrigger` | src/components/ui/menubar.tsx | all | component | Wrapped component. Props: className, ...props. Renders: MenubarPrimitive.Trigger. |
| `src/components/ui/navigation-menu::NavigationMenu` | src/components/ui/navigation-menu.tsx | all | component | Wrapped component. Props: className, children, ...props. Renders: NavigationMenuPrimitive.Root, NavigationMenuViewport. |
| `src/components/ui/navigation-menu::NavigationMenuContent` | src/components/ui/navigation-menu.tsx | all | component | Wrapped component. Props: className, ...props. Renders: NavigationMenuPrimitive.Content. |
| `src/components/ui/navigation-menu::NavigationMenuIndicator` | src/components/ui/navigation-menu.tsx | all | component | Wrapped component. Props: className, ...props. Renders: div, NavigationMenuPrimitive.Indicator. |
| `src/components/ui/navigation-menu::NavigationMenuList` | src/components/ui/navigation-menu.tsx | all | component | Wrapped component. Props: className, ...props. Renders: NavigationMenuPrimitive.List. |
| `src/components/ui/navigation-menu::NavigationMenuTrigger` | src/components/ui/navigation-menu.tsx | all | component | Wrapped component. Props: className, children, ...props. Renders: NavigationMenuPrimitive.Trigger, ChevronDown. |
| `src/components/ui/navigation-menu::NavigationMenuViewport` | src/components/ui/navigation-menu.tsx | all | component | Wrapped component. Props: className, ...props. Renders: div, NavigationMenuPrimitive.Viewport. |
| `src/components/ui/pagination::Pagination` | src/components/ui/pagination.tsx | all | component | Arrow function component. Props: className, ...props. Renders: nav. |
| `src/components/ui/pagination::PaginationContent` | src/components/ui/pagination.tsx | all | component | Wrapped component. Props: className, ...props. Renders: ul. |
| `src/components/ui/pagination::PaginationEllipsis` | src/components/ui/pagination.tsx | all | component | Arrow function component. Props: className, ...props. Renders: span, MoreHorizontal. |
| `src/components/ui/pagination::PaginationItem` | src/components/ui/pagination.tsx | all | component | Wrapped component. Props: className, ...props. Renders: li. |
| `src/components/ui/pagination::PaginationLink` | src/components/ui/pagination.tsx | all | component | Arrow function component. Props: className, isActive, size, ...props. Renders: a. |
| `src/components/ui/pagination::PaginationNext` | src/components/ui/pagination.tsx | all | component | Arrow function component. Props: className, ...props. Renders: span, PaginationLink, ChevronRight. |
| `src/components/ui/pagination::PaginationPrevious` | src/components/ui/pagination.tsx | all | component | Arrow function component. Props: className, ...props. Renders: span, PaginationLink, ChevronLeft. |
| `src/components/ui/popover::PopoverContent` | src/components/ui/popover.tsx | all | component | Wrapped component. Props: className, align, sideOffset, ...props. Renders: PopoverPrimitive.Portal, PopoverPrimitive.Content. |
| `src/components/ui/progress::Progress` | src/components/ui/progress.tsx | all | component | Wrapped component. Props: className, value, ...props. Renders: ProgressPrimitive.Root, ProgressPrimitive.Indicator. |
| `src/components/ui/radio-group::RadioGroup` | src/components/ui/radio-group.tsx | all | component | Wrapped component. Props: className, ...props. Renders: RadioGroupPrimitive.Root. |
| `src/components/ui/radio-group::RadioGroupItem` | src/components/ui/radio-group.tsx | all | component | Wrapped component. Props: className, ...props. Renders: RadioGroupPrimitive.Item, RadioGroupPrimitive.Indicator, Circle. |
| `src/components/ui/resizable::ResizableHandle` | src/components/ui/resizable.tsx | all | component | Arrow function component. Props: withHandle, className, ...props. Renders: div, Separator, GripVertical. |
| `src/components/ui/resizable::ResizablePanelGroup` | src/components/ui/resizable.tsx | all | component | Arrow function component. Props: className, ...props. Renders: Group. |
| `src/components/ui/scroll-area::ScrollArea` | src/components/ui/scroll-area.tsx | all | component | Wrapped component. Props: className, children, ...props. Renders: ScrollAreaPrimitive.Root, ScrollAreaPrimitive.Viewport, ScrollBar, ScrollAreaPrimitive.Corner. |
| `src/components/ui/scroll-area::ScrollBar` | src/components/ui/scroll-area.tsx | all | component | Wrapped component. Props: className, orientation, ...props. Renders: ScrollAreaPrimitive.ScrollAreaScrollbar, ScrollAreaPrimitive.ScrollAreaThumb. |
| `src/components/ui/select::SelectContent` | src/components/ui/select.tsx | all | component | Wrapped component. Props: className, children, position, ...props. Renders: SelectPrimitive.Portal, SelectPrimitive.Content, SelectScrollUpButton, SelectPrimitive.Viewport, SelectScrollDownButton. |
| `src/components/ui/select::SelectItem` | src/components/ui/select.tsx | all | component | Wrapped component. Props: className, children, ...props. Renders: span, SelectPrimitive.Item, SelectPrimitive.ItemIndicator, Check, SelectPrimitive.ItemText. |
| `src/components/ui/select::SelectLabel` | src/components/ui/select.tsx | all | component | Wrapped component. Props: className, ...props. Renders: SelectPrimitive.Label. |
| `src/components/ui/select::SelectScrollDownButton` | src/components/ui/select.tsx | all | component | Wrapped component. Props: className, ...props. Renders: SelectPrimitive.ScrollDownButton, ChevronDown. |
| `src/components/ui/select::SelectScrollUpButton` | src/components/ui/select.tsx | all | component | Wrapped component. Props: className, ...props. Renders: SelectPrimitive.ScrollUpButton, ChevronUp. |
| `src/components/ui/select::SelectSeparator` | src/components/ui/select.tsx | all | component | Wrapped component. Props: className, ...props. Renders: SelectPrimitive.Separator. |
| `src/components/ui/select::SelectTrigger` | src/components/ui/select.tsx | all | component | Wrapped component. Props: className, children, ...props. Renders: SelectPrimitive.Trigger, SelectPrimitive.Icon, ChevronDown. |
| `src/components/ui/separator::Separator` | src/components/ui/separator.tsx | all | component | Wrapped component. Props: className, orientation, decorative, ...props. Renders: SeparatorPrimitive.Root. |
| `src/components/ui/sheet::SheetContent` | src/components/ui/sheet.tsx | all | component | Wrapped component. Props: side, className, children, ...props. Renders: span, SheetPortal, SheetOverlay, SheetPrimitive.Content, SheetPrimitive.Close, X. |
| `src/components/ui/sheet::SheetDescription` | src/components/ui/sheet.tsx | all | component | Wrapped component. Props: className, ...props. Renders: SheetPrimitive.Description. |
| `src/components/ui/sheet::SheetFooter` | src/components/ui/sheet.tsx | all | component | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ui/sheet::SheetHeader` | src/components/ui/sheet.tsx | all | component | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ui/sheet::SheetOverlay` | src/components/ui/sheet.tsx | all | component | Wrapped component. Props: className, ...props. Renders: SheetPrimitive.Overlay. |
| `src/components/ui/sheet::SheetTitle` | src/components/ui/sheet.tsx | all | component | Wrapped component. Props: className, ...props. Renders: SheetPrimitive.Title. |
| `src/components/ui/sidebar::Sidebar` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: side, variant, collapsible, className, children, ...props. Hooks: useSidebar. Renders: div, Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription. |
| `src/components/ui/sidebar::SidebarContent` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/sidebar::SidebarFooter` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/sidebar::SidebarGroup` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/sidebar::SidebarGroupAction` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: className, asChild, ...props. Renders: Comp. |
| `src/components/ui/sidebar::SidebarGroupContent` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/sidebar::SidebarGroupLabel` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: className, asChild, ...props. Renders: Comp. |
| `src/components/ui/sidebar::SidebarHeader` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/sidebar::SidebarInput` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: className, ...props. Renders: Input. |
| `src/components/ui/sidebar::SidebarInset` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: className, ...props. Renders: main. |
| `src/components/ui/sidebar::SidebarMenu` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: className, ...props. Renders: ul. |
| `src/components/ui/sidebar::SidebarMenuAction` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: className, asChild, showOnHover, ...props. Renders: Comp. |
| `src/components/ui/sidebar::SidebarMenuBadge` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/sidebar::SidebarMenuButton` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: asChild, isActive, variant, size, tooltip, className, +1 more. Hooks: useSidebar. Renders: Comp, Tooltip, TooltipTrigger, TooltipContent. |
| `src/components/ui/sidebar::SidebarMenuItem` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: className, ...props. Renders: li. |
| `src/components/ui/sidebar::SidebarMenuSkeleton` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: className, showIcon, ...props. Hooks: useMemo. Renders: div, Skeleton. |
| `src/components/ui/sidebar::SidebarMenuSub` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: className, ...props. Renders: ul. |
| `src/components/ui/sidebar::SidebarMenuSubButton` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: asChild, size, isActive, className, ...props. Renders: Comp. |
| `src/components/ui/sidebar::SidebarMenuSubItem` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: ...props. Renders: li. |
| `src/components/ui/sidebar::SidebarProvider` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: defaultOpen, open, onOpenChange, className, style, children, +1 more. Hooks: useIsMobile, useState, useCallback, useEffect, useMemo. Renders: div, SidebarContext.Provider, TooltipProvider. |
| `src/components/ui/sidebar::SidebarRail` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: className, ...props. Hooks: useSidebar. Renders: button. |
| `src/components/ui/sidebar::SidebarSeparator` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: className, ...props. Renders: Separator. |
| `src/components/ui/sidebar::SidebarTrigger` | src/components/ui/sidebar.tsx | all | component | Wrapped component. Props: className, onClick, ...props. Hooks: useSidebar. Renders: span, Button, PanelLeft. |
| `src/components/ui/skeleton::Skeleton` | src/components/ui/skeleton.tsx | all | component | Function component. Props: className, ...props. Renders: div. |
| `src/components/ui/slider::Slider` | src/components/ui/slider.tsx | all | component | Wrapped component. Props: className, ...props. Renders: SliderPrimitive.Root, SliderPrimitive.Track, SliderPrimitive.Range, SliderPrimitive.Thumb. |
| `src/components/ui/sonner::Toaster` | src/components/ui/sonner.tsx | all | component | Arrow function component. Props: ...props. Renders: Sonner. |
| `src/components/ui/spinner::Spinner` | src/components/ui/spinner.tsx | all | component | Function component. Props: className, ...props. Renders: Loader2Icon. |
| `src/components/ui/switch::Switch` | src/components/ui/switch.tsx | all | component | Wrapped component. Props: className, ...props. Renders: SwitchPrimitives.Root, SwitchPrimitives.Thumb. |
| `src/components/ui/table::Table` | src/components/ui/table.tsx | all | component | Wrapped component. Props: className, ...props. Renders: div, table. |
| `src/components/ui/table::TableBody` | src/components/ui/table.tsx | all | component | Wrapped component. Props: className, ...props. Renders: tbody. |
| `src/components/ui/table::TableCaption` | src/components/ui/table.tsx | all | component | Wrapped component. Props: className, ...props. Renders: caption. |
| `src/components/ui/table::TableCell` | src/components/ui/table.tsx | all | component | Wrapped component. Props: className, ...props. Renders: td. |
| `src/components/ui/table::TableFooter` | src/components/ui/table.tsx | all | component | Wrapped component. Props: className, ...props. Renders: tfoot. |
| `src/components/ui/table::TableHead` | src/components/ui/table.tsx | all | component | Wrapped component. Props: className, ...props. Renders: th. |
| `src/components/ui/table::TableHeader` | src/components/ui/table.tsx | all | component | Wrapped component. Props: className, ...props. Renders: thead. |
| `src/components/ui/table::TableRow` | src/components/ui/table.tsx | all | component | Wrapped component. Props: className, ...props. Renders: tr. |
| `src/components/ui/tabs::TabsContent` | src/components/ui/tabs.tsx | all | component | Wrapped component. Props: className, ...props. Renders: TabsPrimitive.Content. |
| `src/components/ui/tabs::TabsList` | src/components/ui/tabs.tsx | all | component | Wrapped component. Props: className, ...props. Renders: TabsPrimitive.List. |
| `src/components/ui/tabs::TabsTrigger` | src/components/ui/tabs.tsx | all | component | Wrapped component. Props: className, ...props. Renders: TabsPrimitive.Trigger. |
| `src/components/ui/textarea::Textarea` | src/components/ui/textarea.tsx | all | component | Wrapped component. Props: className, ...props. Renders: textarea. |
| `src/components/ui/toggle-group::ToggleGroup` | src/components/ui/toggle-group.tsx | all | component | Wrapped component. Props: className, variant, size, children, ...props. Renders: ToggleGroupPrimitive.Root, ToggleGroupContext.Provider. |
| `src/components/ui/toggle-group::ToggleGroupItem` | src/components/ui/toggle-group.tsx | all | component | Wrapped component. Props: className, children, variant, size, ...props. Hooks: useContext. Renders: ToggleGroupPrimitive.Item. |
| `src/components/ui/toggle::Toggle` | src/components/ui/toggle.tsx | all | component | Wrapped component. Props: className, variant, size, ...props. Renders: TogglePrimitive.Root. |
| `src/components/ui/tooltip::TooltipContent` | src/components/ui/tooltip.tsx | all | component | Wrapped component. Props: className, sideOffset, ...props. Renders: TooltipPrimitive.Portal, TooltipPrimitive.Content. |
| `src/routes/__root::ErrorComponent` | src/routes/__root.tsx | all | component | Function component. Props: error, reset. Hooks: useRouter, useEffect. Renders: div, h1, p, button, a. |
| `src/routes/__root::NotFoundComponent` | src/routes/__root.tsx | all | component | Function component. Renders: div, h1, h2, p, Link. |
| `src/routes/__root::RootComponent` | src/routes/__root.tsx | all | component | Function component. Hooks: useRouteContext, useRouterState. Renders: div, main, QueryClientProvider, SiteHeader, Outlet, SiteFooter. |
| `src/routes/__root::RootShell` | src/routes/__root.tsx | all | component | Function component. Props: children. Renders: html, head, body, HeadContent, Scripts. |
| `src/routes/_authenticated/chat::ChatPage` | src/routes/_authenticated/chat.tsx | all | component | Function component. Hooks: useState, useRef, useCallback, useEffect. Renders: div, img, h1, p, h2, button, Button, RotateCcw, +4 more. |
| `src/routes/_authenticated/planner::PlannerPage` | src/routes/_authenticated/planner.tsx | all | component | Function component. Hooks: useServerFn, useState, useEffect. Renders: div, p, h1, form, button, label, Button, Loader2, +4 more. |
| `src/routes/auth::AuthPage` | src/routes/auth.tsx | all | component | Function component. Hooks: useSearch, useNavigate, useState, useEffect. Renders: section, img, h1, p, div, button, Button, GoogleIcon, +1 more. |
| `src/routes/auth::GoogleIcon` | src/routes/auth.tsx | all | component | Function component. Renders: svg, path. |
| `src/routes/cities.$slug::CityPage` | src/routes/cities.$slug.tsx | all | component | Function component. Hooks: useLoaderData. Renders: section, div, p, h2, h3, aside, PageHero, Link, +4 more. |
| `src/routes/cities.index::CitiesPage` | src/routes/cities.index.tsx | all | component | Function component. Renders: section, div, img, p, h2, span, PageHero, Link, +3 more. |
| `src/routes/currency::CurrencyPage` | src/routes/currency.tsx | all | component | Function component. Hooks: useState, useEffect, useMemo. Renders: section, div, h2, span, label, p, PageHero, Input, +4 more. |
| `src/routes/currency::CurrencySelect` | src/routes/currency.tsx | all | component | Function component. Props: value, onChange, label. Renders: Select, SelectTrigger, SelectValue, SelectContent, SelectItem. |
| `src/routes/history::HistoryPage` | src/routes/history.tsx | all | component | Function component. Renders: section, ol, li, span, p, h2, PageHero, ChatCta. |
| `src/routes/index::Index` | src/routes/index.tsx | all | component | Function component. Renders: section, img, div, p, h1, f.icon, Button, Link, +2 more. |
| `src/routes/people::PeoplePage` | src/routes/people.tsx | all | component | Function component. Renders: section, p, h2, div, l.icon, h3, PageHero, ChatCta. |
| `src/routes/visa::VisaPage` | src/routes/visa.tsx | all | component | Function component. Renders: section, div, g.icon, h2, p, ol, PageHero, Fingerprint, +4 more. |

## Coverage

- all: 274 identifier(s)

## Design system components

274 component(s) carry a stable `@uxid`. 15 declare variants (22 axis/axes, 72 value(s) in total), read from `cva()` calls, class maps, prop unions and conditional class branches.

200 of them are primitives under `src/components/ui`, identified by the registry's `aliases.ui` (@/components/ui). 74 are application components, of which 13 are rendered in exactly one other file and 59 are rendered nowhere else (a page, or dead code).

| @uxid | component | file | variants | states | uses | notes |
| --- | --- | --- | --- | --- | --- | --- |
| "src/components/ai-elements/conversation::Conversation" | Conversation | `src/components/ai-elements/conversation.tsx` |  | dark, hover | 1 | Root container for a chat thread; hosts the message list and its scroll behavior. |
| "src/components/ai-elements/conversation::ConversationContent" | ConversationContent | `src/components/ai-elements/conversation.tsx` |  | dark, hover | 1 | Inner content region of @src/components/ai-elements/conversation::Conversation where messages are rendered. |
| "src/components/ai-elements/conversation::ConversationEmptyState" | ConversationEmptyState | `src/components/ai-elements/conversation.tsx` |  | dark, hover | 0 | Placeholder shown inside a conversation that has no messages yet. |
| "src/components/ai-elements/conversation::ConversationScrollButton" | ConversationScrollButton | `src/components/ai-elements/conversation.tsx` |  | dark, hover | 1 | Button that jumps the conversation back to the latest message when the user has scrolled up. |
| "src/components/ai-elements/conversation::ConversationDownload" | ConversationDownload | `src/components/ai-elements/conversation.tsx` |  | dark, hover | 0 | Control for downloading the conversation. |
| "src/components/ai-elements/message::Message" | Message | `src/components/ai-elements/message.tsx` |  | group-[.is-assistant], group-[.is-user] | 2 | Wrapper for a single chat message within the conversation. |
| "src/components/ai-elements/message::MessageContent" | MessageContent | `src/components/ai-elements/message.tsx` |  | group-[.is-assistant], group-[.is-user] | 2 | Body area of a message holding its rendered content. |
| "src/components/ai-elements/message::MessageActions" | MessageActions | `src/components/ai-elements/message.tsx` |  | group-[.is-assistant], group-[.is-user] | 0 | Group container for the actions attached to a message. |
| "src/components/ai-elements/message::MessageAction" | MessageAction | `src/components/ai-elements/message.tsx` |  | group-[.is-assistant], group-[.is-user] | 0 | A single action control inside @src/components/ai-elements/message::MessageActions. |
| "src/components/ai-elements/message::MessageBranch" | MessageBranch | `src/components/ai-elements/message.tsx` |  | group-[.is-assistant], group-[.is-user] | 0 | Container for a message that has multiple alternative versions (branches). |
| "src/components/ai-elements/message::MessageBranchContent" | MessageBranchContent | `src/components/ai-elements/message.tsx` |  | group-[.is-assistant], group-[.is-user] | 0 | Content slot for the currently selected branch of a message. |
| "src/components/ai-elements/message::MessageBranchSelector" | MessageBranchSelector | `src/components/ai-elements/message.tsx` |  | group-[.is-assistant], group-[.is-user] | 0 | Control cluster for switching between message branches. |
| "src/components/ai-elements/message::MessageBranchPrevious" | MessageBranchPrevious | `src/components/ai-elements/message.tsx` |  | group-[.is-assistant], group-[.is-user] | 0 | Steps to the previous branch of a message. |
| "src/components/ai-elements/message::MessageBranchNext" | MessageBranchNext | `src/components/ai-elements/message.tsx` |  | group-[.is-assistant], group-[.is-user] | 0 | Steps to the next branch of a message. |
| "src/components/ai-elements/message::MessageBranchPage" | MessageBranchPage | `src/components/ai-elements/message.tsx` |  | group-[.is-assistant], group-[.is-user] | 0 | Displays the current branch position within the available branches. |
| "src/components/ai-elements/message::MessageResponse" | MessageResponse | `src/components/ai-elements/message.tsx` |  | group-[.is-assistant], group-[.is-user] | 1 | Renders the assistant's response content within a message. |
| "src/components/ai-elements/message::MessageToolbar" | MessageToolbar | `src/components/ai-elements/message.tsx` |  | group-[.is-assistant], group-[.is-user] | 0 | Toolbar row attached to a message for its controls. |
| "src/components/ai-elements/prompt-input::PromptInputProvider" | PromptInputProvider | `src/components/ai-elements/prompt-input.tsx` | code (3) | aria-expanded, hover, open | 0 | Context provider that holds shared state for the prompt input composer. |
| "src/components/ai-elements/prompt-input::PromptInputActionAddAttachments" | PromptInputActionAddAttachments | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Action that lets the user add file attachments to the prompt. |
| "src/components/ai-elements/prompt-input::PromptInputActionAddScreenshot" | PromptInputActionAddScreenshot | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Action that lets the user add a screenshot to the prompt. |
| "src/components/ai-elements/prompt-input::PromptInput" | PromptInput | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 1 | Root of the prompt composer where the user writes and sends messages. |
| "src/components/ai-elements/prompt-input::PromptInputBody" | PromptInputBody | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Main body region of the prompt composer. |
| "src/components/ai-elements/prompt-input::PromptInputTextarea" | PromptInputTextarea | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 1 | Multi-line text field for typing the prompt. |
| "src/components/ai-elements/prompt-input::PromptInputHeader" | PromptInputHeader | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Header slot above the prompt text area. |
| "src/components/ai-elements/prompt-input::PromptInputFooter" | PromptInputFooter | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 1 | Footer slot below the prompt text area, typically holding tools and submit. |
| "src/components/ai-elements/prompt-input::PromptInputTools" | PromptInputTools | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Grouping container for tool controls in the composer. |
| "src/components/ai-elements/prompt-input::PromptInputButton" | PromptInputButton | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Generic button styled for use inside the prompt composer. |
| "src/components/ai-elements/prompt-input::PromptInputActionMenu" | PromptInputActionMenu | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Menu root grouping prompt actions behind a trigger. |
| "src/components/ai-elements/prompt-input::PromptInputActionMenuTrigger" | PromptInputActionMenuTrigger | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Opens @src/components/ai-elements/prompt-input::PromptInputActionMenu. |
| "src/components/ai-elements/prompt-input::PromptInputActionMenuContent" | PromptInputActionMenuContent | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Popover content listing items in the action menu. |
| "src/components/ai-elements/prompt-input::PromptInputActionMenuItem" | PromptInputActionMenuItem | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | A single selectable entry in the action menu. |
| "src/components/ai-elements/prompt-input::PromptInputSubmit" | PromptInputSubmit | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 1 | Submit button that sends the composed prompt. |
| "src/components/ai-elements/prompt-input::PromptInputSelect" | PromptInputSelect | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Select root for choosing an option within the composer. |
| "src/components/ai-elements/prompt-input::PromptInputSelectTrigger" | PromptInputSelectTrigger | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Trigger that opens the composer select. |
| "src/components/ai-elements/prompt-input::PromptInputSelectContent" | PromptInputSelectContent | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Dropdown content of the composer select. |
| "src/components/ai-elements/prompt-input::PromptInputSelectItem" | PromptInputSelectItem | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | A single option in the composer select. |
| "src/components/ai-elements/prompt-input::PromptInputSelectValue" | PromptInputSelectValue | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Displays the currently selected value of the composer select. |
| "src/components/ai-elements/prompt-input::PromptInputHoverCard" | PromptInputHoverCard | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Hover card root for showing supplementary information in the composer. |
| "src/components/ai-elements/prompt-input::PromptInputHoverCardTrigger" | PromptInputHoverCardTrigger | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Element that reveals the hover card on hover. |
| "src/components/ai-elements/prompt-input::PromptInputHoverCardContent" | PromptInputHoverCardContent | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Content panel shown by the hover card. |
| "src/components/ai-elements/prompt-input::PromptInputTabsList" | PromptInputTabsList | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Container listing the tabs available inside the AI prompt input. |
| "src/components/ai-elements/prompt-input::PromptInputTab" | PromptInputTab | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | A single selectable tab within the prompt input's tab list. |
| "src/components/ai-elements/prompt-input::PromptInputTabLabel" | PromptInputTabLabel | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Text label shown on a prompt input tab. |
| "src/components/ai-elements/prompt-input::PromptInputTabBody" | PromptInputTabBody | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Panel region that holds the content of the active prompt input tab. |
| "src/components/ai-elements/prompt-input::PromptInputTabItem" | PromptInputTabItem | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | An individual item rendered inside a prompt input tab body. |
| "src/components/ai-elements/prompt-input::PromptInputCommand" | PromptInputCommand | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Command-palette style root used within the prompt input for searchable options. |
| "src/components/ai-elements/prompt-input::PromptInputCommandInput" | PromptInputCommandInput | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Text field for filtering the prompt input command list. |
| "src/components/ai-elements/prompt-input::PromptInputCommandList" | PromptInputCommandList | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Scrollable list of results for the prompt input command. |
| "src/components/ai-elements/prompt-input::PromptInputCommandEmpty" | PromptInputCommandEmpty | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Placeholder shown when the command filter returns no results. |
| "src/components/ai-elements/prompt-input::PromptInputCommandGroup" | PromptInputCommandGroup | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Labeled grouping of related items in the command list. |
| "src/components/ai-elements/prompt-input::PromptInputCommandItem" | PromptInputCommandItem | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | A single selectable entry in the prompt input command list. |
| "src/components/ai-elements/prompt-input::PromptInputCommandSeparator" | PromptInputCommandSeparator | `src/components/ai-elements/prompt-input.tsx` |  | aria-expanded, hover, open | 0 | Visual divider between groups or items in the command list. |
| "src/components/ai-elements/shimmer::ShimmerComponent" | ShimmerComponent | `src/components/ai-elements/shimmer.tsx` |  |  | 0 | Animated shimmer treatment used as a loading or in-progress indicator in the AI elements. |
| "src/components/chat-cta::ChatCta" | ChatCta | `src/components/chat-cta.tsx` |  |  | 7 | Call-to-action block prompting the user to start a chat. |
| "src/components/page-hero::PageHero" | PageHero | `src/components/page-hero.tsx` |  |  | 6 | Large introductory banner placed at the top of a page. |
| "src/components/site-footer::SiteFooter" | SiteFooter | `src/components/site-footer.tsx` |  | hover | 1 | Site-wide footer shown at the bottom of pages. |
| "src/components/site-header::SiteHeader" | SiteHeader | `src/components/site-header.tsx` |  | hover | 1 | Site-wide header and top navigation shown across pages. |
| "src/components/ui/accordion::AccordionItem" | AccordionItem | `src/components/ui/accordion.tsx` |  | data-[state=closed], data-[state=open], hover | 0 | One collapsible section within an accordion. |
| "src/components/ui/accordion::AccordionTrigger" | AccordionTrigger | `src/components/ui/accordion.tsx` |  | data-[state=closed], data-[state=open], hover | 0 | Clickable heading that expands or collapses its accordion item. |
| "src/components/ui/accordion::AccordionContent" | AccordionContent | `src/components/ui/accordion.tsx` |  | data-[state=closed], data-[state=open], hover | 0 | Revealed body content of an expanded accordion item. |
| "src/components/ui/alert-dialog::AlertDialogOverlay" | AlertDialogOverlay | `src/components/ui/alert-dialog.tsx` |  | data-[state=closed], data-[state=open] | 0 | Backdrop layer that dims the page behind an alert dialog. |
| "src/components/ui/alert-dialog::AlertDialogContent" | AlertDialogContent | `src/components/ui/alert-dialog.tsx` |  | data-[state=closed], data-[state=open] | 0 | The modal panel of an alert dialog that holds its header, body and footer. |
| "src/components/ui/alert-dialog::AlertDialogHeader" | AlertDialogHeader | `src/components/ui/alert-dialog.tsx` |  | data-[state=closed], data-[state=open] | 0 | Top region of an alert dialog grouping title and description. |
| "src/components/ui/alert-dialog::AlertDialogFooter" | AlertDialogFooter | `src/components/ui/alert-dialog.tsx` |  | data-[state=closed], data-[state=open] | 0 | Bottom region of an alert dialog holding its action buttons. |
| "src/components/ui/alert-dialog::AlertDialogTitle" | AlertDialogTitle | `src/components/ui/alert-dialog.tsx` |  | data-[state=closed], data-[state=open] | 0 | Heading text of an alert dialog. |
| "src/components/ui/alert-dialog::AlertDialogDescription" | AlertDialogDescription | `src/components/ui/alert-dialog.tsx` |  | data-[state=closed], data-[state=open] | 0 | Supporting explanatory text in an alert dialog. |
| "src/components/ui/alert-dialog::AlertDialogAction" | AlertDialogAction | `src/components/ui/alert-dialog.tsx` |  | data-[state=closed], data-[state=open] | 0 | Button that confirms the alert dialog's primary action. |
| "src/components/ui/alert-dialog::AlertDialogCancel" | AlertDialogCancel | `src/components/ui/alert-dialog.tsx` |  | data-[state=closed], data-[state=open] | 0 | Button that dismisses the alert dialog without acting. |
| "src/components/ui/alert::Alert" | Alert | `src/components/ui/alert.tsx` | variant (2) | dark | 0 | Inline callout container for status or informational messages. |
| "src/components/ui/alert::AlertTitle" | AlertTitle | `src/components/ui/alert.tsx` |  | dark | 0 | Heading text of an inline alert. |
| "src/components/ui/alert::AlertDescription" | AlertDescription | `src/components/ui/alert.tsx` |  | dark | 0 | Body text of an inline alert. |
| "src/components/ui/avatar::Avatar" | Avatar | `src/components/ui/avatar.tsx` |  |  | 0 | Container for a user or entity avatar. |
| "src/components/ui/avatar::AvatarImage" | AvatarImage | `src/components/ui/avatar.tsx` |  |  | 0 | Image displayed within an avatar. |
| "src/components/ui/avatar::AvatarFallback" | AvatarFallback | `src/components/ui/avatar.tsx` |  |  | 0 | Fallback content shown when the avatar image is unavailable. |
| "src/components/ui/badge::Badge" | Badge | `src/components/ui/badge.tsx` | variant (4) | focus, hover | 0 | Small label for tagging or indicating status. |
| "src/components/ui/breadcrumb::Breadcrumb" | Breadcrumb | `src/components/ui/breadcrumb.tsx` |  | hover | 0 | Navigation landmark showing the user's location in the page hierarchy. |
| "src/components/ui/breadcrumb::BreadcrumbList" | BreadcrumbList | `src/components/ui/breadcrumb.tsx` |  | hover | 0 | Ordered list of breadcrumb items. |
| "src/components/ui/breadcrumb::BreadcrumbItem" | BreadcrumbItem | `src/components/ui/breadcrumb.tsx` |  | hover | 0 | A single step in the breadcrumb trail. |
| "src/components/ui/breadcrumb::BreadcrumbLink" | BreadcrumbLink | `src/components/ui/breadcrumb.tsx` |  | hover | 0 | Clickable link to an ancestor page within the breadcrumb. |
| "src/components/ui/breadcrumb::BreadcrumbPage" | BreadcrumbPage | `src/components/ui/breadcrumb.tsx` |  | hover | 0 | Non-interactive label for the current page in the breadcrumb. |
| "src/components/ui/breadcrumb::BreadcrumbSeparator" | BreadcrumbSeparator | `src/components/ui/breadcrumb.tsx` |  | hover | 0 | Visual divider placed between breadcrumb items in a navigation trail. |
| "src/components/ui/breadcrumb::BreadcrumbEllipsis" | BreadcrumbEllipsis | `src/components/ui/breadcrumb.tsx` |  | hover | 0 | Collapsed indicator standing in for hidden intermediate breadcrumb items. |
| "src/components/ui/button-group::ButtonGroup" | ButtonGroup | `src/components/ui/button-group.tsx` | orientation (2) | data-[orientation=vertical], focus-visible, has-[>[data-slot=button-group]], has-[select[aria-hidden=true]:last-child] | 1 | Container that visually joins a set of related buttons into one unit. |
| "src/components/ui/button-group::ButtonGroupText" | ButtonGroupText | `src/components/ui/button-group.tsx` |  | data-[orientation=vertical], focus-visible, has-[>[data-slot=button-group]], has-[select[aria-hidden=true]:last-child] | 1 | Non-interactive text segment rendered inline within a button group. |
| "src/components/ui/button-group::ButtonGroupSeparator" | ButtonGroupSeparator | `src/components/ui/button-group.tsx` |  | data-[orientation=vertical], focus-visible, has-[>[data-slot=button-group]], has-[select[aria-hidden=true]:last-child] | 0 | Divider between adjacent segments of a button group. |
| "src/components/ui/button::Button" | Button | `src/components/ui/button.tsx` | variant (9), size (9) | disabled, focus-visible, hover | 22 | Primary interactive control for triggering actions and submitting forms. |
| "src/components/ui/calendar::Calendar" | Calendar | `src/components/ui/calendar.tsx` |  | aria-disabled, aria-selected, data-[range-end=true], data-[range-middle=true], data-[range-start=true], data-[selected-single=true] | 0 | Month-grid date picker for viewing and selecting dates. |
| "src/components/ui/calendar::CalendarDayButton" | CalendarDayButton | `src/components/ui/calendar.tsx` |  | aria-disabled, aria-selected, data-[range-end=true], data-[range-middle=true], data-[range-start=true], data-[selected-single=true] | 0 | Individual selectable day cell used inside the calendar grid. |
| "src/components/ui/card::Card" | Card | `src/components/ui/card.tsx` |  |  | 0 | Surface container that groups related content into a bounded panel. |
| "src/components/ui/card::CardHeader" | CardHeader | `src/components/ui/card.tsx` |  |  | 0 | Top region of a card holding its title and description. |
| "src/components/ui/card::CardTitle" | CardTitle | `src/components/ui/card.tsx` |  |  | 0 | Heading text for a card. |
| "src/components/ui/card::CardDescription" | CardDescription | `src/components/ui/card.tsx` |  |  | 0 | Supporting text beneath a card title. |
| "src/components/ui/card::CardContent" | CardContent | `src/components/ui/card.tsx` |  |  | 0 | Main body region of a card. |
| "src/components/ui/card::CardFooter" | CardFooter | `src/components/ui/card.tsx` |  |  | 0 | Bottom region of a card, typically for actions. |
| "src/components/ui/carousel::Carousel" | Carousel | `src/components/ui/carousel.tsx` | orientation (2) |  | 0 | Root for a horizontally scrolling set of slides. |
| "src/components/ui/carousel::CarouselContent" | CarouselContent | `src/components/ui/carousel.tsx` |  |  | 0 | Scrollable track that holds carousel slides. |
| "src/components/ui/carousel::CarouselItem" | CarouselItem | `src/components/ui/carousel.tsx` |  |  | 0 | Single slide within a carousel. |
| "src/components/ui/carousel::CarouselPrevious" | CarouselPrevious | `src/components/ui/carousel.tsx` |  |  | 0 | Control that moves the carousel to the previous slide. |
| "src/components/ui/carousel::CarouselNext" | CarouselNext | `src/components/ui/carousel.tsx` |  |  | 0 | Control that moves the carousel to the next slide. |
| "src/components/ui/chart::ChartContainer" | ChartContainer | `src/components/ui/chart.tsx` | indicator (3) | dark | 0 | Wrapper that sizes a chart and supplies its series configuration and colors. |
| "src/components/ui/chart::ChartStyle" | ChartStyle | `src/components/ui/chart.tsx` |  | dark | 0 | Injects per-series color variables for a chart based on its configuration. |
| "src/components/ui/chart::ChartTooltipContent" | ChartTooltipContent | `src/components/ui/chart.tsx` |  | dark | 0 | Formatted tooltip body showing values for the hovered chart point. |
| "src/components/ui/chart::ChartLegendContent" | ChartLegendContent | `src/components/ui/chart.tsx` |  | dark | 0 | Legend listing chart series with their color swatches. |
| "src/components/ui/checkbox::Checkbox" | Checkbox | `src/components/ui/checkbox.tsx` |  | data-[state=checked], disabled, focus-visible | 0 | Binary toggle control for selecting an option. |
| "src/components/ui/command::Command" | Command | `src/components/ui/command.tsx` |  | data-[disabled=true], data-[selected=true], disabled, placeholder | 1 | Root of a keyboard-driven command palette with filtering. |
| "src/components/ui/command::CommandDialog" | CommandDialog | `src/components/ui/command.tsx` |  | data-[disabled=true], data-[selected=true], disabled, placeholder | 0 | Command palette presented inside a modal dialog. |
| "src/components/ui/command::CommandInput" | CommandInput | `src/components/ui/command.tsx` |  | data-[disabled=true], data-[selected=true], disabled, placeholder | 1 | Search field that filters command palette items. |
| "src/components/ui/command::CommandList" | CommandList | `src/components/ui/command.tsx` |  | data-[disabled=true], data-[selected=true], disabled, placeholder | 1 | Scrollable list of command palette results. |
| "src/components/ui/command::CommandEmpty" | CommandEmpty | `src/components/ui/command.tsx` |  | data-[disabled=true], data-[selected=true], disabled, placeholder | 1 | Message shown when no command items match the query. |
| "src/components/ui/command::CommandGroup" | CommandGroup | `src/components/ui/command.tsx` |  | data-[disabled=true], data-[selected=true], disabled, placeholder | 1 | Labeled grouping of related command items. |
| "src/components/ui/command::CommandSeparator" | CommandSeparator | `src/components/ui/command.tsx` |  | data-[disabled=true], data-[selected=true], disabled, placeholder | 1 | Divider between groups in a command list. |
| "src/components/ui/command::CommandItem" | CommandItem | `src/components/ui/command.tsx` |  | data-[disabled=true], data-[selected=true], disabled, placeholder | 1 | Selectable entry in the command palette. |
| "src/components/ui/command::CommandShortcut" | CommandShortcut | `src/components/ui/command.tsx` |  | data-[disabled=true], data-[selected=true], disabled, placeholder | 0 | Keyboard shortcut hint displayed alongside a command item. |
| "src/components/ui/context-menu::ContextMenuSubTrigger" | ContextMenuSubTrigger | `src/components/ui/context-menu.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Menu item that opens a nested submenu in a context menu. |
| "src/components/ui/context-menu::ContextMenuSubContent" | ContextMenuSubContent | `src/components/ui/context-menu.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Panel containing the items of a nested context submenu. |
| "src/components/ui/context-menu::ContextMenuContent" | ContextMenuContent | `src/components/ui/context-menu.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Floating panel holding the items of a right-click context menu. |
| "src/components/ui/context-menu::ContextMenuItem" | ContextMenuItem | `src/components/ui/context-menu.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Actionable entry within a context menu. |
| "src/components/ui/context-menu::ContextMenuCheckboxItem" | ContextMenuCheckboxItem | `src/components/ui/context-menu.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Context menu entry with a toggleable checked state. |
| "src/components/ui/context-menu::ContextMenuRadioItem" | ContextMenuRadioItem | `src/components/ui/context-menu.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Context menu entry for choosing one option from a mutually exclusive set. |
| "src/components/ui/context-menu::ContextMenuLabel" | ContextMenuLabel | `src/components/ui/context-menu.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Non-interactive heading for a section of a context menu. |
| "src/components/ui/context-menu::ContextMenuSeparator" | ContextMenuSeparator | `src/components/ui/context-menu.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Thin divider used to group items inside a right-click context menu. |
| "src/components/ui/context-menu::ContextMenuShortcut" | ContextMenuShortcut | `src/components/ui/context-menu.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Right-aligned hint text showing the keyboard shortcut for a context menu item. |
| "src/components/ui/dialog::DialogOverlay" | DialogOverlay | `src/components/ui/dialog.tsx` |  | data-[state=closed], data-[state=open], disabled, focus, hover | 0 | Full-screen backdrop rendered behind a modal dialog to dim the page and block interaction. |
| "src/components/ui/dialog::DialogContent" | DialogContent | `src/components/ui/dialog.tsx` |  | data-[state=closed], data-[state=open], disabled, focus, hover | 1 | The centered modal panel that holds a dialog's header, body and footer. |
| "src/components/ui/dialog::DialogHeader" | DialogHeader | `src/components/ui/dialog.tsx` |  | data-[state=closed], data-[state=open], disabled, focus, hover | 0 | Layout wrapper at the top of a dialog for its title and description. |
| "src/components/ui/dialog::DialogFooter" | DialogFooter | `src/components/ui/dialog.tsx` |  | data-[state=closed], data-[state=open], disabled, focus, hover | 0 | Layout wrapper at the bottom of a dialog for action buttons. |
| "src/components/ui/dialog::DialogTitle" | DialogTitle | `src/components/ui/dialog.tsx` |  | data-[state=closed], data-[state=open], disabled, focus, hover | 0 | Accessible heading for a dialog. |
| "src/components/ui/dialog::DialogDescription" | DialogDescription | `src/components/ui/dialog.tsx` |  | data-[state=closed], data-[state=open], disabled, focus, hover | 0 | Supporting text beneath a dialog title explaining its purpose. |
| "src/components/ui/drawer::Drawer" | Drawer | `src/components/ui/drawer.tsx` |  |  | 0 | Root for an edge-anchored sliding panel, the mobile-friendly counterpart to a dialog. |
| "src/components/ui/drawer::DrawerOverlay" | DrawerOverlay | `src/components/ui/drawer.tsx` |  |  | 0 | Backdrop rendered behind an open drawer. |
| "src/components/ui/drawer::DrawerContent" | DrawerContent | `src/components/ui/drawer.tsx` |  |  | 0 | The sliding panel surface of a drawer that contains its header, body and footer. |
| "src/components/ui/drawer::DrawerHeader" | DrawerHeader | `src/components/ui/drawer.tsx` |  |  | 0 | Layout wrapper at the top of a drawer for its title and description. |
| "src/components/ui/drawer::DrawerFooter" | DrawerFooter | `src/components/ui/drawer.tsx` |  |  | 0 | Layout wrapper at the bottom of a drawer for actions. |
| "src/components/ui/drawer::DrawerTitle" | DrawerTitle | `src/components/ui/drawer.tsx` |  |  | 0 | Accessible heading for a drawer. |
| "src/components/ui/drawer::DrawerDescription" | DrawerDescription | `src/components/ui/drawer.tsx` |  |  | 0 | Supporting text beneath a drawer title. |
| "src/components/ui/dropdown-menu::DropdownMenuSubTrigger" | DropdownMenuSubTrigger | `src/components/ui/dropdown-menu.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Menu item that opens a nested submenu on hover or focus. |
| "src/components/ui/dropdown-menu::DropdownMenuSubContent" | DropdownMenuSubContent | `src/components/ui/dropdown-menu.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Floating panel holding the items of a nested submenu. |
| "src/components/ui/dropdown-menu::DropdownMenuContent" | DropdownMenuContent | `src/components/ui/dropdown-menu.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 1 | The floating panel that appears when a dropdown menu is opened. |
| "src/components/ui/dropdown-menu::DropdownMenuItem" | DropdownMenuItem | `src/components/ui/dropdown-menu.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 3 | A single selectable action row inside a dropdown menu. |
| "src/components/ui/dropdown-menu::DropdownMenuCheckboxItem" | DropdownMenuCheckboxItem | `src/components/ui/dropdown-menu.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Menu item with a toggleable checked state for multi-select options. |
| "src/components/ui/dropdown-menu::DropdownMenuRadioItem" | DropdownMenuRadioItem | `src/components/ui/dropdown-menu.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Menu item that participates in a mutually exclusive radio group. |
| "src/components/ui/dropdown-menu::DropdownMenuLabel" | DropdownMenuLabel | `src/components/ui/dropdown-menu.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Non-interactive heading used to title a section of menu items. |
| "src/components/ui/dropdown-menu::DropdownMenuSeparator" | DropdownMenuSeparator | `src/components/ui/dropdown-menu.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Divider between groups of dropdown menu items. |
| "src/components/ui/dropdown-menu::DropdownMenuShortcut" | DropdownMenuShortcut | `src/components/ui/dropdown-menu.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Right-aligned keyboard shortcut hint for a dropdown menu item. |
| "src/components/ui/form::FormField" | FormField | `src/components/ui/form.tsx` |  |  | 0 | Binds a single form control to form state and provides field context to its children. |
| "src/components/ui/form::FormItem" | FormItem | `src/components/ui/form.tsx` |  |  | 0 | Vertical layout wrapper for one field's label, control, description and message. |
| "src/components/ui/form::FormLabel" | FormLabel | `src/components/ui/form.tsx` |  |  | 0 | Label associated with a form field, reflecting its error state. |
| "src/components/ui/form::FormControl" | FormControl | `src/components/ui/form.tsx` |  |  | 0 | Slot that wires accessibility attributes from the field onto the actual input element. |
| "src/components/ui/form::FormDescription" | FormDescription | `src/components/ui/form.tsx` |  |  | 0 | Helper text explaining what a form field expects. |
| "src/components/ui/form::FormMessage" | FormMessage | `src/components/ui/form.tsx` |  |  | 0 | Displays the validation error for a form field when present. |
| "src/components/ui/hover-card::HoverCardContent" | HoverCardContent | `src/components/ui/hover-card.tsx` |  | data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed], data-[state=open] | 1 | Floating preview panel revealed when hovering a trigger. |
| "src/components/ui/input-group::InputGroup" | InputGroup | `src/components/ui/input-group.tsx` |  | dark, focus-visible, group-data-[disabled=true]/input-group, group-has-[>input]/input-group, has-[>[data-align=block-end]], has-[>[data-align=block-start]] | 1 | Container that visually joins an input with addons such as text or buttons. |
| "src/components/ui/input-group::InputGroupAddon" | InputGroupAddon | `src/components/ui/input-group.tsx` | align (4) | dark, focus-visible, group-data-[disabled=true]/input-group, group-has-[>input]/input-group, has-[>[data-align=block-end]], has-[>[data-align=block-start]] | 2 | Leading or trailing slot inside an input group for icons, text or buttons. |
| "src/components/ui/input-group::InputGroupButton" | InputGroupButton | `src/components/ui/input-group.tsx` | size (4) | dark, focus-visible, group-data-[disabled=true]/input-group, group-has-[>input]/input-group, has-[>[data-align=block-end]], has-[>[data-align=block-start]] | 2 | Compact button styled to sit inside an input group addon. |
| "src/components/ui/input-group::InputGroupText" | InputGroupText | `src/components/ui/input-group.tsx` |  | dark, focus-visible, group-data-[disabled=true]/input-group, group-has-[>input]/input-group, has-[>[data-align=block-end]], has-[>[data-align=block-start]] | 0 | Static text placed inside an input group addon, such as a prefix or unit. |
| "src/components/ui/input-group::InputGroupInput" | InputGroupInput | `src/components/ui/input-group.tsx` |  | dark, focus-visible, group-data-[disabled=true]/input-group, group-has-[>input]/input-group, has-[>[data-align=block-end]], has-[>[data-align=block-start]] | 0 | Single-line text input styled to merge with its surrounding input group. |
| "src/components/ui/input-group::InputGroupTextarea" | InputGroupTextarea | `src/components/ui/input-group.tsx` |  | dark, focus-visible, group-data-[disabled=true]/input-group, group-has-[>input]/input-group, has-[>[data-align=block-end]], has-[>[data-align=block-start]] | 1 | Multi-line text input styled to merge with its surrounding input group. |
| "src/components/ui/input-otp::InputOTP" | InputOTP | `src/components/ui/input-otp.tsx` |  | disabled, first, has-[:disabled], last | 0 | Root for a segmented one-time-code entry field. |
| "src/components/ui/input-otp::InputOTPGroup" | InputOTPGroup | `src/components/ui/input-otp.tsx` |  | disabled, first, has-[:disabled], last | 0 | Groups adjacent OTP slots into a visual cluster. |
| "src/components/ui/input-otp::InputOTPSlot" | InputOTPSlot | `src/components/ui/input-otp.tsx` |  | disabled, first, has-[:disabled], last | 0 | One character cell of the OTP input, showing its digit and active caret. |
| "src/components/ui/input-otp::InputOTPSeparator" | InputOTPSeparator | `src/components/ui/input-otp.tsx` |  | disabled, first, has-[:disabled], last | 0 | Visual divider placed between groups of one-time-passcode input slots. |
| "src/components/ui/input::Input" | Input | `src/components/ui/input.tsx` |  | disabled, file, focus-visible, placeholder | 5 | Single-line text field; the base control for free-text entry in forms. |
| "src/components/ui/label::Label" | Label | `src/components/ui/label.tsx` |  | peer-disabled | 1 | Accessible caption associated with a form control. |
| "src/components/ui/menubar::MenubarMenu" | MenubarMenu | `src/components/ui/menubar.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Wraps one top-level menu (trigger plus content) inside a menubar. |
| "src/components/ui/menubar::MenubarGroup" | MenubarGroup | `src/components/ui/menubar.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Groups related items within a menubar menu. |
| "src/components/ui/menubar::MenubarPortal" | MenubarPortal | `src/components/ui/menubar.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Renders menubar content outside the DOM hierarchy to avoid clipping. |
| "src/components/ui/menubar::MenubarRadioGroup" | MenubarRadioGroup | `src/components/ui/menubar.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Container for mutually exclusive radio items in a menubar menu. |
| "src/components/ui/menubar::MenubarSub" | MenubarSub | `src/components/ui/menubar.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Wraps a nested submenu inside a menubar menu. |
| "src/components/ui/menubar::Menubar" | Menubar | `src/components/ui/menubar.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Horizontal application-style bar holding multiple dropdown menus. |
| "src/components/ui/menubar::MenubarTrigger" | MenubarTrigger | `src/components/ui/menubar.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Top-level button in the menubar that opens its menu. |
| "src/components/ui/menubar::MenubarSubTrigger" | MenubarSubTrigger | `src/components/ui/menubar.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Item that opens a nested submenu on hover or selection. |
| "src/components/ui/menubar::MenubarSubContent" | MenubarSubContent | `src/components/ui/menubar.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Floating panel holding the items of a nested submenu. |
| "src/components/ui/menubar::MenubarContent" | MenubarContent | `src/components/ui/menubar.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Floating panel holding the items of a top-level menubar menu. |
| "src/components/ui/menubar::MenubarItem" | MenubarItem | `src/components/ui/menubar.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Selectable action row within a menubar menu. |
| "src/components/ui/menubar::MenubarCheckboxItem" | MenubarCheckboxItem | `src/components/ui/menubar.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Toggleable menu row that shows a checked state. |
| "src/components/ui/menubar::MenubarRadioItem" | MenubarRadioItem | `src/components/ui/menubar.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Menu row representing one option in a radio group. |
| "src/components/ui/menubar::MenubarLabel" | MenubarLabel | `src/components/ui/menubar.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Non-interactive heading text within a menubar menu. |
| "src/components/ui/menubar::MenubarSeparator" | MenubarSeparator | `src/components/ui/menubar.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Horizontal rule dividing sections of a menubar menu. |
| "src/components/ui/menubar::MenubarShortcut" | MenubarShortcut | `src/components/ui/menubar.tsx` |  | data-[disabled], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 0 | Right-aligned keyboard shortcut hint on a menu item. |
| "src/components/ui/navigation-menu::NavigationMenu" | NavigationMenu | `src/components/ui/navigation-menu.tsx` |  | data-[motion=from-end], data-[motion=from-start], data-[motion=to-end], data-[motion=to-start], data-[motion^=from-], data-[motion^=to-] | 0 | Root of a site-level navigation bar with expandable panels. |
| "src/components/ui/navigation-menu::NavigationMenuList" | NavigationMenuList | `src/components/ui/navigation-menu.tsx` |  | data-[motion=from-end], data-[motion=from-start], data-[motion=to-end], data-[motion=to-start], data-[motion^=from-], data-[motion^=to-] | 0 | Horizontal list that lays out navigation menu items. |
| "src/components/ui/navigation-menu::NavigationMenuTrigger" | NavigationMenuTrigger | `src/components/ui/navigation-menu.tsx` |  | data-[motion=from-end], data-[motion=from-start], data-[motion=to-end], data-[motion=to-start], data-[motion^=from-], data-[motion^=to-] | 0 | Button that reveals a navigation panel, typically with a chevron indicator. |
| "src/components/ui/navigation-menu::NavigationMenuContent" | NavigationMenuContent | `src/components/ui/navigation-menu.tsx` |  | data-[motion=from-end], data-[motion=from-start], data-[motion=to-end], data-[motion=to-start], data-[motion^=from-], data-[motion^=to-] | 0 | Panel of links or content shown when a navigation trigger is active. |
| "src/components/ui/navigation-menu::NavigationMenuViewport" | NavigationMenuViewport | `src/components/ui/navigation-menu.tsx` |  | data-[motion=from-end], data-[motion=from-start], data-[motion=to-end], data-[motion=to-start], data-[motion^=from-], data-[motion^=to-] | 0 | Shared container that animates and sizes the active navigation panel. |
| "src/components/ui/navigation-menu::NavigationMenuIndicator" | NavigationMenuIndicator | `src/components/ui/navigation-menu.tsx` |  | data-[motion=from-end], data-[motion=from-start], data-[motion=to-end], data-[motion=to-start], data-[motion^=from-], data-[motion^=to-] | 0 | Small pointer that marks which navigation trigger is currently open. |
| "src/components/ui/pagination::Pagination" | Pagination | `src/components/ui/pagination.tsx` |  |  | 0 | Navigation landmark wrapping a set of page controls. |
| "src/components/ui/pagination::PaginationContent" | PaginationContent | `src/components/ui/pagination.tsx` |  |  | 0 | List that arranges the individual pagination items in a row. |
| "src/components/ui/pagination::PaginationItem" | PaginationItem | `src/components/ui/pagination.tsx` |  |  | 0 | List item wrapper for a single pagination control. |
| "src/components/ui/pagination::PaginationLink" | PaginationLink | `src/components/ui/pagination.tsx` |  |  | 0 | Clickable page number, with an active state for the current page. |
| "src/components/ui/pagination::PaginationPrevious" | PaginationPrevious | `src/components/ui/pagination.tsx` |  |  | 0 | Link to the previous page, with a leading chevron. |
| "src/components/ui/pagination::PaginationNext" | PaginationNext | `src/components/ui/pagination.tsx` |  |  | 0 | Link to the next page, with a trailing chevron. |
| "src/components/ui/pagination::PaginationEllipsis" | PaginationEllipsis | `src/components/ui/pagination.tsx` |  |  | 0 | Placeholder indicating omitted page numbers in a long range. |
| "src/components/ui/popover::PopoverContent" | PopoverContent | `src/components/ui/popover.tsx` |  | data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed], data-[state=open] | 0 | Floating panel anchored to a trigger for contextual content or controls. |
| "src/components/ui/progress::Progress" | Progress | `src/components/ui/progress.tsx` |  |  | 0 | Horizontal bar showing completion of a task or loading state. |
| "src/components/ui/radio-group::RadioGroup" | RadioGroup | `src/components/ui/radio-group.tsx` |  | disabled, focus, focus-visible | 0 | Container for a set of mutually exclusive radio options. |
| "src/components/ui/radio-group::RadioGroupItem" | RadioGroupItem | `src/components/ui/radio-group.tsx` |  | disabled, focus, focus-visible | 0 | Individual selectable radio button within a group. |
| "src/components/ui/resizable::ResizablePanelGroup" | ResizablePanelGroup | `src/components/ui/resizable.tsx` |  | after, data-[panel-group-direction=vertical], focus-visible | 0 | Layout container holding panels that users can resize by dragging. |
| "src/components/ui/resizable::ResizableHandle" | ResizableHandle | `src/components/ui/resizable.tsx` |  | after, data-[panel-group-direction=vertical], focus-visible | 0 | Draggable divider between resizable panels, optionally with a grip. |
| "src/components/ui/scroll-area::ScrollArea" | ScrollArea | `src/components/ui/scroll-area.tsx` |  |  | 0 | Scrollable region with custom-styled scrollbars replacing native ones. |
| "src/components/ui/scroll-area::ScrollBar" | ScrollBar | `src/components/ui/scroll-area.tsx` |  |  | 0 | Styled vertical or horizontal scrollbar used inside a scroll area. |
| "src/components/ui/select::SelectTrigger" | SelectTrigger | `src/components/ui/select.tsx` |  | data-[disabled], data-[placeholder], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top] | 2 | The clickable control that displays the current selection and opens the select dropdown. |
| "src/components/ui/select::SelectScrollUpButton" | SelectScrollUpButton | `src/components/ui/select.tsx` |  | data-[disabled], data-[placeholder], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top] | 0 | Affordance shown at the top of a long select list to scroll its options upward. |
| "src/components/ui/select::SelectScrollDownButton" | SelectScrollDownButton | `src/components/ui/select.tsx` |  | data-[disabled], data-[placeholder], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top] | 0 | Affordance shown at the bottom of a long select list to scroll its options downward. |
| "src/components/ui/select::SelectContent" | SelectContent | `src/components/ui/select.tsx` |  | data-[disabled], data-[placeholder], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top] | 2 | The floating popover panel that holds the select's options when open. |
| "src/components/ui/select::SelectLabel" | SelectLabel | `src/components/ui/select.tsx` |  | data-[disabled], data-[placeholder], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top] | 0 | A non-interactive heading used to title a group of options inside the select. |
| "src/components/ui/select::SelectItem" | SelectItem | `src/components/ui/select.tsx` |  | data-[disabled], data-[placeholder], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top] | 2 | A single selectable option row within the select content. |
| "src/components/ui/select::SelectSeparator" | SelectSeparator | `src/components/ui/select.tsx` |  | data-[disabled], data-[placeholder], data-[side=bottom], data-[side=left], data-[side=right], data-[side=top] | 0 | A thin divider separating groups of options inside the select. |
| "src/components/ui/separator::Separator" | Separator | `src/components/ui/separator.tsx` |  |  | 3 | A general-purpose horizontal or vertical rule for visually dividing content. |
| "src/components/ui/sheet::SheetOverlay" | SheetOverlay | `src/components/ui/sheet.tsx` | side (4) | data-[state=closed], data-[state=open], disabled, focus, hover | 0 | The dimmed backdrop rendered behind an open sheet to focus attention and block interaction with the page. |
| "src/components/ui/sheet::SheetContent" | SheetContent | `src/components/ui/sheet.tsx` |  | data-[state=closed], data-[state=open], disabled, focus, hover | 1 | The sliding panel of the sheet that contains its body and is anchored to a screen edge. |
| "src/components/ui/sheet::SheetHeader" | SheetHeader | `src/components/ui/sheet.tsx` |  | data-[state=closed], data-[state=open], disabled, focus, hover | 1 | Layout wrapper for the top region of a sheet, typically holding the title and description. |
| "src/components/ui/sheet::SheetFooter" | SheetFooter | `src/components/ui/sheet.tsx` |  | data-[state=closed], data-[state=open], disabled, focus, hover | 0 | Layout wrapper for the bottom region of a sheet, typically holding actions. |
| "src/components/ui/sheet::SheetTitle" | SheetTitle | `src/components/ui/sheet.tsx` |  | data-[state=closed], data-[state=open], disabled, focus, hover | 1 | The accessible heading of a sheet. |
| "src/components/ui/sheet::SheetDescription" | SheetDescription | `src/components/ui/sheet.tsx` |  | data-[state=closed], data-[state=open], disabled, focus, hover | 1 | Supporting text beneath the sheet title explaining the panel's purpose. |
| "src/components/ui/sidebar::SidebarProvider" | SidebarProvider | `src/components/ui/sidebar.tsx` | state (2), side (2), variant (3), collapsible (3), size (2) | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | Context provider that manages sidebar open/collapsed state and must wrap the sidebar and its page content. |
| "src/components/ui/sidebar::Sidebar" | Sidebar | `src/components/ui/sidebar.tsx` |  | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | The main navigation sidebar container of the app shell. |
| "src/components/ui/sidebar::SidebarTrigger" | SidebarTrigger | `src/components/ui/sidebar.tsx` |  | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | A button that toggles the sidebar open or closed. |
| "src/components/ui/sidebar::SidebarRail" | SidebarRail | `src/components/ui/sidebar.tsx` |  | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | A slim edge strip alongside the sidebar that can be clicked to toggle it. |
| "src/components/ui/sidebar::SidebarInset" | SidebarInset | `src/components/ui/sidebar.tsx` |  | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | The main content area that sits beside the sidebar and adjusts to its width. |
| "src/components/ui/sidebar::SidebarInput" | SidebarInput | `src/components/ui/sidebar.tsx` |  | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | A text input styled for use inside the sidebar, such as for search or filtering. |
| "src/components/ui/sidebar::SidebarHeader" | SidebarHeader | `src/components/ui/sidebar.tsx` |  | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | The top section of the sidebar, typically for branding or a primary control. |
| "src/components/ui/sidebar::SidebarFooter" | SidebarFooter | `src/components/ui/sidebar.tsx` |  | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | The bottom section of the sidebar, typically for account or secondary controls. |
| "src/components/ui/sidebar::SidebarSeparator" | SidebarSeparator | `src/components/ui/sidebar.tsx` |  | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | A divider between sections within the sidebar. |
| "src/components/ui/sidebar::SidebarContent" | SidebarContent | `src/components/ui/sidebar.tsx` |  | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | The scrollable middle region of the sidebar that holds navigation groups. |
| "src/components/ui/sidebar::SidebarGroup" | SidebarGroup | `src/components/ui/sidebar.tsx` |  | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | A labeled section grouping related navigation items in the sidebar. |
| "src/components/ui/sidebar::SidebarGroupLabel" | SidebarGroupLabel | `src/components/ui/sidebar.tsx` |  | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | The heading text for a sidebar group. |
| "src/components/ui/sidebar::SidebarGroupAction" | SidebarGroupAction | `src/components/ui/sidebar.tsx` |  | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | A small action button placed in a sidebar group's header. |
| "src/components/ui/sidebar::SidebarGroupContent" | SidebarGroupContent | `src/components/ui/sidebar.tsx` |  | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | Wrapper for the items inside a sidebar group. |
| "src/components/ui/sidebar::SidebarMenu" | SidebarMenu | `src/components/ui/sidebar.tsx` |  | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | A list container for navigation items within the sidebar. |
| "src/components/ui/sidebar::SidebarMenuItem" | SidebarMenuItem | `src/components/ui/sidebar.tsx` |  | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | A single list entry in a sidebar menu. |
| "src/components/ui/sidebar::SidebarMenuButton" | SidebarMenuButton | `src/components/ui/sidebar.tsx` | variant (2), size (3) | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | The primary clickable navigation control inside a sidebar menu item. |
| "src/components/ui/sidebar::SidebarMenuAction" | SidebarMenuAction | `src/components/ui/sidebar.tsx` |  | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | A secondary action button attached to a sidebar menu item. |
| "src/components/ui/sidebar::SidebarMenuBadge" | SidebarMenuBadge | `src/components/ui/sidebar.tsx` |  | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | A small count or status indicator displayed on a sidebar menu item. |
| "src/components/ui/sidebar::SidebarMenuSkeleton" | SidebarMenuSkeleton | `src/components/ui/sidebar.tsx` |  | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | A loading placeholder that mimics a sidebar menu item while data is pending. |
| "src/components/ui/sidebar::SidebarMenuSub" | SidebarMenuSub | `src/components/ui/sidebar.tsx` |  | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | A nested list for child navigation items beneath a menu item. |
| "src/components/ui/sidebar::SidebarMenuSubItem" | SidebarMenuSubItem | `src/components/ui/sidebar.tsx` |  | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | A single entry within a nested sidebar sub-menu. |
| "src/components/ui/sidebar::SidebarMenuSubButton" | SidebarMenuSubButton | `src/components/ui/sidebar.tsx` |  | active, after, aria-disabled, data-[active=true], data-[state=open], disabled | 0 | The clickable control for a nested sub-menu entry. |
| "src/components/ui/skeleton::Skeleton" | Skeleton | `src/components/ui/skeleton.tsx` |  |  | 2 | A generic animated placeholder block used to indicate loading content. |
| "src/components/ui/slider::Slider" | Slider | `src/components/ui/slider.tsx` |  | disabled, focus-visible | 0 | A range input for selecting a numeric value or range by dragging a thumb along a track. |
| "src/components/ui/sonner::Toaster" | Toaster | `src/components/ui/sonner.tsx` |  | group-[.toast], group-[.toaster] | 0 | The toast notification host that renders transient status messages. |
| "src/components/ui/spinner::Spinner" | Spinner | `src/components/ui/spinner.tsx` |  |  | 1 | Indicates an in-progress or loading state. |
| "src/components/ui/switch::Switch" | Switch | `src/components/ui/switch.tsx` |  | data-[state=checked], data-[state=unchecked], disabled, focus-visible | 0 | A binary on/off control for toggling a setting. |
| "src/components/ui/table::Table" | Table | `src/components/ui/table.tsx` |  | data-[state=selected], hover, last | 0 | Root container for tabular data. |
| "src/components/ui/table::TableHeader" | TableHeader | `src/components/ui/table.tsx` |  | data-[state=selected], hover, last | 0 | Groups the header row(s) of a table. |
| "src/components/ui/table::TableBody" | TableBody | `src/components/ui/table.tsx` |  | data-[state=selected], hover, last | 0 | Groups the data rows of a table. |
| "src/components/ui/table::TableFooter" | TableFooter | `src/components/ui/table.tsx` |  | data-[state=selected], hover, last | 0 | Groups the footer row(s) of a table, such as totals or summaries. |
| "src/components/ui/table::TableRow" | TableRow | `src/components/ui/table.tsx` |  | data-[state=selected], hover, last | 0 | A single row within a table section. |
| "src/components/ui/table::TableHead" | TableHead | `src/components/ui/table.tsx` |  | data-[state=selected], hover, last | 0 | A header cell labeling a table column. |
| "src/components/ui/table::TableCell" | TableCell | `src/components/ui/table.tsx` |  | data-[state=selected], hover, last | 0 | A data cell within a table row. |
| "src/components/ui/table::TableCaption" | TableCaption | `src/components/ui/table.tsx` |  | data-[state=selected], hover, last | 0 | A caption describing the table's contents. |
| "src/components/ui/tabs::TabsList" | TabsList | `src/components/ui/tabs.tsx` |  | data-[state=active], disabled, focus-visible | 0 | Container holding the set of tab triggers. |
| "src/components/ui/tabs::TabsTrigger" | TabsTrigger | `src/components/ui/tabs.tsx` |  | data-[state=active], disabled, focus-visible | 0 | The clickable tab that activates its associated content panel. |
| "src/components/ui/tabs::TabsContent" | TabsContent | `src/components/ui/tabs.tsx` |  | data-[state=active], disabled, focus-visible | 0 | The panel shown when its corresponding tab is active. |
| "src/components/ui/textarea::Textarea" | Textarea | `src/components/ui/textarea.tsx` |  | disabled, focus-visible, placeholder | 1 | Multi-line text input for longer free-form entry. |
| "src/components/ui/toggle-group::ToggleGroup" | ToggleGroup | `src/components/ui/toggle-group.tsx` |  |  | 0 | Groups related toggle items into a single selectable set. |
| "src/components/ui/toggle-group::ToggleGroupItem" | ToggleGroupItem | `src/components/ui/toggle-group.tsx` |  |  | 0 | An individual selectable option within a toggle group. |
| "src/components/ui/toggle::Toggle" | Toggle | `src/components/ui/toggle.tsx` | variant (2), size (3) | data-[state=on], disabled, focus-visible, hover | 0 | A standalone pressed/unpressed button for toggling a state. |
| "src/components/ui/tooltip::TooltipContent" | TooltipContent | `src/components/ui/tooltip.tsx` |  | data-[side=bottom], data-[side=left], data-[side=right], data-[side=top], data-[state=closed] | 3 | The floating content shown when a tooltip is triggered. |
| "src/routes/__root::NotFoundComponent" | NotFoundComponent | `src/routes/__root.tsx` |  | hover | 0 | View rendered when a route does not match any page. |
| "src/routes/__root::ErrorComponent" | ErrorComponent | `src/routes/__root.tsx` |  | hover | 0 | View rendered when a route throws an error. |
| "src/routes/__root::RootShell" | RootShell | `src/routes/__root.tsx` |  | hover | 0 | Outer layout shell wrapping all routed pages. |
| "src/routes/__root::RootComponent" | RootComponent | `src/routes/__root.tsx` |  | hover | 0 | Root route component that mounts the shell and renders child routes. |
| "src/routes/_authenticated/chat::ChatPage" | ChatPage | `src/routes/_authenticated/chat.tsx` | role (2) | group-[.is-user], hover | 0 | Authenticated chat page. |
| "src/routes/_authenticated/planner::PlannerPage" | PlannerPage | `src/routes/_authenticated/planner.tsx` |  | hover | 0 | Authenticated planner page. |
| "src/routes/auth::AuthPage" | AuthPage | `src/routes/auth.tsx` | provider (2) | hover | 0 | Sign-in / authentication page. |
| "src/routes/auth::GoogleIcon" | GoogleIcon | `src/routes/auth.tsx` |  | hover | 0 | Google logo icon used on the authentication page. |
| "src/routes/cities.$slug::CityPage" | CityPage | `src/routes/cities.$slug.tsx` |  | group-hover, hover | 0 | Detail page for a single city, selected by slug. |
| "src/routes/cities.index::CitiesPage" | CitiesPage | `src/routes/cities.index.tsx` |  | group-hover, hover | 0 | Index page listing cities. |
| "src/routes/currency::CurrencyPage" | CurrencyPage | `src/routes/currency.tsx` |  |  | 0 | Currency page. |
| "src/routes/currency::CurrencySelect" | CurrencySelect | `src/routes/currency.tsx` |  |  | 0 | Selector for choosing a currency on the currency page. |
| "src/routes/history::HistoryPage" | HistoryPage | `src/routes/history.tsx` |  | last | 0 | History page. |
| "src/routes/index::Index" | Index | `src/routes/index.tsx` |  | group-hover, hover | 0 | Landing / home page at the root route. |
| "src/routes/people::PeoplePage" | PeoplePage | `src/routes/people.tsx` |  |  | 0 | People page. |
| "src/routes/visa::VisaPage" | VisaPage | `src/routes/visa.tsx` |  | hover | 0 | Visa page. |

### Variants, in full

#### Button (`src/components/ui/button.tsx`:50)

Always applied: `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `variant` | `default` _(default)_ | `bg-primary text-primary-foreground shadow hover:bg-primary/90` | 0 |
| `variant` | `destructive` | `bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90` | 0 |
| `variant` | `outline` | `border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground` | 4 |
| `variant` | `secondary` | `bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80` | 0 |
| `variant` | `ghost` | `hover:bg-accent hover:text-accent-foreground` | 8 |
| `variant` | `link` | `text-primary underline-offset-4 hover:underline` | 0 |
| `variant` | `hero` | `bg-gradient-red text-primary-foreground shadow-lift hover:brightness-110 rounded-full` | 3 |
| `variant` | `inverse` | `bg-primary-foreground text-primary shadow-card hover:bg-primary-soft rounded-full` | 1 |
| `variant` | `glass` | `border border-overlay-foreground/40 bg-overlay-foreground/10 text-overlay-foreground backdrop-blur hover:bg-overlay-foreground/20 rounded-full` | 1 |
| `size` | `default` _(default)_ | `h-9 px-4 py-2` | 0 |
| `size` | `xs` | `h-7 rounded-md px-2 text-xs` | 0 |
| `size` | `sm` | `h-8 rounded-md px-3 text-xs` | 3 |
| `size` | `lg` | `h-10 rounded-md px-8` | 0 |
| `size` | `xl` | `h-12 px-7 text-base` | 5 |
| `size` | `icon` | `h-9 w-9` | 5 |
| `size` | `icon-xs` | `h-6 w-6` | 0 |
| `size` | `icon-sm` | `h-8 w-8` | 3 |
| `size` | `icon-lg` | `h-10 w-10` | 1 |

States targeted in this file: `disabled`, `focus-visible`, `hover`

Rendered 22 time(s) in 13 other file(s).

#### InputGroupAddon (`src/components/ui/input-group.tsx`:62)

Always applied: `text-muted-foreground flex h-auto cursor-text select-none items-center justify-center gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4`

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `align` | `inline-start` _(default)_ | `order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]` | 0 |
| `align` | `inline-end` | `order-last pr-3 has-[>button]:mr-[-0.4rem] has-[>kbd]:mr-[-0.35rem]` | 0 |
| `align` | `block-start` | `[.border-b]:pb-3 order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-2.5` | 0 |
| `align` | `block-end` | `[.border-t]:pt-3 order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-2.5` | 2 |

States targeted in this file: `dark`, `focus-visible`, "group-data-[disabled=true]/input-group", "group-has-[>input]/input-group", `has-[>[data-align=block-end]]`, `has-[>[data-align=block-start]]`, `has-[>[data-align=inline-end]]`, `has-[>[data-align=inline-start]]`, `has-[>button]`, `has-[>kbd]`, `has-[>svg]`, `has-[>textarea]`, `has-[[data-slot=input-group-control]:focus-visible]`, `has-[[data-slot][aria-invalid=true]]`

Rendered 2 time(s) in 1 other file(s).

#### InputGroupButton (`src/components/ui/input-group.tsx`:103)

Always applied: `flex items-center gap-2 text-sm shadow-none`

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `size` | `xs` _(default)_ | `h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-2 has-[>svg]:px-2 [&>svg:not([class*='size-'])]:size-3.5` | 0 |
| `size` | `sm` | `h-8 gap-1.5 rounded-md px-2.5 has-[>svg]:px-2.5` | 0 |
| `size` | `icon-xs` | `size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0` | 0 |
| `size` | `icon-sm` | `size-8 p-0 has-[>svg]:p-0` | 0 |

States targeted in this file: `dark`, `focus-visible`, "group-data-[disabled=true]/input-group", "group-has-[>input]/input-group", `has-[>[data-align=block-end]]`, `has-[>[data-align=block-start]]`, `has-[>[data-align=inline-end]]`, `has-[>[data-align=inline-start]]`, `has-[>button]`, `has-[>kbd]`, `has-[>svg]`, `has-[>textarea]`, `has-[[data-slot=input-group-control]:focus-visible]`, `has-[[data-slot][aria-invalid=true]]`

Rendered 2 time(s) in 1 other file(s).

#### ButtonGroup (`src/components/ui/button-group.tsx`:25)

Always applied: `flex w-fit items-stretch has-[>[data-slot=button-group]]:gap-2 [&>*]:focus-visible:relative [&>*]:focus-visible:z-10 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1`

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `orientation` | `horizontal` _(default)_ | `[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none` | 1 |
| `orientation` | `vertical` | `flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none` | 0 |

States targeted in this file: `data-[orientation=vertical]`, `focus-visible`, `has-[>[data-slot=button-group]]`, `has-[select[aria-hidden=true]:last-child]`

Rendered 1 time(s) in 1 other file(s).

#### Alert (`src/components/ui/alert.tsx`:23)

Always applied: `relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7`

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `variant` | `default` _(default)_ | `bg-background text-foreground` | 0 |
| `variant` | `destructive` | `border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive` | 0 |

States targeted in this file: `dark`

Rendered 0 time(s) in 0 other file(s).

#### AuthPage (`src/routes/auth.tsx`:42)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `provider` | `google` | _declared by the prop type only_ | 0 |
| `provider` | `lovable` | _declared by the prop type only_ | 0 |

States targeted in this file: `hover`

1 conditional class branch(es) in this file are not a named variant.

Rendered 0 time(s) in 0 other file(s).

#### Badge (`src/components/ui/badge.tsx`:29)

Always applied: `inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `variant` | `default` _(default)_ | `border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80` | 0 |
| `variant` | `secondary` | `border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80` | 0 |
| `variant` | `destructive` | `border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80` | 0 |
| `variant` | `outline` | `text-foreground` | 0 |

States targeted in this file: `focus`, `hover`

Rendered 0 time(s) in 0 other file(s).

#### Carousel (`src/components/ui/carousel.tsx`:42)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `orientation` | `horizontal` | _declared by the prop type only_ | 0 |
| `orientation` | `vertical` | _declared by the prop type only_ | 0 |

4 conditional class branch(es) in this file are not a named variant.

Rendered 0 time(s) in 0 other file(s).

#### ChartContainer (`src/components/ui/chart.tsx`:36)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `indicator` | `line` | _declared by the prop type only_ | 0 |
| `indicator` | `dot` | _declared by the prop type only_ | 0 |
| `indicator` | `dashed` | _declared by the prop type only_ | 0 |

States targeted in this file: `dark`

2 conditional class branch(es) in this file are not a named variant.

Rendered 0 time(s) in 0 other file(s).

#### ChatPage (`src/routes/_authenticated/chat.tsx`:58)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `role` | `user` | _declared by the prop type only_ | 0 |
| `role` | `assistant` | _declared by the prop type only_ | 0 |

States targeted in this file: `group-[.is-user]`, `hover`

Rendered 0 time(s) in 0 other file(s).

#### PromptInputProvider (`src/components/ai-elements/prompt-input.tsx`:249)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `code` | `max_files` | _declared by the prop type only_ | 0 |
| `code` | `max_file_size` | _declared by the prop type only_ | 0 |
| `code` | `accept` | _declared by the prop type only_ | 0 |

States targeted in this file: `aria-expanded`, `hover`, `open`

1 conditional class branch(es) in this file are not a named variant.

Rendered 0 time(s) in 0 other file(s).

#### SheetOverlay (`src/components/ui/sheet.tsx`:19)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `side` | `top` | `inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top` | 0 |
| `side` | `bottom` | `inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom` | 0 |
| `side` | `left` | `inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm` | 0 |
| `side` | `right` _(default)_ | `inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm` | 0 |

States targeted in this file: `data-[state=closed]`, `data-[state=open]`, `disabled`, `focus`, `hover`

Rendered 0 time(s) in 0 other file(s).

#### SidebarMenuButton (`src/components/ui/sidebar.tsx`:542)

Always applied: `peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring cursor-pointer transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0`

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `variant` | `default` _(default)_ | `hover:bg-sidebar-accent hover:text-sidebar-accent-foreground` | 0 |
| `variant` | `outline` | `bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]` | 0 |
| `size` | `default` _(default)_ | `h-8 text-sm` | 0 |
| `size` | `sm` | `h-7 text-xs` | 0 |
| `size` | `lg` | `h-12 text-sm group-data-[collapsible=icon]:!p-0` | 0 |

States targeted in this file: `active`, `after`, `aria-disabled`, `data-[active=true]`, `data-[state=open]`, `disabled`, `focus-visible`, `group-data-[collapsible=icon]`, `group-data-[collapsible=offcanvas]`, `group-data-[side=left]`, `group-data-[side=right]`, `group-data-[variant=floating]`, "group-focus-within/menu-item", "group-has-[[data-sidebar=menu-action]]/menu-item", "group-hover/menu-item", `has-[[data-variant=inset]]`, `hover`, `open`, "peer-data-[active=true]/menu-button", "peer-data-[size=default]/menu-button", "peer-data-[size=lg]/menu-button", "peer-data-[size=sm]/menu-button", `peer-data-[state=collapsed]`, `peer-data-[variant=inset]`, "peer-hover/menu-button"

Rendered 0 time(s) in 0 other file(s).

#### SidebarProvider (`src/components/ui/sidebar.tsx`:50)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `state` | `expanded` | _declared by the prop type only_ | 0 |
| `state` | `collapsed` | _declared by the prop type only_ | 0 |
| `side` | `left` | _declared by the prop type only_ | 0 |
| `side` | `right` | _declared by the prop type only_ | 0 |
| `variant` | `sidebar` | _declared by the prop type only_ | 0 |
| `variant` | `floating` | _declared by the prop type only_ | 0 |
| `variant` | `inset` | _declared by the prop type only_ | 0 |
| `collapsible` | `offcanvas` | _declared by the prop type only_ | 0 |
| `collapsible` | `icon` | _declared by the prop type only_ | 0 |
| `collapsible` | `none` | _declared by the prop type only_ | 0 |
| `size` | `sm` | _declared by the prop type only_ | 0 |
| `size` | `md` | _declared by the prop type only_ | 0 |

States targeted in this file: `active`, `after`, `aria-disabled`, `data-[active=true]`, `data-[state=open]`, `disabled`, `focus-visible`, `group-data-[collapsible=icon]`, `group-data-[collapsible=offcanvas]`, `group-data-[side=left]`, `group-data-[side=right]`, `group-data-[variant=floating]`, "group-focus-within/menu-item", "group-has-[[data-sidebar=menu-action]]/menu-item", "group-hover/menu-item", `has-[[data-variant=inset]]`, `hover`, `open`, "peer-data-[active=true]/menu-button", "peer-data-[size=default]/menu-button", "peer-data-[size=lg]/menu-button", "peer-data-[size=sm]/menu-button", `peer-data-[state=collapsed]`, `peer-data-[variant=inset]`, "peer-hover/menu-button"

Rendered 0 time(s) in 0 other file(s).

#### Toggle (`src/components/ui/toggle.tsx`:30)

Always applied: `inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium cursor-pointer transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `variant` | `default` _(default)_ | `bg-transparent` | 0 |
| `variant` | `outline` | `border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground` | 0 |
| `size` | `default` _(default)_ | `h-9 px-2 min-w-9` | 0 |
| `size` | `sm` | `h-8 px-1.5 min-w-8` | 0 |
| `size` | `lg` | `h-10 px-2.5 min-w-10` | 0 |

States targeted in this file: `data-[state=on]`, `disabled`, `focus-visible`, `hover`

Rendered 0 time(s) in 0 other file(s).
