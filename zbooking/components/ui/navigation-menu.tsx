import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"

const NavigationMenu = NavigationMenuPrimitive.Root

function NavigationMenuList({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      className={[
        "group flex flex-1 list-none items-center justify-center gap-1",
        className,
      ].join(" ")}
      {...props}
    />
  )
}

const NavigationMenuItem = NavigationMenuPrimitive.Item

function NavigationMenuTrigger({
  className = "",
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      className={[
        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 focus:outline-none focus:bg-zinc-100",
        "dark:hover:bg-zinc-800 dark:focus:bg-zinc-800",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative top-px ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      className={[
        "left-0 top-0 w-full",
        "absolute top-full z-10 mt-1 rounded-lg border border-zinc-200 bg-white p-4 shadow-md dark:border-zinc-800 dark:bg-zinc-900",
        className,
      ].join(" ")}
      {...props}
    />
  )
}

const NavigationMenuLink = NavigationMenuPrimitive.Link

function NavigationMenuViewport({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <NavigationMenuPrimitive.Viewport
      className={[
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-md",
        "data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out",
        "dark:border-zinc-800 dark:bg-zinc-900",
        className,
      ].join(" ")}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      className={[
        "top-full z-[1] flex h-2 items-end justify-center overflow-hidden",
        "data-[state=visible]:animate-fade-in data-[state=hidden]:animate-fade-out",
        className,
      ].join(" ")}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900" />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
  NavigationMenuIndicator,
}
