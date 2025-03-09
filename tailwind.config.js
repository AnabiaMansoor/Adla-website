import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-up': 'fadeUp 1s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'primary-gradient': "linear-gradient(180deg, #fff, hsla(0, 100%, 79%, 0.27) 0.01%, hsla(0, 0%, 100%, 0))",
      },
    },
  },
  plugins: [],
}
