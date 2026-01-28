import { Archive, Trash } from "lucide-react"
import type { ContextMenuItem } from "@/shared/components/context-menu/types"

export function getClassroomContextMenu(
  classroomId: string,
  actions: {
    deleteClassroom?: (id: string) => void
    archiveClassroom?: (id: string) => void
  }
): ContextMenuItem[] {
  return [
    {
      type: "item",
      label: "Archive class",
      icon: <Archive className="h-4 w-4" />,
      onClick: () => actions.archiveClassroom?.(classroomId),
    },
    {
      type: "separator",
    },
    {
      type: "item",
      label: "Delete class",
      icon: <Trash className="h-4 w-4" />,
      danger: true,
      onClick: () => actions.deleteClassroom?.(classroomId),
    },
  ]
}