/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1C1F58',
        secondary: '#BBBCCC',
        'purple-new': '#1C1F58'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
