import { Outlet, useOutlet } from "react-router-dom";
import { LeftBar } from "./leftBar/LeftBar";

export const AppShell = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">

      <LeftBar />
  
      <Outlet />
    </div>
  );
};

