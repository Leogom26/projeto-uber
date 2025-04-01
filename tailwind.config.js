/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'uber': "url('/public/assets/bguber.png')", 
        'city': "url('/public/assets/bg-city.png')"
      }
    },
  },
  plugins: [],
}
