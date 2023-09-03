/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3E84DA",
        warning: "#E9B43A",
        "dark-blue": "#093F82",
        "soft-blue": "#BEDBFF",
        secondary: "#0F64CD",
      },
      backgroundImage: {
        "gradient-229": "linear-gradient(229deg, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
