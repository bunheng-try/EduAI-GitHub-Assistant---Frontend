import React from 'react'
import TopBar from '../layout/TopBar'
import LeftBar from '../layout/LeftBar'
import { MainBar } from '../layout/MainBar'
import MainPanel from '../layout/MainPanel'
import {
  ResizablePanel,
  ResizablePanelContainer,
  ResizablePanelDivider,
} from '../layout/ResizablePanel';

type LeftBarSlots = {
  top?: React.ReactNode;
  content?: React.ReactNode;
  bottom?: React.ReactNode;
};

type AppShellProps = {
  left?: LeftBarSlots;
  main?: React.ReactNode;
  mainHeader?: React.ReactNode;
  panel?: React.ReactNode;
  panelHeader?: React.ReactNode;
};

export const AppShell: React.FC<AppShellProps> = ({
  left,
  main,
  mainHeader,
  panel,
  panelHeader,
}) => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">

      {/* Top Bar */}
      <TopBar />

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">

        {/* Left Bar — fixed */}
        <LeftBar
          top={left?.top}
          content={left?.content}
          bottom={left?.bottom}
        />

        {/* Main + Right (Resizable) */}
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
            <MainBar header={mainHeader}>
              {main}
            </MainBar>
          </ResizablePanel>

          <ResizablePanelDivider />

          {/* Main Panel / Right */}
          <ResizablePanel
            defaultSize={60}
            minSize={40}
            maxSize={75}
          >
            <MainPanel header={panelHeader}>
              {panel}
            </MainPanel>
          </ResizablePanel>

        </ResizablePanelContainer>
      </div>
    </div>
  );
};