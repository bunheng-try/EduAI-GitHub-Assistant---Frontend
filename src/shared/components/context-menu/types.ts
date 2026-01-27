import type React from "react"

/**
 * Base menu item types
 */

export type ContextMenuItem =
  | ContextMenuAction
  | ContextMenuSeparator
  | ContextMenuSubmenu

/**
 * Normal clickable action
 */
export type ContextMenuAction = {
  type: "item"
  label: string
  icon?: React.ReactNode
  onClick: () => void
  danger?: boolean
  disabled?: boolean
}

/**
 * Divider line
 */
export type ContextMenuSeparator = {
  type: "separator"
}

/**
 * Folder / submenu
 */
export type ContextMenuSubmenu = {
  type: "submenu"
  label: string
  icon?: React.ReactNode
  items: ContextMenuItem[]
}
