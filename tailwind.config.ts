import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "0",
      },
    },
    extend: {
      colors: {
        black: "rgb(55, 55, 55)",
        "black-alpha": "rgba(55, 55, 55, 0.125)",
        white: "rgb(253, 250, 247)",
        "white-alpha": "rgba(253, 250, 247,0.125)",
        red: "rgb(239, 35, 60)",
        blue: "rgb(66, 64, 185)",
        gray: "rgb(205, 205, 205)",
        purple: "rgb(111, 50, 137)",
      },
    },
  },
  plugins: [],
};
export default config;
