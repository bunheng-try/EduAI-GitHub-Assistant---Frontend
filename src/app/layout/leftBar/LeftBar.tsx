import { useEffect, useRef, useState } from "react"
import {
  Users,
  Plus,
  Library,
  User,
  MoreHorizontal,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

import { LeftBarButton } from "./LeftBarButton"
import { useContextMenu } from "@/shared/components/context-menu/ContextMenuProvider"
import { getClassroomContextMenu } from "@/features/classes/components/classContextMenu"
import { AllClassesDialog } from "@/features/classes/components/AllClassesDialog"
import { CreateClassDialog } from "@/features/class/components/CreateClassDialog"
import { useClassroomRoute } from "@/features/class/hooks/useClassroomRoute"

import { classrooms, type Classroom } from "@/shared/types/types"

const BUTTON_HEIGHT = 48

export function LeftBar() {
  const navigate = useNavigate()
  const { classroomId } = useClassroomRoute()
  const { openMenu } = useContextMenu()

  /** ---------------------------
   *  STATE
   * -------------------------- */
  const [classes, setClasses] = useState<Classroom[]>(classrooms)
  const [openAll, setOpenAll] = useState(false)
  const [openCreate, setOpenCreate] = useState(false)

  const listRef = useRef<HTMLDivElement>(null)
  const [visibleCount, setVisibleCount] = useState(classes.length)

  /** ---------------------------
   *  ORDER: active always first
   * -------------------------- */
  const orderedClasses = [
    ...classes.filter((c) => c.id === classroomId),
    ...classes.filter((c) => c.id !== classroomId),
  ]

  /** ---------------------------
   *  MEASURE HEIGHT
   * -------------------------- */
  useEffect(() => {
    const el = listRef.current
    if (!el) return

    const calculate = () => {
      const max = Math.floor(el.clientHeight / BUTTON_HEIGHT)
      setVisibleCount(Math.max(max, 0))
    }

    calculate()
    window.addEventListener("resize", calculate)
    return () => window.removeEventListener("resize", calculate)
  }, [classes])

  const visibleClasses = orderedClasses.slice(0, visibleCount)
  const hiddenClasses = orderedClasses.slice(visibleCount)

  /** ---------------------------
   *  ACTIONS
   * -------------------------- */
  const createClassroom = (name: string) => {
    const newClass: Classroom = {
      id: crypto.randomUUID(),
      name,
    }

    setClasses((prev) => [newClass, ...prev])
    navigate(`/classrooms/${newClass.id}`)
  }

  const deleteClassroom = (id: string) => {
    setClasses((prev) => prev.filter((c) => c.id !== id))

    if (classroomId === id) {
      navigate("/classrooms")
    }
  }

  const archiveClassroom = (id: string) => {
    console.log("archive later:", id)
  }

  /** ---------------------------
   *  RENDER
   * -------------------------- */
  return (
    <>
      <aside className="flex h-full w-16 flex-col border-r border-border bg-card">

        {/* TOP — CLASSES */}
        <div
          ref={listRef}
          className="flex flex-col gap-1 px-2 py-2 overflow-hidden flex-1"
        >
          {visibleClasses.map((c) => (
            <LeftBarButton
              key={c.id}
              icon={<Users className="h-5 w-5" />}
              tooltip={c.name}
              active={c.id === classroomId}
              onClick={() => navigate(`/classrooms/${c.id}`)}
              onContextMenu={(e) => {
                e.preventDefault()
                openMenu({
                  x: e.clientX,
                  y: e.clientY,
                  items: getClassroomContextMenu(c.id, {
                    deleteClassroom,
                    archiveClassroom,
                  }),
                })
              }}
            />
          ))}
        </div>

        {/* MORE */}
        {hiddenClasses.length > 0 && (
          <div className="px-2 py-1">
            <LeftBarButton
              icon={<MoreHorizontal className="h-5 w-5" />}
              tooltip={`${hiddenClasses.length} more classes`}
              onClick={() => setOpenAll(true)}
            />
          </div>
        )}

        <div className="flex-1" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-1 px-2 py-2">
          <LeftBarButton
            icon={<Plus className="h-5 w-5" />}
            tooltip="Create class"
            onClick={() => setOpenCreate(true)}
          />

          <LeftBarButton
            icon={<Library className="h-5 w-5" />}
            tooltip="Exercise library"
          />

          <LeftBarButton
            icon={<User className="h-5 w-5 text-primary" />}
            tooltip="Profile"
          />
        </div>
      </aside>

      {/* ALL CLASSES */}
      <AllClassesDialog
        open={openAll}
        onOpenChange={setOpenAll}
        classrooms={classes}
        onSelect={(id) => navigate(`/classrooms/${id}`)}
      />

      {/* CREATE CLASS */}
      <CreateClassDialog
        open={openCreate}
        onClose={() => setOpenCreate(false)}
        onCreate={createClassroom}
      />
    </>
  )
}
