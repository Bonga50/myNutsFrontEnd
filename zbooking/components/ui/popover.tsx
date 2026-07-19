import * as PopoverPrimitive from "@radix-ui/react-popover"

const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger

function PopoverContent({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        className={[
          "z-50 w-72 rounded-lg border border-zinc-200 bg-white p-4 shadow-md outline-none",
          "data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out",
          "dark:border-zinc-800 dark:bg-zinc-900",
          className,
        ].join(" ")}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

export { Popover, PopoverTrigger, PopoverContent }
