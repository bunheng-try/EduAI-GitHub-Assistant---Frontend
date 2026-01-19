import React from "react";
import { useUIStore } from "../../app/store/uiStore";

const ThemeToggleButton: React.FC = () => {
  const toggleTheme = useUIStore((state) => state.toggleTheme);
  const theme = useUIStore((state) => state.theme);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggleButton;
