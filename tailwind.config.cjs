module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: [ 'rounded' ],
  },
}
