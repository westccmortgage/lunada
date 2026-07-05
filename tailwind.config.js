/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Luxury coastal institutional palette
        navy: {
          DEFAULT: '#0f2035',
          deep: '#0a1626',
          soft: '#1c3350',
        },
        ivory: '#faf8f3',
        sand: {
          DEFAULT: '#ece5d8',
          soft: '#f4efe6',
          deep: '#d9cfba',
        },
        gold: {
          DEFAULT: '#b08d4f',
          soft: '#c7a970',
          muted: '#9a7c46',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'ui-serif', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
