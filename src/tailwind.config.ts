import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", ".dark"],

  content: [
    "./index.html",
    "./**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        surface: "hsl(var(--card))",
        border: "hsl(var(--border))",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      fontSize: {
        base: ["16px", { lineHeight: "24px" }],
        h1: ["2.25rem", { lineHeight: "2.5rem", fontWeight: "700" }],
        h2: ["1.875rem", { lineHeight: "2.25rem", fontWeight: "600" }],
        h3: ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],
        h4: ["1.25rem", { lineHeight: "1.75rem", fontWeight: "500" }],
      },

      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },

      spacing: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },

      gap: {
        sm: "8px",
        md: "16px",
        lg: "24px",
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
    },
  },
};

export default config;
