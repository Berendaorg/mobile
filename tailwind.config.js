/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FAFAFB",
        secondary: "#151414",
        highlight: "#C33535",
      },
    },
  },
  plugins: [],
};
