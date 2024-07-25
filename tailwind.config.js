/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#012847",
        secondary: {
          100: "#E79335",
          200: "#F0DE93",
        },
      },
    },
  },
  plugins: [],
};
