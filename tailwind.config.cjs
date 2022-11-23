/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        back: "#0D0C0C",
        vert: "#62CD5D",
      },
    },
  },
  plugins: [],
};
