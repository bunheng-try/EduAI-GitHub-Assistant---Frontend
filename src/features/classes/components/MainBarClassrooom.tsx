import { useContextMenu } from "@/shared/components/context-menu/ContextMenuProvider"
import { MainBar } from "@/shared/components/layout/MainBar"
import { assignments, classrooms, type Assignment } from "@/shared/types/types"
import { useNavigate, useParams } from "react-router-dom"
import { useClassroomActions } from "../hooks/useClassroomAction"
import { getClassroomContextMenu } from "./classContextMenu"
import { useClassrooms } from "../hooks/useClassroom"
import { ConfirmDialog } from "@/shared/components/design/dialog"
import React from "react"

const MainBarClassroom = () => {
  const navigate = useNavigate()
  const { openMenu } = useContextMenu()
  const { classId, assignmentId } = useParams<{ classId: string; assignmentId?: string }>()

  const { data: classrooms = [] } = useClassrooms()

  const { deleteClassroom, editClassroom } = useClassroomActions()
  const [confirmDeleteOpen, setConfirmDeleteOpen] = React.useState(false)
  const [classToDelete, setClassToDelete] = React.useState<string | null>(null)

  const handleOpenDelete = (id: string) => {
    setClassToDelete(id)
    setConfirmDeleteOpen(true)
  }


  const classroom = classrooms.find(
    (c) => String(c.id) === classId
  )

  const classroomAssignments = assignments.filter((a) => a.classroomId === classId)

  const openStudentList = (): void => {
    console.log("open student list")
  }

  const handleSetting = (e: React.MouseEvent) => {
    if (!classId) return

    openMenu({
      x: e.clientX,
      y: e.clientY,
      items: getClassroomContextMenu(classId, {
        deleteClassroom: handleOpenDelete,
        editClassroom,
      }),
    })
  }


  const handleCreate = (): void => {
    // TODO - Create Assignement
  }


  return (
    <>
      <MainBar
        title={classroom?.name ?? "Classroom not found"}
        student={classroom ? 34 : undefined}
        openSetting={classroom ? handleSetting : undefined}
        openStudentList={classroom ? openStudentList : undefined}
        create={classroom ? handleCreate : undefined}
      >
        <div className="flex flex-col gap-2">
          TODO - list Assignemt here
        </div>
      </MainBar>
      <ConfirmDialog
        open={confirmDeleteOpen}
        onOpenChange={setConfirmDeleteOpen}
        title="Are you sure you want to delete this class?"
        onConfirm={() => {
          if (classToDelete) {
            deleteClassroom(classToDelete)
            setClassToDelete(null)
            setConfirmDeleteOpen(false)
            // optionally navigate away if user is currently in this classroom
            if (classToDelete === classId) navigate("/classrooms")
          }
        }}
        confirmText="Delete"
        cancelText="Cancel"
      >
        <p>This action cannot be undone.</p>
      </ConfirmDialog>
    </>

  )
}

export default MainBarClassroom
