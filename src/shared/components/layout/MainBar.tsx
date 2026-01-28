import React from "react"
import { Users, Settings, Plus } from "lucide-react"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/shared/components/ui/tooltip"
import { Button } from "../ui/button"

export interface MainBarProps {
  title?: string
  student?: number
  children?: React.ReactNode
  create?: () => void
  openSetting?: () => void
  openStudentList?: () => void
}

export const MainBar: React.FC<MainBarProps> = ({
  title,
  student,
  children,
  openSetting,
  openStudentList,
  create,
}) => {
  return (
    <div className="flex flex-col h-full w-full rounded-tl-2xl bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">

      {/* Header */}
      <div className="mx-12 py-8 pb-14 sticky top-0 shrink-0 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))] z-10">
        <div className="flex items-center justify-between">

          {/* Title */}
          <div className="text-3xl font-bold tracking-tight">
            {title}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">

            {/* Settings */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={openSetting}
                >
                  <Settings className="h-6 w-6" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={8}>
                Settings
              </TooltipContent>
            </Tooltip>

            {/* Create */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={create}
                >
                  <Plus className="h-7 w-7" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={8}>
                Create Assignment
              </TooltipContent>
            </Tooltip>

          </div>
        </div>

        {/* Students */}
        <div
          onClick={openStudentList}
          className="
            mt-2 flex items-center gap-2 text-sm
            text-[hsl(var(--muted-foreground))]
            hover:text-[hsl(var(--foreground))]
            cursor-pointer transition
          "
        >
          <Users className="h-4 w-4" />
          <span>{student} Students</span>
        </div>
      </div>

      {/* Content */}
      <div
        className="flex-1 overflow-y-auto py-4"
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {children}
      </div>
    </div>
  )
}
