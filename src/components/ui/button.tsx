import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "gold";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      gold: "bg-[#F5C800] text-black hover:bg-[#d1aa00] border border-transparent rounded-none font-bold uppercase tracking-widest",
      outline: "border border-[#F5C800] bg-[#0d0d0d] text-white hover:bg-[#F5C800] hover:text-black rounded-none font-bold uppercase tracking-widest",
      ghost: "hover:bg-white/5 text-foreground hover:text-primary rounded-none",
    };

    const sizes = {
      default: "h-12 px-6 py-2",
      sm: "h-9 rounded-none px-3",
      lg: "h-14 rounded-none px-8 text-lg",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
