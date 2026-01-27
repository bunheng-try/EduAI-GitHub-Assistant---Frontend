import LeftBar from "@/shared/components/layout/LeftBar";
import MainBar from "@/shared/components/layout/MainBar";
import MainPanel from "@/shared/components/layout/MainPanel";
import { Outlet } from "react-router-dom";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/shared/components/ui/resizable";

const MainLayout = () => {
  return (
    <div className="flex h-screen w-full">
      <LeftBar />

      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={15} minSize={10} maxSize={20}>
          <MainBar />
        </ResizablePanel>

        <ResizableHandle />

        <ResizablePanel>
          <MainPanel>
            <Outlet />
          </MainPanel>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default MainLayout;
