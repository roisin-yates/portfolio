/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.{tsx,css}', './server/public/**/*.{html,css}'],
  theme: {
    screens: {
      xs: '593px',
      sm: '680px',
      md: '880px',
      lg: '1000px',
      xl: '1200px',
    },
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
