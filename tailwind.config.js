/** @type {import('tailwindcss').Config} */
module.exports = {
   plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ], 
  
  content: [
    "./layout/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

