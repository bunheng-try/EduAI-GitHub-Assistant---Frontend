import { ConfirmDialog } from "../dialog"
import type { Student } from "../../../../features/class/types/Students.types"
import { ClassNames } from "storybook/theming"
import { DialogContent } from "../../ui/dialog"

interface ConfirmRemoveDialogProps {
  student: Student | null
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
}

export default function ConfirmRemoveDialog({ student, onOpenChange, onConfirm }: ConfirmRemoveDialogProps) {
  return (
    <div className="bg-white">
        <ConfirmDialog
          open={!!student}
          onOpenChange={onOpenChange}
          title="Remove Student"
          onConfirm={onConfirm}
          confirmText="Remove"
          cancelText="Cancel"
          >
          <p className="text-sm text-gray-500 leading-relaxed bg-white">
            Are you sure you want to remove{" "}
            <span className="font-semibold text-gray-800">{student?.name}</span>{" "}
            from this class? This action cannot be undone.
          </p>
        </ConfirmDialog>
      </div>
  )
}
