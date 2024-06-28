/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      cgreen: '#45e684',
      cblack: '#111111',
      cprimary: '#b6b6b6',
      csecondary: '#606060',
      cgray: '#373935',
      cpurple: '#bbb2cd',
      bgcard: '#1c1c1c',
      cbrown: '#e4b975',
      cwhite: {
        800: '#fafafa',
        600: '#e0ddd8',
        400: '#aaa4a4'
      }
    },
    extend: {
      fontSize: {
        lg: '1.025rem'
      }
    },
  },
  plugins: [],
}

