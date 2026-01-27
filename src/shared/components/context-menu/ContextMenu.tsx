import type { ContextMenuItem } from "./types"
import { cn } from "@/lib/utils"

type ContextMenuProps = {
  x: number
  y: number
  items: ContextMenuItem[]
}

export function ContextMenu({ x, y, items }: ContextMenuProps) {
  return (
    <div
      className="
        fixed z-50 min-w-[180px]
        rounded-md
        border border-[hsl(var(--border))]
        bg-[hsl(var(--card))]
        py-1
        shadow-md
      "
      style={{
        top: y,
        left: x,
      }}
    >
      {items.map((item, index) => {
        if (item.type === "separator") {
          return (
            <div
              key={index}
              className="my-1 h-px bg-border"
            />
          )
        }

        if (item.type === "submenu") {
          return (
            <div
              key={index}
              className="px-3 py-2 text-sm text-muted-foreground"
            >
              {item.label} →
            </div>
          )
        }

        return (
          <button
            key={index}
            type="button"
            onClick={item.onClick}
            className={cn(
                "flex w-full items-center gap-2 px-3 py-2 text-sm text-left transition-colors",
                "text-[hsl(var(--foreground))]",
                "hover:bg-[hsl(var(--accent))]",
                item.danger &&
                    "text-[hsl(var(--destructive))] hover:bg-[hsl(var(--destructive)/0.12)]"
            )}
          >
            {item.icon && (
              <span className="w-4 opacity-70">
                {item.icon}
              </span>
            )}

            {item.label}
          </button>
        )
      })}
    </div>
  )
}

