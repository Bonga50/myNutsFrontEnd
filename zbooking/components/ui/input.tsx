type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  label?: string
  variant?: "default" | "stripped" | "filled"
}

const variantStyles: Record<"default" | "filled", string> = {
  default:
    "border-2 border-[#171717] bg-white px-3 py-2.5",
  filled:
    "border-2 border-transparent bg-sage/30 px-3 py-2.5",
}

export function Input({
  label,
  variant = "default",
  className = "",
  id,
  ...props
}: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-")

  const baseClasses = [
    "font-sans text-sm tracking-tight outline-none transition-colors",
    "focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2",
    "placeholder:text-[#171717]/40",
    "disabled:pointer-events-none disabled:opacity-50",
    className,
  ].join(" ")

  if (variant === "stripped") {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-bold tracking-tight"
          >
            {label}
          </label>
        )}
        <div>
          <div className="border-1 border-b-0 border-[#171717]">
            <input
              id={inputId}
              className={`w-full border-0 bg-white px-3 py-2.5 ${baseClasses}`}
              {...props}
            />
          </div>
          <div className="h-[5px] border-1 border-t-0 border-[#171717] bg-sage" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-bold tracking-tight"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={[
          baseClasses,
          variantStyles[variant],
        ].join(" ")}
        {...props}
      />
    </div>
  )
}
