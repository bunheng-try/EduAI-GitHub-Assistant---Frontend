import { useEffect, useRef, useState } from "react"
import {
  Users,
  Plus,
  Library,
  User,
  MoreHorizontal,
} from "lucide-react"

import type { Classroom } from "@/features/class/classroom.mock.data"
import { LeftBarButton } from "./LeftBarButton"
import { useContextMenu } from "@/shared/components/context-menu/ContextMenuProvider"
import { getClassroomContextMenu } from "@/features/class/components/classContextMenu"
import { AllClassesDialog } from "@/features/class/components/AllClassesDialog"

type LeftBarProps = {
  classrooms: Classroom[]
}

const BUTTON_HEIGHT = 48 // h-11 + gap

export function LeftBar({ classrooms }: LeftBarProps) {
  const [activeGroupId, setActiveGroupId] = useState<string | null>(
    classrooms[0]?.id ?? null
  )
  const [openAll, setOpenAll] = useState(false)

  const { openMenu } = useContextMenu()

  const listRef = useRef<HTMLDivElement>(null)
  const [visibleCount, setVisibleCount] = useState(classrooms.length)
  const orderedClasses = [
    ...classrooms.filter(c => c.id === activeGroupId),
    ...classrooms.filter(c => c.id !== activeGroupId),
  ]


  // --------------------------
  // Measure visible buttons
  // --------------------------
  useEffect(() => {
    const el = listRef.current
    if (!el) return

    const calculate = () => {
      const height = el.clientHeight
      const max = Math.floor(height / BUTTON_HEIGHT)

      setVisibleCount(Math.max(max, 0))
    }

    calculate()
    window.addEventListener("resize", calculate)

    return () => window.removeEventListener("resize", calculate)
  }, [classrooms])

  const visibleClasses = orderedClasses.slice(0, visibleCount)
  const hiddenClasses = orderedClasses.slice(visibleCount)

  // --------------------------
  // Actions (mock for now)
  // --------------------------
  const deleteClassroom = (id: string) => {
    alert(`Delete classroom: ${id}`)
  }

  const archiveClassroom = (id: string) => {
    alert(`Archive classroom: ${id}`)
  }

  return (
    <>
      <aside className="flex h-full w-16 flex-col border-r border-border bg-card">

        {/* ========================
            TOP — CLASS LIST
        ======================== */}
        <div
          ref={listRef}
          className="flex flex-col gap-1 px-2 py-2 overflow-hidden flex-1"
        >
          {visibleClasses.map((group) => (
            <LeftBarButton
              key={group.id}
              icon={<Users className="h-5 w-5" />}
              tooltip={group.name}
              active={activeGroupId === group.id}
              onClick={() => setActiveGroupId(group.id)}
              onContextMenu={(e) => {
                e.preventDefault()

                openMenu({
                  x: e.clientX,
                  y: e.clientY,
                  items: getClassroomContextMenu(group.id, {
                    deleteClassroom,
                    archiveClassroom,
                  }),
                })
              }}
            />
          ))}
        </div>

        {/* ========================
            MORE BUTTON
        ======================== */}
        {hiddenClasses.length > 0 && (
          <div className="px-2 py-1">
            <LeftBarButton
              icon={<MoreHorizontal className="h-5 w-5" />}
              tooltip={`${hiddenClasses.length} more classes`}
              onClick={() => setOpenAll(true)}
            />
          </div>
        )}

        {/* spacer */}
        <div className="flex-1" />

        {/* ========================
            BOTTOM ACTIONS
        ======================== */}
        <div className="flex flex-col gap-1 px-2 py-2">
          <LeftBarButton
            icon={<Plus className="h-5 w-5" />}
            tooltip="Create class"
          />

          <LeftBarButton
            icon={<Library className="h-5 w-5" />}
            tooltip="Exercise library"
            badge={2}
          />

          <LeftBarButton
            icon={<User className="h-5 w-5 text-primary" />}
            tooltip="Profile"
          />
        </div>
      </aside>
      <AllClassesDialog
        open={openAll}
        onOpenChange={setOpenAll}
        classrooms={classrooms}
        onSelect={(id) => setActiveGroupId(id)}
      />
    </>
  )
}
