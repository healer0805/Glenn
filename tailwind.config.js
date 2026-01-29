/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media', // Use prefers-color-scheme
  theme: {
    extend: {
      colors: {
        'bg-dark': '#151513',
        'bg-light': '#efeeec',
        'tx-dark': '#222725',
        'tx-light': '#cdcccc',
      },
      fontSize: {
        'xs': '12px',
        'title': '148px',
      },
      fontFamily: {
        'title': ['sans-serif'],
      },
      lineHeight: {
        'title': '0.9em',
      },
      letterSpacing: {
        'title': '0em',
      },
    },
  },
  plugins: [],
}
