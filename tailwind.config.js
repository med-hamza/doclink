/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'hero-image': "url('./assets/picture/banner.png')",
      },
      colors: {
        primary: '#0F2F64',
        bolder: '#303131',
        lighter: '#E3F0FF',
        seconder: '#F5FAFF',
        btncolor: '#185FA0'
      }
    },
  },
  plugins: [],
}

