import { useNavigate, useParams } from "react-router-dom"
import { useClassrooms, useCreateClassroom, useDeleteClassroom, useUpdateClassroom } from "./useClassroom"

export function useClassroomActions() {
    const navigate = useNavigate()
    const { data: classrooms = [] } = useClassrooms()
    const deleteMutation = useDeleteClassroom()
    const createMutation = useCreateClassroom()
    const updateMutation = useUpdateClassroom()
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

    const editClassroom = async (id: string, newName: string) => {
        try {
            await updateMutation.mutateAsync({ id, data: { name: newName } });
        } catch (error) {
            console.error("Edit classroom failed:", error)
        }
    }

    const createClassroom = async (name: string) => {
        try {
            const newClass = await createMutation.mutateAsync({ name })
            navigate(`/classrooms/${newClass.id}`)
        } catch (error) {
            console.error("Create classroom failed:", error)
        }
    }

    return {
        deleteClassroom,
        editClassroom,
        createClassroom,
    }
}
