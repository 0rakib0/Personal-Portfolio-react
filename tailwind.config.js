/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primaryColor': '#0c0c0c',
        'secondaryColor':'#1dddbc'
      }
    },
  },
  plugins: [require("daisyui")],
}

