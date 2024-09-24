module.exports = {
  content: [
    './*.html',
    './*.js'
  ],
  theme: {
    extend: {

      colors: {
        'backPink': '#817b1',
      },

      boxShadow: {
        'myBxShd': '10px 10px 2px  hsl(0, 1%, 50%, 0.9)',
      }
    },

    screens: {
      'tinyPhone': '400px',

      'phone': '435px',
      // => @media (min-width: 435px)
      //BEGIN TO SHOW ONLY WHEN THE WIDTH IS AT 435PX and above

      'tablet': '640px',
      // => @media (min-width: 640px)

      'laptop': '1024px',
      // => @media (min-width: 1024px)

      'desktop': '1280px',
      // => @media (min-width: 1280px)
    },


  },
  plugins: [],
}
