/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '760px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        Darkcyan: 'hsl(158, 36%, 37%)',
        Cream: 'hsl(30, 38%, 92%)',
        Verydarkblue: 'hsl(212, 21%, 14%)',
        Darkgrayishblue: 'hsl(228, 12%, 48%)',
        White: 'hsl(0, 0%, 100%)',
        fontBody: "'Montserrat', sans-serif",
        fontHead: "'Fraunces', serif"
      }

    },
  },
  plugins: [],
}
