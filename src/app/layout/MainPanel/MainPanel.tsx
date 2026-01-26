import Challenge from "@/features/challenge/components/Challenge";
import React, { type ReactNode } from "react";

const MainPanel = () => {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden relative">
      <Challenge />
    </div>
  );
};

export default MainPanel;