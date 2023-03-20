/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: { max: "641px" },
      sm: { min: "642px", max: "767px" },
      md: { min: "768px", max: "900px" },
      lg: { min: "901px", max: "1115px" },
      xl: { min: "1116px" },
    },
  },
  plugins: [],
};
