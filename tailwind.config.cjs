/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          500: '#484848',
          400: '#606060',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
        other: {
          10: '#5C5F66',
          20: '#525966',
          30: '#475266',
          40: '#3D4B66',
          50: '#334566',
          60: '#293E66',
          70: '#1F3766',
          80: '#143066',
          90: '#0A2A66',
          100: '#002366',
        }
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
