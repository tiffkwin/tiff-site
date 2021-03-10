module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'blink': {
          '0%, 100%': { visibility: 'visible' },
          '50%': { visibility: 'hidden' }
        }
      },
      animation: {
        'blink': 'blink 2s steps(1, start) infinite;',
       }
    },
    letterSpacing: {
      wide: '0.15em',
      wider: '.2em',
      widest: '.3em',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
