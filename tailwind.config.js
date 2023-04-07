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
        'primary': 'rgba(114, 112, 255, 1)',
        'dark': '#1E1E1E',
        'gray': '#C4C4C4',
        'light': 'rgba(0,0,0,0.46)',
        'lighter': 'rgba(0,0,0,0.09)',
        'trans': 'rgba(255,255,255,0.18)',
      },
      scrollbar: { 
        thumb: 'rgba(114, 112, 255, 1)',
        track: 'rgba(255,255,255,0.18)',
      },
    },
    backgroundImage: {
      'musicbg': "url('/musicbg.png')",
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
