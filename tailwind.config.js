/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1025px", // Adjusted for iPad Pro and larger
    },
    extend: {},
  },
  plugins: [],
};
