/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#ffde03",
      },
      fontFamily: {
        sans: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
