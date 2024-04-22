/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      colors: {
        'custom-background': {
          DEFAULT: '#050d0c',
        },
        'custom-text': {
          DEFAULT: '#e3f4f4',
        },
        'custom-primary': {
          DEFAULT: '#9fdad7',
          950: '#071212',
          900: '#0e2524',
          800: '#153735',
          700: '#245c59',
          600: '#32817d',
          500: '#40a5a0',
          400: '#5abfba',
          300: '#7ecdc9',
          200: '#a3dbd8',
          100: '#c8eae8',
        },
        'custom-secondary': {
          DEFAULT: '#2c4870',
          950: '#070c12',
          900: '#0e1825',
          800: '#152337',
          700: '#243b5c',
          600: '#325381',
          500: '#406aa5',
          400: '#5a84bf',
          300: '#7e9fcd',
          200: '#a3bbdb',
          100: '#c8d6ea',
        },
        'custom-accent': {
          DEFAULT: '#3f36cc',
          950: '#060514',
          900: '#0c0a29',
          800: '#120f3d',
          700: '#1f1966',
          600: '#2b248f',
          500: '#372eb8',
          400: '#5147d1',
          300: '#7770db',
          200: '#9e99e6',
          100: '#c5c2f0',
        }
      },
      spacing: {
        'chat': '70vh',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
