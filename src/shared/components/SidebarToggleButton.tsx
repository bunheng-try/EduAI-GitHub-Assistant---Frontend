import React from "react";
import { useUIStore } from "../../app/store/uiStore";

const SidebarToggleButton: React.FC = () => {
  // get the action from store
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  return <button onClick={toggleSidebar}>Toggle Sidebar</button>;
};

export default SidebarToggleButton;
