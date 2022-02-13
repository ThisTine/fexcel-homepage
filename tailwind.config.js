module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./src/**/*.html"
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily:{
        'Montserrat-Alternates': ['Montserrat Alternates','sans-serif'],
        'Dongle': ['Dongle', 'sans-serif'],
        'Kanit': ['Kanit', 'sans-serif'],
        'Righteous': ['Righteous', 'cursive']

      }
    },
  },
  plugins: [],
}
