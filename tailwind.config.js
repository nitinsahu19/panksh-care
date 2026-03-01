/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F766E",
        secondary: "#FACC15",
        accent: "#6366F1",
        foreground: "#1f2937",
      },
    },
  },
  plugins: [],
}