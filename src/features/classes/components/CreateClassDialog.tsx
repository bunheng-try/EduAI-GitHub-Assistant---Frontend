import { useState } from "react"
import { CustomDialog } from "@/shared/components/design/dialog/CustomDialog"

type Props = {
  open: boolean
  onClose: () => void
  onCreate: (name: string) => void
}

export function CreateClassDialog({
  open,
  onClose,
  onCreate,
}: Props) {
  const [name, setName] = useState("")

  return (
    <CustomDialog
      open={open}
      onCancel={onClose}
      title="Create class"
      bodyContent={
        <div className="flex flex-col gap-3">
          <label className="text-sm text-muted-foreground">
            Class name
          </label>

          <input
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Gen 12 - Programming"
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
          label: "Create",
          variant: "primary",
          disabled: !name.trim(),
          onClick: () => {
            onCreate(name.trim())
            setName("")
            onClose()
          },
        },
      ]}
    />
  )
}
