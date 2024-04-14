/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      spacing: {
        'chat': '70vh',
      },
      backgroundImage: {
        'jumbotron-image': "url('../images/background.jpg')",
      },
    },
  },
  plugins: [],
}
