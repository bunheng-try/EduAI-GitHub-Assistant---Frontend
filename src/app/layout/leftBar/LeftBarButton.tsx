import * as React from "react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/components/ui/tooltip"
import { cn } from "@/lib/utils"

type LeftBarButtonProps = {
  icon: React.ReactNode
  active?: boolean
  badge?: number
  tooltip?: string
  onClick?: () => void
}

export function LeftBarButton({
  icon,
  active,
  badge,
  tooltip,
  onClick,
}: LeftBarButtonProps) {
  const Button = (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative flex h-11 w-11 items-center justify-center rounded-md transition-colors cursor-pointer",
        !active && "hover:bg-[hsl(var(--accent))]",
        active &&
          "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"
      )}
    >
      {icon}

      {badge && (
        <span className="absolute top-1 right-1 min-w-4 h-4 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-[10px] flex items-center justify-center">
          {badge}
        </span>
      )}
    </button>
  )

  if (!tooltip) return Button

  return (
    <Tooltip>
      <TooltipTrigger asChild>{Button}</TooltipTrigger>
      <TooltipContent side="right">
        {tooltip}
      </TooltipContent>
    </Tooltip>
  )
}
