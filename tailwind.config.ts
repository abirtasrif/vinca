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
        dark: "#373737",
        light: "#e5e3e7",
        red: "#ef233c",
        grey: "#9c9c7c",
        pink: "#a3436d",
        orange: "#ff9750",
        green: "#258841",
        blue: "#4240b9",
        violet: "#6f3289",
      },
    },
  },
  plugins: [],
};
export default config;
