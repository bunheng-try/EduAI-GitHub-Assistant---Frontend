import React, { useEffect } from "react";
import { useUIStore } from "../../app/store/uiStore";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useUIStore((state) => state.theme);

  useEffect(() => {
    document.body.className = theme; // apply 'light' or 'dark' class to body
  }, [theme]);

  return <div>{children}</div>;
};

export default AppLayout;