/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {colors: {
      'primary': '#2B2B2B',
      'secondary': '#FFB200',
    }},
  },
  plugins: [require("daisyui")],
}
