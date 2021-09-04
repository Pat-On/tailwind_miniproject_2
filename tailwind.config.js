// importing additional color palette
// const colors = require("tailwindcss/colors");

module.exports = {
  presets: [
    require('./company_styles')
  ],
  purge: {
    enabled: false, // false
    content: ["./dist/**/*.html"], //'./dist/**/*.php'
  },
  darkMode: "class", // or 'media - is going to allow device to control the dark mode' or 'class'false
  theme: {
    debugScreens: {
      position: ["top", "left"],
    },

    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-debug-screens")],
};
