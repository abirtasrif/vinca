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
        red: "#ef233c",
        grey: "#bfbdb2",
        pink: "#a3436d",
        orange: "#ff9750",
        green: "#185701",
        blue: "#4240b9",
        violet: "#6f3289",
      },
    },
  },
  plugins: [],
};
export default config;
