import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1c140a",
        light: "#e5e3e7",
        red: "#a15133",
        grey: "#605a3f",
        pink: "#ffd8e9",
        orange: "#ff9750",
        green: "#185701",
        blue: "#2d2bb1",
        violet: "#6f3289",
      },
    },
  },
  plugins: [],
};
export default config;
