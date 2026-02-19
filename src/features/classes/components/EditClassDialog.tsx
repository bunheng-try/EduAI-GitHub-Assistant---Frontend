import { useState, useEffect } from "react";
import { CustomDialog } from "@/shared/components/design/dialog/CustomDialog";

type Props = {
  open: boolean;
  onClose: () => void;
  initialName: string;
  onConfirm: (newName: string) => void;
};

export function EditClassDialog({
  open,
  onClose,
  initialName,
  onConfirm,
}: Props) {
  const [name, setName] = useState(initialName);

  useEffect(() => setName(initialName), [initialName, open]);

  return (
    <CustomDialog
      open={open}
      onCancel={onClose}
      title="Edit class"
      bodyContent={
        <div className="flex flex-col gap-3">
          <label className="text-sm text-muted-foreground">Class name</label>

          <input
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Class name"
            className="
              h-10 rounded-md px-3
              border border-border
              bg-background
              text-foreground
              outline-none
              focus:ring-2 focus:ring-ring
            "
          />
        </div>
      }
      actionButtons={[
        {
          label: "Cancel",
          variant: "ghost",
          onClick: onClose,
        },
        {
          label: "Save",
          variant: "primary",
          disabled: !name.trim(),
          onClick: () => {
            onConfirm(name.trim());
            onClose();
          },
        },
      ]}
    />
  );
}
