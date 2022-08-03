/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        mainblue: "#2124B1",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      borderRadius: {
        "4xl": "5rem",
      },
    },
  },
  plugins: [],
};
