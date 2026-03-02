// components/ConfirmRemoveDialog.tsx
import { CustomDialog } from "@/shared/components/design/dialog/CustomDialog";
import type { Member } from "../../apis/member.api";

interface ConfirmRemoveDialogProps {
  student: Member | null;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

export default function ConfirmRemoveDialog({ student, onOpenChange, onConfirm }: ConfirmRemoveDialogProps) {
  if (!student) return null;

  return (
    <CustomDialog
      open={!!student}
      onCancel={() => onOpenChange(false)}
      title="Remove Student"
      bodyContent={
        <p className="text-sm text-gray-500 leading-relaxed">
          Are you sure you want to remove{" "}
          <span className="font-semibold text-gray-800">{student.name}</span> from this class? This action cannot be undone.
        </p>
      }
      actionButtons={[
        {
          label: "Cancel",
          onClick: () => onOpenChange(false),
          variant: "secondary",
        },
        {
          label: "Remove",
          onClick: onConfirm,
          variant: "destructive",
        },
      ]}
    />
  );
}