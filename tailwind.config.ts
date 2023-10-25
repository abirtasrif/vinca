import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '0',
      },
    },
    extend: {
      colors: {
        black: 'rgb(55, 55, 55)',
        'black-alpha': 'rgba(55, 55, 55, 0.125)',
        white: 'rgb(253, 250, 247)',
        'white-alpha': 'rgba(253, 250, 247,0.125)',
        red: 'rgb(239, 35, 60)',
        'red-alpha': 'rgba(239, 35, 60,0.125)',
        blue: 'rgb(66, 64, 185)',
        'blue-alpha': 'rgba(66, 64, 185,0.125)',
        gray: 'rgb(205, 205, 205)',
        'gray-alpha': 'rgba(205, 205, 205,0.125)',
        purple: 'rgb(111, 50, 137)',
        'purple-alpha': 'rgba(111, 50, 137,0.125)',
      },
    },
  },
  plugins: [],
};
export default config;
