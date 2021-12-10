module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#fff',
      gray: '#DCDCDC',

      lifoo: {
        100: '#25B4B0',
        200: '#26B4B0',
        300: '#0FC684',
      },
  },
  borderRadius: {
    'none': '0',
    'sm': '0.125rem',
    DEFAULT: '0.25rem',
    'md': '0.375rem',
    'lg': '0.5rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    'full': '3rem',
  },
  borderWidth: {
    DEFAULT: '1px',
    '0': '0',
    '2': '2px',
   '3': '3px',
    '4': '4px',
   '6': '6px',
   '8': '8px',
  },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
