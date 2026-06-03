import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          DEFAULT: "#EDE0CC",
          50: "#F8F1E0",
          100: "#F5EBD6",
          200: "#EDE0CC",
          300: "#E2D2B6",
          400: "#CDB994",
        },
        ink: {
          DEFAULT: "#1A1310",
          soft: "#2C211B",
          fade: "#534239",
        },
        oxblood: {
          DEFAULT: "#5C1B1B",
          50: "#8A3A3A",
          100: "#7A2A2A",
          200: "#5C1B1B",
          300: "#3F1010",
        },
        gilt: {
          DEFAULT: "#B8943A",
          50: "#D4B158",
          100: "#B8943A",
          200: "#8E6F22",
        },
        teal: {
          forgotten: "#3A5A56",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-eb-garamond)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
        urdu: ["var(--font-nastaliq)", "serif"],
      },
      letterSpacing: {
        "press": "-0.02em",
        "stamp": "0.32em",
      },
      keyframes: {
        "ink-bleed": {
          "0%": { opacity: "0", filter: "blur(8px)", transform: "translateY(6px)" },
          "100%": { opacity: "1", filter: "blur(0)", transform: "translateY(0)" },
        },
        "ticker": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "stamp-thump": {
          "0%": { transform: "scale(0.6) rotate(-8deg)", opacity: "0" },
          "60%": { transform: "scale(1.08) rotate(-3deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(-3deg)", opacity: "1" },
        },
        "flicker": {
          "0%, 100%": { opacity: "1" },
          "47%": { opacity: "1" },
          "48%": { opacity: "0.4" },
          "49%": { opacity: "1" },
        },
      },
      animation: {
        "ink-bleed": "ink-bleed 1.2s cubic-bezier(.2,.7,.2,1) both",
        "ticker": "ticker 48s linear infinite",
        "stamp-thump": "stamp-thump 0.8s cubic-bezier(.2,1.3,.4,1) both",
        "flicker": "flicker 5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
