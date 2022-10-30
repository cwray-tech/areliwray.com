/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
