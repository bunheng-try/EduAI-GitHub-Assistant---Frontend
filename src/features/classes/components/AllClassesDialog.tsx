import * as React from "react"
import { Users } from "lucide-react"

import type { Classroom } from "@/features/class/classroom.mock.data"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog"
import { cn } from "@/lib/utils"

type AllClassesDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  classrooms: Classroom[]
  onSelect: (id: string) => void
}

export function AllClassesDialog({
  open,
  onOpenChange,
  classrooms,
  onSelect,
}: AllClassesDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm p-0">
        <DialogHeader className="px-4 py-3 border-b border-border">
          <DialogTitle>All classes</DialogTitle>
        </DialogHeader>

        <div className="max-h-[420px] overflow-y-auto">
          {classrooms.map((cls) => (
            <button
              key={cls.id}
              onClick={() => {
                onSelect(cls.id)
                onOpenChange(false)
              }}
              className={cn(
                "flex w-full items-center gap-3 px-4 py-2 text-left transition-colors",
                "hover:bg-[hsl(var(--accent))]"
              )}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[hsl(var(--secondary))]">
                <Users className="h-4 w-4" />
              </div>

              <span className="truncate text-sm">
                {cls.name}
              </span>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
