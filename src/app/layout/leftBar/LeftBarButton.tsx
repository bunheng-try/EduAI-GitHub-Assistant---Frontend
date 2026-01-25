import * as React from "react"
import { cn } from "@/lib/utils"

type LeftBarButtonProps = {
  icon: React.ReactNode
  label?: string
  active?: boolean
  badge?: number
  variant?: "group" | "action" | "profile"
  expanded?: boolean
  onClick?: () => void
}

export function LeftBarButton({
  icon,
  label,
  active,
  badge,
  variant = "group",
  expanded = false,
  onClick,
}: LeftBarButtonProps) {
  return (
    <button
      onClick={onClick}
      data-active={active}
      data-variant={variant}
      className={cn(
        "relative flex items-center justify-center rounded-md transition-colors",
        "h-11 w-11",

        // hover
        "hover:bg-accent",

        // active group
        active && "bg-primary/10",

        // profile emphasis
        variant === "profile" && "text-primary",

        // future expanded sidebar
        expanded && "justify-start px-3 gap-3 w-full"
      )}
    >
      {icon}

      {/* label (future expand) */}
      {expanded && label && (
        <span className="text-sm font-medium truncate">
          {label}
        </span>
      )}

      {/* badge */}
      {badge !== undefined && (
        <span
          className="
            absolute top-1 right-1
            min-w-4 h-4
            rounded-full
            bg-primary
            text-primary-foreground
            text-[10px]
            flex items-center justify-center
          "
        >
          {badge}
        </span>
      )}
    </button>
  )
}
