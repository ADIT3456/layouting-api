/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f3ff',
        'neon-red': '#ff003c',
        'dark-bg': '#050505',
        'card-bg': '#0f0f15',
      }
    },
  },
  plugins: [],
}