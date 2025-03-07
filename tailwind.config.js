/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merri: "'Merriweather', serif" ,
        robo: "'Roboto', sans-serif"
      }
    }
  },
  plugins: [require("daisyui")],
}

