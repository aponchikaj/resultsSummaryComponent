/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'lightRed':"hsl(0, 100%, 67%)",
        'OrangeyYellow':"hsl(39, 100%, 56%)",
        'greenTeal':"hsl(166, 100%, 37%)",
        'cobaltBlue':"hsl(234, 85%, 45%)",

        'slateBlue':"hsl(252, 100%, 67%)",
        'RoyaleBlue':"hsl(241, 81%, 54%)",

        'VioletBlue':"hsla(256, 72%, 46%, 1)",
        'PersianBlue':"hsla(241, 72%, 46%, 0)",

        'lavender':"hsl(241, 100%, 89%)",
        'darkGray':"hsl(224, 30%, 27%)"
      },
      fontFamily:{
        'Hanken':'Hanken'
      }
    },
  },
  plugins: [],
}