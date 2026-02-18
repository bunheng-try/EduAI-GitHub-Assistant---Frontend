import { useState } from "react"
import { Plus, Library, User } from "lucide-react"
import { useNavigate } from "react-router-dom"

import { LeftBarButton } from "./LeftBarButton"
import { CreateClassDialog } from "@/features/classes/components/CreateClassDialog"
import { useClassrooms } from "@/features/classes/hooks/useClassroom"
import { useClassroomRoute } from "@/features/class/hooks/useClassroomRoute"
import { LeftBarClasses } from "@/features/classes/components/LeftBarClasses"
import { useClassroomActions } from "@/features/classes/hooks/useClassroomAction"
import { LeftBarClassesSkeleton } from "@/features/classes/components/LeftBarClassesSkeleton"
import { LeftBarClassesError } from "@/features/classes/components/LeftBarClassesError"

export function LeftBar() {
  const navigate = useNavigate()
  const { classroomId } = useClassroomRoute()
  const { data: classes = [], isLoading, isError, refetch } = useClassrooms()
  const [openCreate, setOpenCreate] = useState(false)
  const { createClassroom, deleteClassroom, editClassroom } = useClassroomActions();


  return (
    <>
      <aside className="flex h-full w-16 flex-col border-r border-border bg-card">
        {classes.length === 0 && (
          <div className="flex flex-col items-center justify-center flex-1 px-2 py-4 text-center text-sm text-[hsl(var(--muted-foreground))]">
            <p>No classes available</p>
          </div>
        )}
        
        {isLoading ? (
          <LeftBarClassesSkeleton />
        )
        : isError ? (
          <LeftBarClassesError onRetry={refetch} />
        ) : (
          <LeftBarClasses
            classes={classes}
            selectedClassroomId={classroomId}
            onDelete={deleteClassroom}
            onEdit={editClassroom}
          />
        )}

        <div className="flex-1" />

        {/* bottom actions */}
        <div className="flex flex-col gap-1 px-2 py-2">
          <LeftBarButton icon={<Plus className="h-5 w-5" />} tooltip="Create class" onClick={() => setOpenCreate(true)} />
          <LeftBarButton icon={<Library className="h-5 w-5" />} tooltip="Exercise library" />
          <LeftBarButton icon={<User className="h-5 w-5 text-primary" />} tooltip="Profile" />
        </div>
      </aside>

      <CreateClassDialog open={openCreate} onClose={() => setOpenCreate(false)} onCreate={createClassroom} />
    </>
  )
}
