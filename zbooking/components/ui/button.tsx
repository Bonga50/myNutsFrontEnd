import { Slot } from "@radix-ui/react-slot"

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  asChild?: boolean
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

const stripHeights: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "border-b-[4px]",
  md: "border-b-[5px]",
  lg: "border-b-[6px]",
}

const variantStyles: Record<
  NonNullable<ButtonProps["variant"]>,
  string
> = {
  primary: "bg-coral text-cream hover:bg-coral/85 active:bg-coral/70",
  secondary: "bg-sage text-[#171717] hover:bg-sage/85 active:bg-sage/70",
  outline: [
    "border-2 border-[#171717] text-[#171717]",
    "hover:bg-[#171717]/5 active:bg-[#171717]/10",
  ].join(" "),
  ghost:
    "text-[#171717] hover:bg-[#171717]/5 active:bg-[#171717]/10",
}

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-base",
  lg: "h-14 px-7 text-lg",
}

export function Button({
  asChild,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 font-sans font-bold tracking-tight",
    "rounded-none transition-colors",
    "focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral",
    "disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    sizeStyles[size],
    variant === "outline" && stripHeights[size] + " border-b-coral",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  if (asChild) {
    return <Slot className={classes} {...props} />
  }

  return <button className={classes} {...props} />
}
