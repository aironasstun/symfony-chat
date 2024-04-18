/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      'text': {
        light: '#191f14',
        dark: '#e5ebe0',
      },
      'background': {
        light: '#f2f5ef',
        dark: '#0d100a',
      },
      'primary': {
        light: '#445535',
        dark: '#b9caaa',
      },
      'secondary': {
        light: '#98b0bd',
        dark: '#425a67',
      },
      'accent': {
        light: '#81a29b',
        dark: '#5d7e77',
      },
    },
    extend: {
      spacing: {
        'chat': '70vh',
      },
    },
  },
  plugins: [],
}
