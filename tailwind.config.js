/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        card: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      animation: {
        card: 'card 0.3s linear',
      },
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        verde: {
          300: "#89c951",
          500: "#28a745",
        },
        cinza: {
          200: "#ced4da",
          300: "#6c757d",
          500: "#495057",
          900: "#212529",
        },
        azul: {
          500: "#007bff",
        },
      },
    },
  },
  plugins: [],
};
