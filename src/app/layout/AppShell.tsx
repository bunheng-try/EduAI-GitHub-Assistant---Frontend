import React from "react"

import TopBar from "../../shared/components/layout/TopBar"

import {
  ResizablePanel,
  ResizablePanelContainer,
  ResizablePanelDivider,
} from "../../shared/components/layout/ResizablePanel"
import { LeftBar } from "./leftBar/LeftBar"
import { mockClassrooms } from "@/features/class/classroom.mock.data"
import MainPanel from "./MainPanel/MainPanel"

export const AppShell = () => {
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden">
      
       <div className={`
        h-12
        w-full
        flex
        items-center
        px-4
        border-b
        bg-white
        shrink-0
      `}>Top Bar Place Holder</div>

       <div className="flex flex-1 overflow-hidden">
        
        <LeftBar classrooms={mockClassrooms}/>

        <ResizablePanelContainer
          direction="horizontal"
          className="flex-1"
        >
          {/* Main Bar */}
          <ResizablePanel
            defaultSize={40}
            minSize={25}
            maxSize={60}
          >
            <div className="bg-blue-400 h-full">
              Main Bar Place holder
            </div>
          </ResizablePanel>

          <ResizablePanelDivider />

          {/* Main Panel */}
          <ResizablePanel
            defaultSize={60}
            minSize={40}
            maxSize={75}
          >
            <MainPanel />
          </ResizablePanel>
        </ResizablePanelContainer>
      </div>
    </div>
  )
}
