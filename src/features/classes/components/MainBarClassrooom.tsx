<<<<<<< feature/COD-55-assigment-management
import { MainBar } from "@/shared/components/layout/MainBar";
import { useClassroomRoute } from "@/features/class/hooks/useClassroomRoute";
import { useAssignmentClassrooms, useCreateAssignment } from "@/features/assignment/hooks/useAssignmentQuery";
import AssignmentCard from "@/shared/components/ui/assignmentCard";
import { useNavigate } from "react-router-dom";
import { useSelectedClassroom } from "../hooks/useClassroom";
import type {  AssignmentDto } from "@/shared/types/types";

=======
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
>>>>>>> main

const MainBarClassroom = () => {
  const navigate =useNavigate();
  const { classroomId,assignmentId } = useClassroomRoute();
  const { data: classroom} = useSelectedClassroom(classroomId);
  const { mutate: createAssignment} = useCreateAssignment(classroomId);


<<<<<<< feature/COD-55-assigment-management
  const { data: assignments = [], isLoading } =
    useAssignmentClassrooms(classroomId);

  const openStudentList = () => {
    console.log("open student list");
  };

  const handleSetting = () => {};

  const handleCreate = () => {
    // TODO - Create Assignment

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // add 1 day
    tomorrow.setHours(23, 59, 0, 0);

    if(classroomId==null) return;
=======
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
>>>>>>> main

    const newAssignmentPayload:AssignmentDto = {
      title: "New Assignment",
      classroomId: Number(classroomId),
      dueAt: tomorrow.toISOString(),
      description:"",
      position:0
    };

<<<<<<< feature/COD-55-assigment-management
    createAssignment(newAssignmentPayload);
=======
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
>>>>>>> main

  };

  return (
<<<<<<< feature/COD-55-assigment-management
    <MainBar
      title={classroom?.name}
      student={67}
      openSetting={handleSetting}
      openStudentList={openStudentList}
      create={handleCreate}
    >
      <div className="flex flex-col gap-2">
        {isLoading ? (
          <p>Loading assignments...</p>
        ) : assignments.length === 0 ? (
          <p>No assignments found</p>
        ) : (
          assignments.map((a) => (
            <AssignmentCard
              key={a.id}           
              assignment={a}        
              isSelect={a.id==assignmentId}  
              onDelete={() => {}}
              onClick={() => {
                navigate(
                  `/classrooms/${classroomId}/assignments/${a.id}`
                )
              }}
              totalStudent={67}
            />
          ))
        )}
      </div>
    </MainBar>
  );
};
=======
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
>>>>>>> main

export default MainBarClassroom;
