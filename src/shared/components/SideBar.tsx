import React from "react";
import { useUIStore } from "../../app/store/uiStore";

const Sidebar: React.FC = () => {
  // get the state from store
  const isOpen = useUIStore((state) => state.isSidebarOpen);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <p>Sidebar content</p>
    </div>
  );
};

export default Sidebar;
