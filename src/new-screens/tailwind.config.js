/** @ty      colors: {
        blue: {
          50: '#f5f6ff',
          100: '#ebebff',
          200: '#d9daff',
          300: '#bfc1ff',
          400: '#9ea1ff',
          500: '#7e82ff',
          600: '#5d62ff',
          700: '#464bff',
          800: '#3438ff',
          900: '#15184f',
          950: '#0e1037',
        },ilwindcss').Config} */
export default {
  content: [
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}