/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // This is critical for making your ThemeToggle work!
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)", 
      }
    },
  },
  plugins: [],
}