import React, { type ReactNode } from "react";

interface MainPanelProps {
  header?: ReactNode;      // Header slot
  children?: ReactNode;    // Main content slot
  emptyState?: ReactNode;  // Empty state slot
}

const MainPanel: React.FC<MainPanelProps> = ({ header, children, emptyState }) => {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden relative">
      
      {/* Header */}
      {header && (
        <div className="sticky top-0 shrink-0 border-b shadow-sm z-10">
          {header}
        </div>
      )}

      {/* content */}
      <div className="flex-1 overflow-y-auto mt-0">
        {children ? children : emptyState}
      </div>
    </div>
  );
};

export default MainPanel;