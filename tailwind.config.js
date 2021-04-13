const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

    options: {
      safelist: [/^bg-/, /^text-/, /^shadow-/],
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Poppins', 'system-ui', 'sans-serif'],
      body: ['Poppins', 'system-ui', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
      violet: colors.violet,
      lime: colors.lime,
      cyan: colors.cyan,
      emerald: colors.emerald,
      orange: colors.orange,
      rose: colors.rose,
      pink: colors.pink,
      white: colors.white,
      indigo: colors.indigo,
      green: colors.green
    },
    extend: {},
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      'pink-300': '0 4px 6px -1px #f9a8d45a, 0 2px 4px -1px #f9a8d43f',
      'violet-300': '0 4px 6px -1px #C4B5FD5a, 0 2px 4px -1px #C4B5FD3f',
      'lime-300': '0 4px 6px -1px #D9F99D5a, 0 2px 4px -1px #D9F99D3f',
      'orange-300': '0 4px 6px -1px #FDBA745a, 0 2px 4px -1px #FDBA743f',
      'cyan-300': '0 4px 6px -1px #67E8F95a, 0 2px 4px -1px #67E8F93f',
      'red-300': '0 4px 6px -1px #FCA5A55a, 0 2px 4px -1px #FCA5A53f',
      'green-300': '0 4px 6px -1px #6EE7B75a, 0 2px 4px -1px #6EE7B73f'
    }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
