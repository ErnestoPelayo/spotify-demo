/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black-1000': '#000000',
      'white': '#fff',
      'neutral-400':'#afafa9',
      'black-1001':'#121212',
      'black-1002':'#1d1d1d',
      'black-1003':'#212121',
      'black-1004':'#3e3e3e',
      'green-500':'#1DB954',
      'test':'#203944',
      'red':'#873e23'
    },
    extend: {},
  },
  plugins: [
    require('node:tailwindcss-textshadow')
  ],
}