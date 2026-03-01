import type { Student } from "../../types/Students.types"
import InviteDialog from "../../../../shared/components/design/dialog/InviteDialog"
import ConfirmRemoveDialog from "../../../../shared/components/design/dialog/ConfirmremoveDialog"
import ContextMenu from "./Contextmenu"

interface StudentDialogsProps {
  inviteOpen: boolean
  onInviteOpenChange: (open: boolean) => void
  onInvite: (name: string) => { success: boolean; error?: string }

  confirmStudent: Student | null
  onConfirmRemoveOpenChange: (open: boolean) => void
  onConfirmRemove: () => void

  contextMenu: { x: number; y: number; student: Student } | null
  onContextMenuRemove: (student: Student) => void
  onContextMenuClose: () => void
}

export default function StudentDialogs({
  inviteOpen,
  onInviteOpenChange,
  onInvite,
  confirmStudent,
  onConfirmRemoveOpenChange,
  onConfirmRemove,
  contextMenu,
  onContextMenuRemove,
  onContextMenuClose,
}: StudentDialogsProps) {
  return (
    <>
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onRemove={() => onContextMenuRemove(contextMenu.student)}
          onClose={onContextMenuClose}
        />
      )}

      <InviteDialog
        open={inviteOpen}
        onOpenChange={onInviteOpenChange}
        onInvite={onInvite}
      />

      <ConfirmRemoveDialog
        student={confirmStudent}
        onOpenChange={onConfirmRemoveOpenChange}
        onConfirm={onConfirmRemove}
      />
    </>
  )
}
