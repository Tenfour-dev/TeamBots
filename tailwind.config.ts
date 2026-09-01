import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#a01e1e",
          redDark: "#3a0a0a",
          ink: "#181513",
          stone: "#5a5450",
          paper: "#fdfcfb",
          parchment: "#d8d2cd",
          rose: "#fdeeee"
        }
      },
      fontFamily: {
        barlow: ["var(--font-barlow)"],
        barlowCondensed: ["var(--font-barlow-condensed)"]
      },
      height: {
        nav: "72px"
      }
    }
  },
  plugins: []
};
export default config;
