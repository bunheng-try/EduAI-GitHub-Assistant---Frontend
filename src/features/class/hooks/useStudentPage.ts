import { useState } from "react"
import type { Student } from "../types/Students.types"

interface ContextMenuState {
  x: number
  y: number
  student: Student
}

export function useStudentPage() {
  const [inviteOpen, setInviteOpen] = useState(false)
  const [confirmStudent, setConfirmStudent] = useState<Student | null>(null)
  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null)

  const openContextMenu = (e: React.MouseEvent, student: Student) => {
    e.stopPropagation()
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    setContextMenu({ x: rect.right - 160, y: rect.bottom + 4, student })
  }

  const closeContextMenu = () => setContextMenu(null)

  const openConfirmRemove = (student: Student) => {
    setConfirmStudent(student)
    closeContextMenu()
  }

  const closeConfirmRemove = () => setConfirmStudent(null)

  return {
    inviteOpen,
    setInviteOpen,
    confirmStudent,
    openConfirmRemove,
    closeConfirmRemove,
    contextMenu,
    openContextMenu,
    closeContextMenu,
  }
}