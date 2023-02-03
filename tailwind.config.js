/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'rgba(114, 112, 255, 1)',
        'dark': 'rgba(30, 30, 30,1)',
        'gray':'#C4C4C4',
      }
    },
    backgroundImage: {
      'musicbg':"url('/musicbg.png')",
    }
  },
  plugins: [],
}
