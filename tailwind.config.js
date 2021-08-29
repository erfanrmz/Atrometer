module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
     '3': '3px',
    },
    borderColor: theme => ({
      ...theme('colors'),
      'secondary': '#E94927',
     }),
     fontSize: {
      'base': '1.5rem',
     },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
