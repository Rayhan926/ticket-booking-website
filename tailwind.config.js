module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4FBDE6",
        dark: {
          DEFAULT: "#0A1A34",
          500: '#9F9F9F',
          900: '#FCFCFC'
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}