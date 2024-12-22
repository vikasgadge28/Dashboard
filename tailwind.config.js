/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#575DF0',
        bg: '#FFFFFF',
        bgGray: '#F3F4F6',
        activeBtn: '#575DE0',
        activeNav: '#111827',
        font: '#061C3D', 
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
