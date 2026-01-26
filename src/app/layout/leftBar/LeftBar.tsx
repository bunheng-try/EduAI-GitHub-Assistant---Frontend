import { useState } from "react"
import {
  Users,
  Plus,
  Library,
  User,
  MoreHorizontal,
} from "lucide-react"


import type { Classroom } from "@/features/class/classroom.mock.data"
import { LeftBarButton } from "./LeftBarButton"

type LeftBarProps = {
  classrooms: Classroom[]
}

export function LeftBar({ classrooms }: LeftBarProps) {
  const [activeGroupId, setActiveGroupId] = useState<string | null>(
    classrooms[0]?.id ?? null
  )

  return (
    <aside className="flex h-full w-16 flex-col border-r border-border bg-card">

      {/* TOP — GROUPS */}
      <div className="flex flex-col gap-1 px-2 py-2 overflow-y-auto">
        {classrooms.map((group) => (
          <LeftBarButton
            key={group.id}
            icon={<Users className="h-5 w-5" />}
            tooltip={group.name}
            active={activeGroupId === group.id}
            onClick={() => setActiveGroupId(group.id)}
          />
        ))}
      </div>

      {/* MORE */}
      <div className="px-2 py-1">
        <LeftBarButton
          icon={<MoreHorizontal className="h-5 w-5" />}
          tooltip="More groups"
        />
      </div>

      <div className="flex-1" />

      {/* BOTTOM */}
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
  )
}
