import { useEffect } from "react";
import type { ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: "light" | "dark";
};

export function ThemeProvider({
  children,
  defaultTheme = "light",
}: ThemeProviderProps) {
  useEffect(() => {
    const root = document.documentElement;

    if (defaultTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [defaultTheme]);

  return <>{children}</>;
}
