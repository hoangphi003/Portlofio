/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "15px"],
      sm: ["14", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        RadioCanadaBig: ["RadioCanadaBig", "sans-serif"],
      },
      colors: {
        primary: "#fad390",
        "slate-gray": "#bec3cc",
        secondary: "#57606f",
        unique: "#353b48",
        "card-color": "rgb(30, 41, 59)",
      },
    },
  },
  plugins: [],
};
