import { useContextMenu } from "@/shared/components/context-menu/ContextMenuProvider"
import { MainBar } from "@/shared/components/layout/MainBar"
import { assignments, classrooms, type Assignment } from "@/shared/types/types"
import { useNavigate, useParams } from "react-router-dom"
import { useClassroomActions } from "../hooks/useClassroomAction"
import { getClassroomContextMenu } from "./classContextMenu"
import { useClassrooms } from "../hooks/useClassroom"
import { ConfirmDialog } from "@/shared/components/design/dialog"
import React, { useState } from "react"
import { EditClassDialog } from "./EditClassDialog"

const MainBarClassroom = () => {
  const navigate = useNavigate()
  const { openMenu } = useContextMenu()
  const { classId, assignmentId } = useParams<{ classId: string; assignmentId?: string }>()

  const { data: classrooms = [] } = useClassrooms()

  const { deleteClassroom, editClassroom } = useClassroomActions()
  const [confirmDeleteOpen, setConfirmDeleteOpen] = React.useState(false)
  const [classToDelete, setClassToDelete] = React.useState<string | null>(null)
  
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedClass, setSelectedClass] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const handleEdit = (classroomId: string) => {
    const cls = classrooms.find((c) => String(c.id) === classroomId);
    if (!cls) return;
    setSelectedClass({ id: classroomId, name: cls.name });
    setOpenEdit(true);
  };
  const handleSetting = (e: React.MouseEvent) => {
    if (!classId) return;

    openMenu({
      x: e.clientX,
      y: e.clientY,
      items: getClassroomContextMenu(classId, {
        deleteClassroom: handleOpenDelete,
        editClassroom: handleEdit,
      }),
    });
  };

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
        <div className="flex flex-col gap-2">TODO - list Assignemt here</div>
      </MainBar>
      <ConfirmDialog
        open={confirmDeleteOpen}
        onOpenChange={setConfirmDeleteOpen}
        title="Are you sure you want to delete this class?"
        onConfirm={() => {
          if (classToDelete) {
            deleteClassroom(classToDelete);
            setClassToDelete(null);
            setConfirmDeleteOpen(false);
          }
        }}
        confirmText="Delete"
        cancelText="Cancel"
      >
        <p>This action cannot be undone.</p>
      </ConfirmDialog>
      <EditClassDialog
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        initialName={selectedClass?.name || ""}
        onConfirm={(newName) => {
          if (!selectedClass) return;
          editClassroom(selectedClass.id, newName);
        }}
      />
    </>
  );
}

export default MainBarClassroom
