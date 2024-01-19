/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'gradient-from': '#FA5252',
        'gradient-to': '#DD2476',
      },
      textColor: {
        'white-hover': '#FFFFFF',
      },
      gradientColorStops: {
        'from-[#FA5252]': '#FA5252',
        'to-[#DD2476]': '#DD2476',
      },
      spacing: {
        'xtiny': '0.5rem', // Adjust the value as needed
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'homeBg': "url('/src/assets/homeBg.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

