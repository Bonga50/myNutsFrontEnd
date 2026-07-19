import * as TooltipPrimitive from "@radix-ui/react-tooltip"

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger

function TooltipContent({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        className={[
          "z-50 overflow-hidden rounded-md bg-zinc-900 px-3 py-1.5 text-xs text-white shadow-md",
          "data-[state=delayed-open]:animate-fade-in data-[state=closed]:animate-fade-out",
          "dark:bg-zinc-100 dark:text-zinc-900",
          className,
        ].join(" ")}
        {...props}
      />
    </TooltipPrimitive.Portal>
  )
}

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent }
