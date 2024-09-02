/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-require-imports
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito"],
        titillium: ["Titillium Web"],
      },
    },
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
