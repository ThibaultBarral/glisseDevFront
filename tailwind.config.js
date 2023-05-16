const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'blue': {
        DEFAULT: '#00d4ff',
      },
    },
    extend: {
      fontFamily: {
        'sans': ['League Spartan', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}