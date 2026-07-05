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
        // Cool champagne — desaturated, grayer gold
        gold: {
          DEFAULT: '#a5967a',
          soft: '#c0b49c',
          muted: '#877a60',
        },
      },
      fontFamily: {
        // Precise, neutral display — SF-like discipline
        display: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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
