module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
