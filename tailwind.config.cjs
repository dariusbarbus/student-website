/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#333333",
        tertiary: "#faf0e6",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 20px 10px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};