/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        blackDimmed: "#111111",
        whiteDimmed: "#FAFAFA",
        grey1: "#333333",
        grey3: "#666666",
        cyanDark: "#29BC9B",
      },
      borderWidth: { 1: "1px" },
      fontSize: {
        small: "0.75rem",
        leading: "1.6875rem",
        title: "4rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
