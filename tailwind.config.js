/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'jumbotron-image': "url('/images/background.jpg')",
      },
    },
  },
  plugins: [],
}
