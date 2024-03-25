/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        arvo: ["Arvo", "serif"],
      },
      animation: {
        "bounce-slow": "bounce-slow 3s infinite",
        "spin-slow": "spin-slow 10s infinite",
      },
      keyframes: {
        "bounce-slow": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(0.5rem)",
          },
        },
        "spin-slow": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
          "50%": {
            transform: "rotate(-360deg)",
          },
        },
      },
    },
    plugins: [],
  },
};
