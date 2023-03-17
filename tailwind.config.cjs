/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

  
    extend: {
        fontFamily: {
          tilt: "'Tilt Warp', cursive",
          kalam: "'Kalam', cursive",
        },
          screens: {
        xs: '540px',
      },
    },
  },
  plugins: [],
}
