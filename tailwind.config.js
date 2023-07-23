/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: { section: "56.25rem" },
      colors: {
        whitedimmed: "#F3F3F3",
        blackdimmed: "#252323",
        pink: "#F5D3D3",
        orange: "#F9D67B",
        green: "#719F95",
        brown: "#BC4E50",
      },
      animation: {
        wiggle: "wiggle 1.5s ease-in-out ",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(0deg)" },
          "33%": { transform: "rotate(3deg)" },
          "66%": { transform: "rotate(-3deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      fontSize: {
        large: "26px",
        ["display-one"]: "177px",
        ["heading-two"]: "42px",
      },
      padding: { standard: "36px" },
      backgroundImage: {
        "hero-image": "url('/img/hero_bg.jpeg')",
      },
      letterSpacing: { display: "-0.885rem", ["heading-2"]: "0.09188rem" },
      backdropBlur: { nav: "30px" },
      border: { small: "1px" },
    },
  },
  plugins: [],
};
