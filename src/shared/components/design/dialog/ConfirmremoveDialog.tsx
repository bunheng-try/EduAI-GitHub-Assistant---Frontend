import { ConfirmDialog } from "../dialog"
import type { Student } from "../../../../features/class/types/Students.types"

interface ConfirmRemoveDialogProps {
  student: Student | null
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
}

export default function ConfirmRemoveDialog({ student, onOpenChange, onConfirm }: ConfirmRemoveDialogProps) {
  return (
    <ConfirmDialog
      open={!!student}
      onOpenChange={onOpenChange}
      title="Remove Student"
      onConfirm={onConfirm}
      confirmText="Remove"
      cancelText="Cancel"
    >
      <p className="text-sm text-gray-500 leading-relaxed">
        Are you sure you want to remove{" "}
        <span className="font-semibold text-gray-800">{student?.name}</span>{" "}
        from this class? This action cannot be undone.
      </p>
    </ConfirmDialog>
  )
}
