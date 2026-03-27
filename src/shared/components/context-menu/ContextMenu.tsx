import { useEffect } from "react"
import type { ContextMenuItem } from "./types"
import { cn } from "@/lib/utils"

type ContextMenuProps = {
  x: number
  y: number
  items: ContextMenuItem[]
  onClose?: () => void
}

export function ContextMenu({ x, y, items, onClose }: ContextMenuProps) {
  
  useEffect(() => {
    const handleClose = () => {
      if (onClose) onClose();
    };

    window.addEventListener("click", handleClose);
    window.addEventListener("scroll", handleClose);
    window.addEventListener("resize", handleClose);

    return () => {
      window.removeEventListener("click", handleClose);
      window.removeEventListener("scroll", handleClose);
      window.removeEventListener("resize", handleClose);
    };
  }, [onClose]);

  return (
    <div
      className={cn(
        "fixed z-50 min-w-[180px] rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-1 shadow-md",
        "overflow-hidden"
      )}
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
              className="my-1 h-px bg-[hsl(var(--border))] -mx-1"
            />
          )
        }

        if (item.type === "submenu") {
          return (
            <div
              key={index}
              className="px-2 py-1.5 text-sm font-medium text-muted-foreground flex justify-between items-center cursor-default select-none rounded-sm hover:bg-[hsl(var(--surface-hover))] hover:text-[hsl(var(--foreground))]"
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
              "relative flex w-full items-center gap-2 px-2 py-1.5 text-sm text-left transition-colors rounded-sm select-none outline-hidden",
              "text-[hsl(var(--foreground))] hover:bg-[hsl(var(--surface-hover))] hover:text-[hsl(var(--foreground))] focus:bg-[hsl(var(--surface-hover))] focus:text-[hsl(var(--foreground))]",
              item.danger &&
              "text-[hsl(var(--destructive))] hover:bg-[hsl(var(--destructive)/0.12)]"
            )}
          >
            {item.icon && (
              <span className="w-4 h-4 flex-shrink-0 opacity-70">
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