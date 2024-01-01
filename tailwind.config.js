/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#54BD95",
        dark: "#191A15",
        lightPurple: "#F9F8FE",
        grey: "#A6A6A6",
      },
    },
  },
  // darkMode: "class",
  plugins: [nextui()],
};
