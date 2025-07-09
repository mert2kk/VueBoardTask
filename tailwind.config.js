// tailwind.config.js
const PrimeUI = require("tailwindcss-primeui");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/primevue/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [PrimeUI],
};
