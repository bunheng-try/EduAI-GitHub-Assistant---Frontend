import React from 'react'
import { Users, Settings, Plus } from "lucide-react"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/shared/components/ui/tooltip"

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
  create
}) => {
  return (
    <div className="flex flex-col h-full w-full rounded-tl-2xl">

      {/* Header */}
      <div className="mx-12 py-8 pb-14 sticky top-0 shrink-0 border-b z-10">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold">
            {title}
          </div>

          <div className="flex items-center gap-2">
            {/* Settings */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className="cursor-pointer opacity-50 hover:opacity-100 transition"
                  onClick={openSetting}
                >
                  <Settings className="h-8 w-8" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={8}>
                Settings
              </TooltipContent>
            </Tooltip>

            {/* Create */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className="cursor-pointer p-1 opacity-50 hover:opacity-100 transition"
                  onClick={create}
                >
                  <Plus className="h-9 w-9" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={8}>
                Create Assignment
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div
          className="flex items-center pt-2 gap-2 text-sm cursor-pointer"
          onClick={openStudentList}
        >
          <Users className="h-4 w-4" fill="black" />
          <span>{student} Students</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto py-4 "
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'}}
      >
        {children}
      </div>
    </div>
  )
}
