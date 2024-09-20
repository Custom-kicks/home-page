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
      }
    },
  },
  plugins: [],
};