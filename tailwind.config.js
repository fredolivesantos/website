/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#80B290',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0,0,0, 0.3)',
      },
      maxWidth: {
        xxs: '15rem',
      },
    },
  },
  plugins: [],
}
