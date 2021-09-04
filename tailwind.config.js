module.exports = {
  purge: {
    enabled: true, // false
    content: ['./dist/**/*.html'], //'./dist/**/*.php'
    },
  darkMode: 'class', // or 'media - is going to allow device to control the dark mode' or 'class'false
  theme: {
    debugScreens: {
      position: ['top', 'left']
    },
    // spacing: {
    //     13: '3.25rem' //total overwrite
    //   },
    extend: {
      fontFamily: {
        // by this we defined our own font -> nice
        headline: ["Oswald"]
      },
      colors: {
        // mainColor is our name, we can put it whatever we want
        // so we extended again the tailwin! nice!
        mainColor: '#1E293B'
      },
      // spacing: {
      //   13: '3.25rem' 
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens')
  ],
}
