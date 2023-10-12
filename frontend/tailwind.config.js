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
    },
    screens: {
      sm: "640px",
      md: "819px",
      md2: "1040px",
      lg: "1440px",
    },
    extend: {
      borderRadius: { card: "2rem" },
      height: { almostFull: "99vh" },
      container: {
        padding: {
          center: true,
          DEFAULT: "0.75rem",
          sm: "2rem",
          md: "2.5rem",
          lg: "3rem",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        blackDimmed: "#111111",
        whiteDimmed: "#FAFAFA",
        grey1: "#333333",
        grey2: "#444444",
        grey3: "#666666",
        grey4: "#888888",
        cyanLight: "#79ffe1",
        cyan: "#50E3C2",
        cyanDark: "#29BC9B",
      },
      borderWidth: { 1: "1px" },
      lineHeight: { normal: "160%" },
      fontSize: {
        titleLarge: "4rem",
        titleMedium: "3rem",
        titleSmall: "2rem",
        leadingLarge: "1.6875rem",
        leadingMedium: "1.26563rem",
        leadingSmall: "0.84375rem",
        contentLarge: "1.5rem",
        contentMedium: "1.25rem",
        contentSmall: "0.75rem",
      },
      padding: {
        buttonXLarge: "2.875rem",
        buttonXMedium: "2.15625rem",
        buttonXSmall: "1.4375rem",
        buttonYLarge: "1.25rem",
        buttonYMedium: "0.9375rem",
        buttonYSmall: "0.625rem",
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
