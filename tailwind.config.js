import { colors } from "./src/styles/colors"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors,
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
}
