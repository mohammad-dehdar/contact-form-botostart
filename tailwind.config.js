/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors:{
        cyan: colors.cyan,
        teal: colors.teal
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}

