/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

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
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
