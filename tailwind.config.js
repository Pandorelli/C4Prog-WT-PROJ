/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        "dark-gunmetal": "#261F30",
        "ghost-white": "#ECEFFF",
        "pale-purple": "#896EAC",
        "water-blue": "#00A3FF",
      },
      'animation': {
        'text':'text 5s ease infinite',
      },
      'keyframes': {
        'text': {
          '0%, 100%': {
            'background-size':'200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'right center'
          }
        },
      },
    },
  },
  plugins: [],
}

