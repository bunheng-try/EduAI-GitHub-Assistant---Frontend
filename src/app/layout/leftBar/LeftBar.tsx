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
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/components/ui/tooltip"


type LeftBarProps = {
  classrooms: Classroom[]
}

export function LeftBar({ classrooms }: LeftBarProps) {
  const [activeGroupId, setActiveGroupId] = useState<string | null>(
    classrooms[0]?.id ?? null
  )

  return (
    <aside className="flex h-full w-16 flex-col border-r border-border bg-card">
      {/* =========================
          TOP ZONE — GROUP LIST
      ========================= */}
      <div className="flex flex-col gap-1 px-2 py-2 overflow-y-auto">
        {classrooms.map((group) => (
          <Tooltip key={group.id}>
            <TooltipTrigger asChild>
              <LeftBarButton
                icon={<Users className="h-5 w-5" />}
                active={activeGroupId === group.id}
                onClick={() => setActiveGroupId(group.id)}
              />
            </TooltipTrigger>

            <TooltipContent side="right">
              {group.name}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>

      {/* =========================
          MORE BUTTON
      ========================= */}
      <div className="px-2 py-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <LeftBarButton
              icon={<MoreHorizontal className="h-5 w-5" />}
            />
          </TooltipTrigger>

          <TooltipContent side="right">
            More groups
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* =========================
          BOTTOM ZONE — ACTIONS
      ========================= */}
      <div className="flex flex-col gap-1 px-2 py-2">
        {/* Create class */}
        <Tooltip>
          <TooltipTrigger asChild>
            <LeftBarButton icon={<Plus className="h-5 w-5" />} />
          </TooltipTrigger>
          <TooltipContent side="right">
            Create class
          </TooltipContent>
        </Tooltip>

        {/* Exercise library */}
        <Tooltip>
          <TooltipTrigger asChild>
            <LeftBarButton
              icon={<Library className="h-5 w-5" />}
              badge={2}
            />
          </TooltipTrigger>
          <TooltipContent side="right">
            Exercise library
          </TooltipContent>
        </Tooltip>

        {/* Profile */}
        <Tooltip>
          <TooltipTrigger asChild>
            <LeftBarButton
              icon={<User className="h-5 w-5 text-primary" />}
            />
          </TooltipTrigger>
          <TooltipContent side="right">
            Profile
          </TooltipContent>
        </Tooltip>
      </div>
    </aside>
  )
}
