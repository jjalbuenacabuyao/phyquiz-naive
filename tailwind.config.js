/** @type {import('tailwindcss').Config} */
const { neutral } = require('tailwindcss/colors')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        gray: neutral,
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}
