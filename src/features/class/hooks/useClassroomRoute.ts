import { useParams } from "react-router-dom"

export function useClassroomRoute() {
  const { classId, assignmentId } = useParams()

  return {
    classroomId: classId ?? null,
    assignmentId: assignmentId ?? null,
  }
}
