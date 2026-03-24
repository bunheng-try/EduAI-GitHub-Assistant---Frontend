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

export const LeftBarButton = React.forwardRef<HTMLButtonElement, LeftBarButtonProps>(
  ({ icon, active, badge, tooltip, onClick, onContextMenu }, ref) => {
    const button = (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        onContextMenu={onContextMenu}
        className={cn(
          "relative flex shrink-0 h-12 w-12 items-center justify-center rounded-lg transition-colors cursor-pointer",
          !active && "hover:bg-[hsl(var(--leftbar-hover))]",
          active && "bg-[hsl(var(--leftbar-active))]"
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

    // tooltip wrapping
    if (!tooltip) return button

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent side="right">{tooltip}</TooltipContent>
      </Tooltip>
    )
  }
)

LeftBarButton.displayName = "LeftBarButton"