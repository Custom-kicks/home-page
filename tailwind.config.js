/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // Include all files in the app folder
    './pages/**/*.{js,ts,jsx,tsx}', // In case you have pages folder as well
    './components/**/*.{js,ts,jsx,tsx}',  // Include your components
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':["Poppins"]
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
