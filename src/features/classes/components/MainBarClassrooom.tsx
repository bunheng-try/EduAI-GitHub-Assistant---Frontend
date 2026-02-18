import { useContextMenu } from "@/shared/components/context-menu/ContextMenuProvider"
import { MainBar } from "@/shared/components/layout/MainBar"
import { assignments, classrooms, type Assignment } from "@/shared/types/types"
import { useNavigate, useParams } from "react-router-dom"
import { useClassroomActions } from "../hooks/useClassroomAction"
import { getClassroomContextMenu } from "./classContextMenu"
import { useClassrooms } from "../hooks/useClassroom"

const MainBarClassroom = () => {
  const navigate = useNavigate()
  const { openMenu } = useContextMenu()
  const { classId, assignmentId } = useParams<{ classId: string; assignmentId?: string }>()

  const { data: classrooms = [] } = useClassrooms()

  const { deleteClassroom, editClassroom } = useClassroomActions()

  // Find current classroom
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
        deleteClassroom,
        editClassroom,
      }),
    })
  }


  const handleCreate = (): void => {
    // TODO - Create Assignement
  }


  return (
    <MainBar
      title={classroom?.name ?? "Classroom"}
      student={34}
      openSetting={handleSetting}
      openStudentList={openStudentList}
      create={handleCreate}
    >
      <div className="flex flex-col gap-2">
        TODO - list Assignemt here
      </div>
    </MainBar>
  )
}

export default MainBarClassroom
