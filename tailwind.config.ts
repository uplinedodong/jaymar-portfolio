import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        background: "#080c14",
        surface: "#0d1424",
        "surface-2": "#111827",
        border: "#1f2d45",
        "border-light": "#2a3d58",
        primary: "#6366f1",
        "primary-light": "#818cf8",
        "primary-dark": "#4f46e5",
        accent: "#a78bfa",
        "accent-2": "#38bdf8",
        muted: "#64748b",
        "text-primary": "#f1f5f9",
        "text-secondary": "#94a3b8",
        "text-muted": "#475569",
        success: "#22c55e",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 40% 20%, hsla(240,100%,74%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(267,100%,76%,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(210,100%,60%,0.08) 0px, transparent 50%)",
        "hero-glow":
          "radial-gradient(ellipse at 60% 0%, rgba(99,102,241,0.15) 0, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(167,139,250,0.1) 0, transparent 50%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(99,102,241,0.25)",
        "glow-sm": "0 0 15px rgba(99,102,241,0.2)",
        "card-dark": "0 4px 24px rgba(0,0,0,0.5)",
        "card-hover": "0 8px 40px rgba(99,102,241,0.2), 0 4px 24px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
