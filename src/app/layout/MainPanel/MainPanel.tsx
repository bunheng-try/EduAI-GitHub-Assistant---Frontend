import AssignmentEditor from "@/features/assignment/pages/AssignmentEditorPage";
import Challenge from "@/features/challenge/components/Challenge";
import React, { type ReactNode } from "react";

const MainPanel = () => {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden relative">
      {/* <Challenge /> */}
      <AssignmentEditor/>
    </div>
  );
};

export default MainPanel;