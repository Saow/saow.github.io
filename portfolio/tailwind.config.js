/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      main: ["Playwrite CU", "cursive"],
    }
  },
  darkMode: "class",
  plugins: [nextui()],
}