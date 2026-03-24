import { useRef, useState, useEffect } from "react"
import { MoreHorizontal } from "lucide-react"
import { useNavigate } from "react-router-dom"
import type { Classroom } from "../apis/classroom.api"
import { LeftBarButton } from "@/app/layout/leftBar/LeftBarButton"
import { AllClassesDialog } from "./AllClassesDialog"
import ClassroomItem from "./ClassroomItem"

type Props = {
    classes: Classroom[]
    selectedClassroomId: number | null
    onDelete: (id: number) => void
    onEdit: (id: number) => void
}

const BUTTON_HEIGHT = 48

export function LeftBarClasses({ classes, selectedClassroomId, onDelete, onEdit }: Props) {
    return (
        <>
            <div className="flex flex-col gap-0.5 px-2 py-2 overflow-hidden flex-1">
                {classes.map((c) => (
                    <ClassroomItem c={c} selectedClassroomId={selectedClassroomId!} onDelete={onDelete} onEdit={onEdit} />
                ))}
            </div>

        </>
    )
}