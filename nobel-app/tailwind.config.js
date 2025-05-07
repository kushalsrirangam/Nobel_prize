/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ ADDED THIS LINE
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
