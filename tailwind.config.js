/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["'Space Grotesk'", "sans-serif"],
        inter:   ["'Inter'", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        navy:  "#0b1326",
        dark:  "#020617",
        card:  "#131b2e",
        panel: "#222a3d",
        muted: "#2d3449",
        cyan:  "#61dafb",
        "cyan-light": "#bfefff",
        "cyan-mid":   "#38bdf8",
        lavender: "#ddb7ff",
        text:    "#dae2fd",
        "text-muted": "#bcc8cd",
        "text-dim":   "#64748b",
        "text-soft":  "#94a3b8",
      },
      backdropBlur: {
        nav: "12px",
        card: "8px",
      },
      boxShadow: {
        "card-lg": "20px 40px 60px rgba(6,14,32,0.6)",
        "glow-cyan": "0 0 20px rgba(97,218,251,0.3)",
        "glow-dot":  "0 0 15px rgba(97,218,251,0.5)",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.4s ease both",
      },
    },
  },
  plugins: [],
}
