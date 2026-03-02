import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#faf8f5',
        'text-black': '#111111',
        'text-darkgray': '#2b2b2b',
        'accent-burgundy': '#9c2a3f',
        'gray-divider': '#e5e5e5',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
} satisfies Config
