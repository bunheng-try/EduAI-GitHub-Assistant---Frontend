import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/shared/components/ui/dialog"
import { Button } from "@/shared/components/ui/button"

type ErrorDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  children: React.ReactNode
  closeText?: string
}

export function ErrorDialog({
  open,
  onOpenChange,
  title,
  children,
  closeText = "Close",
}: ErrorDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        {children}

        <DialogFooter>
          <Button onClick={() => onOpenChange(false)}>
            {closeText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
