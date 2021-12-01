module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      lifoo: {
        100: '#25B4B0',
        200: '#26B4B0',
        300: '#0FC684',
      },
  },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
