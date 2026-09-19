/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        blue: {
          500: '#0066FF', // Vibrant electric blue
        }
      }
    },
  },
  plugins: [],
}
