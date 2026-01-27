import React, {
  createContext,
  useContext,
  useState,
  useCallback,
} from "react"
import type { ContextMenuItem } from "./types"
import { ContextMenu } from "./ContextMenu"

type OpenContextMenuArgs = {
  x: number
  y: number
  items: ContextMenuItem[]
}

type ContextMenuContextType = {
  openMenu: (args: OpenContextMenuArgs) => void
  closeMenu: () => void
}

const ContextMenuContext = createContext<ContextMenuContextType | null>(
  null
)

export function ContextMenuProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [state, setState] = useState<{
    open: boolean
    x: number
    y: number
    items: ContextMenuItem[]
  }>({
    open: false,
    x: 0,
    y: 0,
    items: [],
  })

  const openMenu = useCallback(
    ({ x, y, items }: OpenContextMenuArgs) => {
      setState({
        open: true,
        x,
        y,
        items,
      })
    },
    []
  )

  const closeMenu = useCallback(() => {
    setState((prev) => ({ ...prev, open: false }))
  }, [])

  return (
    <ContextMenuContext.Provider
      value={{ openMenu, closeMenu }}
    >
      {children}

      {state.open && (
        <>
            {/* invisible backdrop */}
            <div
            className="fixed inset-0 z-40"
            onClick={closeMenu}
            onContextMenu={(e) => {
                e.preventDefault()
                closeMenu()
            }}
            />

            {/* actual context menu */}
            <ContextMenu
            x={state.x}
            y={state.y}
            items={state.items}
            />
        </>
        )}

    </ContextMenuContext.Provider>
  )
}

export function useContextMenu() {
  const ctx = useContext(ContextMenuContext)
  if (!ctx) {
    throw new Error(
      "useContextMenu must be used inside ContextMenuProvider"
    )
  }
  return ctx
}
