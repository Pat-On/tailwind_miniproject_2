// importing additional color palette
// const colors = require("tailwindcss/colors");

module.exports = {
  presets: [require("./news_styles")],
  purge: {
    enabled: false, // false
    content: ["./dist/**/*.html"], //'./dist/**/*.php'
  },
  // it works
  corePlugins: {
    // float: false,
    container: false, // we have no longer predefined class container
  },
  darkMode: "class", // or 'media - is going to allow device to control the dark mode' or 'class'false
  theme: {
    debugScreens: {
      position: ["top", "left"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "4rem",
      },
    },
    extend: {},
  },
  // extending variants! nice!
  variants: {
    // if we are going to put something not inside extend we will have posibility to remove variants
    backgroundColor: ['dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    extend: {
      width: ['hover']
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
