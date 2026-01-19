import React from 'react'

type LeftBarProps = {
  top?: React.ReactNode
  content?: React.ReactNode
  bottom?: React.ReactNode
}

const LeftBar = ({ top, content, bottom }: LeftBarProps) => {
  return (
    <aside className="flex flex-col h-full w-16 bg-blue-900 text-white">

      {/* TOP — Logo */}
      <div className="flex items-center justify-center h-16 shrink-0">
        {top}
      </div>

      {/* MIDDLE — Scrollable content */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center gap-3 py-2">
        {content}
      </div>

      {/* BOTTOM — Actions */}
      <div className="shrink-0 flex flex-col items-center py-3 gap-3">
        {bottom}
      </div>

    </aside>
  )
}

export default LeftBar
