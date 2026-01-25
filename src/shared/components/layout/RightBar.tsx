// components/layout/RightBar.tsx
import React,{type ReactNode} from "react";

const RightBar: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <aside className="h-full border-l border-gray-200">
      <div className="h-full overflow-y-auto scroll-">
        {children}
      </div>
    </aside>
  );
};


export default RightBar;
