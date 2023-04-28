/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/client/**/*.{tsx,css}', './server/public/**/*.{html,css}'],
  theme: {
    extend: {
      fontFamily: {
        GlitchGoblin: ['glitch-goblin', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'glitch-background': "url('/server/public/img/glitch-background.png')",
      },
    },
  },
  plugins: [],
}
