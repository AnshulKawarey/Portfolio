/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: {
          50: '#f0f9f4',
          100: '#dbf0e3',
          200: '#b8e0cc',
          300: '#8cc8af',
          400: '#5da88e',
          500: '#3d8871',
          600: '#2d6b59',
          700: '#255548',
          800: '#1f433a',
          900: '#1b3830',
          950: '#0f201c',
        },
        // Dark mode specific colors
        matte: {
          900: '#1a1a1a', // Matte black
          800: '#242424',
          700: '#2a2a2a',
          600: '#333333',
        },
        phthalo: {
          50: '#e6f7f3',
          100: '#ccefe7',
          200: '#99dfcf',
          300: '#66cfb7',
          400: '#33bf9f',
          500: '#00af87', // Phthalo green
          600: '#008c6c',
          700: '#006951',
          800: '#004636',
          900: '#00231b',
        },
      },
    },
  },
  plugins: [],
};