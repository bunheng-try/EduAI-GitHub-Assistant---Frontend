import { useNavigate, useParams } from "react-router-dom"
import { useClassrooms, useDeleteClassroom } from "./useClassroom"

export function useClassroomActions() {
    const navigate = useNavigate()
    const { data: classrooms = [] } = useClassrooms()
    const deleteMutation = useDeleteClassroom()
    const { classId } = useParams()

    const deleteClassroom = (id: string) => {
        deleteMutation.mutate(id, {
            onSuccess: () => {
                const remainingClasses = classrooms.filter(c => String(c.id) !== id)
                if (id === classId) {
                    if (remainingClasses.length > 0) {
                        navigate(`/classrooms/${remainingClasses[0].id}`)
                    } else {
                        navigate("/classrooms")
                    }
                }
            },
            onError: (err) => {
                console.error("Failed to delete classroom:", err)
            },
        })
    }

    const editClassroom = (id: string) => {
        
    }

    const createClassroom = (name: string) => {
        
    }

    return {
        deleteClassroom,
        editClassroom,
        createClassroom,
    }
}
