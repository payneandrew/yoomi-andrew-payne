/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
      },
      fontFamily: {
        "plus-jakarta-sans-font": ["Plus Jakarta Sans", "sans-serif"],
        "inter-font": ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
