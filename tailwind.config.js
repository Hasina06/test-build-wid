/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-blue': '#24969D',
        'light-blue-hovered': '#21b7be',
        'light-blue-disabled': '#1f5d5f',
        'dark-blue': '#102B3E',
        dark: '#111',
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
