/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // "purple": "#542fe8",
        "blue": "#587aff",
        "brown": "#31292c",
        "darkblue": "#3a2a6f",
      },
      fontFamily:{
        "font-1": "Instrument Sans",
        "font-2": "Montserrat",
      }
    },
  },
  plugins: [],
}

