import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "PingFang SC",
          "Microsoft YaHei",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        mono: [
          "JetBrains Mono",
          "SFMono-Regular",
          "Consolas",
          "Liberation Mono",
          "monospace"
        ]
      },
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-elevated": "var(--surface-elevated)",
        border: "var(--border)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        "tag-bg": "var(--tag-bg)",
        "tag-text": "var(--tag-text)",
        ink: {
          50: "#faf6f0",
          100: "#f4ece1",
          200: "#e8dcc6",
          300: "#d4c0a0",
          400: "#a89880",
          500: "#8a7a66",
          600: "#5c4f42",
          700: "#3a3228",
          800: "#2a2520",
          900: "#1c1814",
          950: "#14110d"
        },
        signal: {
          50: "#faf3e8",
          100: "#f0e3cc",
          200: "#e0c9a4",
          300: "#c9a878",
          400: "#a88858",
          500: "#8b6f47",
          600: "#6e573a",
          700: "#524029",
          800: "#3a2d1c",
          900: "#241c12"
        },
        violetSoft: {
          50: "#faf6f0",
          100: "#f0e3cc",
          200: "#e0c9a4",
          500: "#c9a878",
          700: "#8b6f47"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(15, 23, 42, 0.08)",
        "soft-dark": "0 18px 60px rgba(0, 0, 0, 0.28)"
      },
      backgroundImage: {
        "subtle-grid":
          "linear-gradient(to right, rgba(15, 23, 42, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.06) 1px, transparent 1px)",
        "subtle-grid-dark":
          "linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: [typography]
};

export default config;
