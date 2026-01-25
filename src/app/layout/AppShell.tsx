import React from "react"

import TopBar from "../../shared/components/layout/TopBar"
import { MainBar } from "../../shared/components/layout/MainBar"
import MainPanel from "../../shared/components/layout/MainPanel"

import {
  ResizablePanel,
  ResizablePanelContainer,
  ResizablePanelDivider,
} from "../../shared/components/layout/ResizablePanel"
import { LeftBar } from "./leftBar/LeftBar"
import { mockClassrooms } from "@/features/class/classroom.mock.data"



type AppShellProps = {
  main?: React.ReactNode
  mainHeader?: React.ReactNode
  panel?: React.ReactNode
  panelHeader?: React.ReactNode
}

export const AppShell = () => {
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden">
      
 \     <TopBar />

\      <div className="flex flex-1 overflow-hidden">
        
        <LeftBar classrooms={mockClassrooms}/>

        {/* <ResizablePanelContainer
          direction="horizontal"
          className="flex-1"
        >
          {/* Main Bar */}
          {/* <ResizablePanel
            defaultSize={40}
            minSize={25}
            maxSize={60}
          >
            <MainBar header={mainHeader}>
              {main} */}
            {/* </MainBar>
          </ResizablePanel>

          <ResizablePanelDivider /> */}

          {/* Main Panel */}
          {/* <ResizablePanel
            defaultSize={60}
            minSize={40}
            maxSize={75}
          >
            <MainPanel header={panelHeader}>
              {panel}
            </MainPanel>
          </ResizablePanel>
        </ResizablePanelContainer> */}
      </div>
    </div>
  )
}
