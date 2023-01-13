/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        phone: "420px",
        laptop: "1024px",
      },
    } 
  },
  plugins: 
  [require('flowbite/plugin'),
  require('@tailwindcss/forms')
  ]
}
