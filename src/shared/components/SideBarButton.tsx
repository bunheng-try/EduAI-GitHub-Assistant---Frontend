import React from "react";
import { useUIStore } from "../../app/store/uiStore";

const SidebarButton: React.FC = () => {
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  return <button onClick={toggleSidebar}>Toggle Sidebar</button>;
};

export default SidebarButton;
