/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3E84DA",
        danger: "#E9B43A",
      },
      backgroundImage: {
        "gradient-229": "linear-gradient(229deg, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
