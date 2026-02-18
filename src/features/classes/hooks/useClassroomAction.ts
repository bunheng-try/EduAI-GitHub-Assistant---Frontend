import { useState } from "react"
import { useNavigate } from "react-router-dom"
import type { Classroom } from "../apis/classroom.api"

export function useClassroomActions() {
    const navigate = useNavigate()

    const deleteClassroom = (id: string) => {
        
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
