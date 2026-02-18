import * as React from "react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/components/ui/tooltip"
import { cn } from "@/lib/utils"

type LeftBarButtonProps = {
  icon: React.ReactNode
  active?: boolean
  badge?: number
  tooltip?: string
  onClick?: () => void
  onContextMenu?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export function LeftBarButton({
  icon,
  active,
  badge,
  tooltip,
  onClick,
  onContextMenu
}: LeftBarButtonProps) {
  const button = (
    <button
      type="button"
      onClick={onClick}
      onContextMenu={onContextMenu}
      className={cn(
        "relative flex shrink-0 h-11 w-11 items-center justify-center rounded-md transition-colors cursor-pointer",
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

  if (!tooltip) return button

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent side="right">{tooltip}</TooltipContent>
    </Tooltip>
  )
}
