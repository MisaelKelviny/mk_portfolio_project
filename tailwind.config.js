/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', '"Helvetica Neue"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
        display: ["Unbounded", "sans-serif"],
      },
      colors: {
        bg: "#08060E",
        ink: "#EEEAF6",
        body: "#BDB5D2",
        soft: "#CEC7DF",
        muted: "#9A90B4",
        dim: "#6E6290",
        line: "#221A33",
        "line-2": "#2A2140",
        "line-3": "#352A4D",
        "line-4": "#4A3B6A",
        tag: "#2F2547",
        chip: "#0D0A16",
        shot: "#0C0914",
        "on-accent": "#140A24",
        accent: "var(--accent)",
      },
      keyframes: {
        spin: { to: { transform: "rotate(360deg)" } },
        pulse: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0.35" } },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        orbit: "spin 38s linear infinite",
        "orbit-rev": "spin 26s linear infinite reverse",
        blink: "pulse 2.4s ease-in-out infinite",
        scan: "scan 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
