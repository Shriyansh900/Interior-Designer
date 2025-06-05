/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f7f3',
          100: '#f1ede4',
          200: '#e5dbc9',
          300: '#d6c3a8',
          400: '#c2a683',
          500: '#b3906a',
          600: '#a57e5c',
          700: '#8a684e',
          800: '#725646',
          900: '#5f483d',
          950: '#332620',
        },
        accent: {
          50: '#f5f8f6',
          100: '#dfe9e2',
          200: '#c0d3c7',
          300: '#9bb8a9',
          400: '#789a88',
          500: '#5e7f6e',
          600: '#4a6558',
          700: '#3e5349',
          800: '#34443c',
          900: '#2c3933',
          950: '#182019',
        },
        gold: {
          50: '#fbf8ef',
          100: '#f5efda',
          200: '#ead8ae',
          300: '#dfbf7d',
          400: '#d5a753',
          500: '#cb8f36',
          600: '#ba762c',
          700: '#9a5b26',
          800: '#7d4926',
          900: '#673d23',
          950: '#391f10',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};