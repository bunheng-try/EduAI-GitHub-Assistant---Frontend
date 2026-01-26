import * as React from "react"
import { cn } from "@/lib/utils"

type LeftBarButtonProps = {
  icon: React.ReactNode
  active?: boolean
  badge?: number
  onClick?: () => void
}

export const LeftBarButton = React.forwardRef<
  HTMLButtonElement,
  LeftBarButtonProps
>(function LeftBarButton(
  { icon, active, badge, onClick },
  ref
) {
  return (
    <button
      ref={ref}
      onClick={onClick}
      data-active={active}
      className={cn(
        "relative flex h-11 w-11 items-center justify-center rounded-md transition-colors cursor-pointer",
        "hover:bg-[hsl(var(--primary)/0.2)]",
        active && "bg-[hsl(var(--primary))] text-green-50"
      )}
    >
      {icon}

      {badge && (
        <span className="
          absolute top-1 right-1
          min-w-4 h-4
          rounded-full
          bg-primary
          text-primary-foreground
          text-[10px]
          flex items-center justify-center
        ">
          {badge}
        </span>
      )}
    </button>
  )
})
