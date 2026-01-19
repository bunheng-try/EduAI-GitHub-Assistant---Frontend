import React from 'react'
import TopBar from '../layout/TopBar'
import LeftBar from '../layout/LeftBar'
import MainBar from '../layout/MainBar'
import MainPanel from '../layout/MainPanel'

type AppShellProps = {
  left?: React.ReactNode
  main?: React.ReactNode
  panel?: React.ReactNode
}

export const AppShell = ({ left, main, panel }: AppShellProps) => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">

      {/* Top */}
      <TopBar />

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">

        {/* Left */}
        <LeftBar>
          {left}
        </LeftBar>

        {/* Main */}
        <MainBar>
          {main}
        </MainBar>

        {/* Panel */}
        <MainPanel>
          {panel}
        </MainPanel>

      </div>
    </div>
  )
}
