/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: {
          DEFAULT: '#03852C',
          dark: '#036024',
          darker: '#01491B',
          darkest: '#03220C',
          light: '#4CA352',
          lighter: '#40B23B',
          lightest: '#02E849',
        },
        secondaryColor: {
          DEFAULT: '#FFE500',
          dark: '#E0C205',
          darker: '#A48300',
          darkest: '#575000',
          light: '#FFE746',
          lighter: '#FFF782',
          lightest: '#FFF6BC',
        },
        dark: "#212121",
        light: "#FFFFFF",
        grayer: "#e7e7e7"
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      BG: ["Bricolage Grotesque", "sans-serif"],
    },
  },
  plugins: [],
}

