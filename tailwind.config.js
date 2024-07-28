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
      'neutral-400':'#ced2d9',
      'black-1001':'#121212',
      'test':'#203944'
    },
    extend: {},
  },
  plugins: [],
}