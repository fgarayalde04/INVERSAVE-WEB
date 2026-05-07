import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "#F5F2EA",
        g1: "#52B558",
        g2: "#8FD99A",
        g3: "#1A6638",
        g4: "#0F2920",
        lila: "#6B48E8",
        warn: "#B5451E",
        t1: "#1A1A1A",
        t2: "#5A5A5A",
        t3: "#909090",
        hero: "#0C1A11",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.75rem",
        "5xl": "2rem",
      },
      fontSize: {
        "display": ["clamp(52px,8vw,96px)", { lineHeight: "0.96", letterSpacing: "-0.03em" }],
        "h1": ["clamp(40px,6vw,72px)", { lineHeight: "1.04", letterSpacing: "-0.025em" }],
        "h2": ["clamp(30px,4.5vw,56px)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "h3": ["clamp(22px,3vw,36px)", { lineHeight: "1.12", letterSpacing: "-0.015em" }],
        "body-lg": ["18px", { lineHeight: "1.65" }],
        "body": ["16px", { lineHeight: "1.6" }],
        "sm": ["14px", { lineHeight: "1.55" }],
        "xs": ["12px", { lineHeight: "1.5" }],
        "2xs": ["11px", { lineHeight: "1.4" }],
      },
    },
  },
  plugins: [],
};

export default config;
