import { Button } from "./button"

type IconButtonProps = Omit<
  React.ComponentPropsWithoutRef<typeof Button>,
  "size" | "fullWidth" | "asChild"
> & {
  size?: "sm" | "md" | "lg"
}

export function IconButton({
  variant = "outline",
  size = "md",
  className = "",
  children,
  ...props
}: IconButtonProps) {
  const iconSizes: Record<string, string> = {
    sm: "h-8 w-8",
    md: "h-9 w-9",
    lg: "h-10 w-10",
  }

  return (
    <Button
      variant={variant}
      size="icon"
      className={`${iconSizes[size]} ${className}`.trim()}
      {...props}
    >
      {children}
    </Button>
  )
}
