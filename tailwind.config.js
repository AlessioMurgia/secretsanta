/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'allbgImage': "url('/src/images/background.png')",
        'bgScroll': "url('/src/images/scroll.png')",
        'bgCard':"url('/src/images/card2.png')",
      },
      backgroundSize:{
        '850px':'850px',
      },
      height: {
        '1/10': '10%',
        '60px': '60px',
      },
      width:{
        '500px':'500px'
      },
      colors: {
        'bottomBarColor': '#00394B',
        'topBarColor': '#3897B5',
        'inputBarColor': '#BEFFFF'
      },
      minHeight: {
        '45': '45px',
      },
      boxShadow: {
        'topbarShadow': '0 5px 5px rgba(0, 0, 0, 0.5)',
        'bgShadow': 'inset 0 -120px 100px 90px rgba(0,0,0,0.5)'
      },
      margin: {
        '1/20': '5%',
        '1/10': '10%',
        '1/5' : '20%',
        '1/6' : '15%',
      },
      padding: {
        '20px': '20px',
        '1/10': '10%',
        '200px': '200px',
      },
      inset: {
        '1/10':'10%',
        '10px':'10px'
      },
    },
  },
  plugins: [],
}
