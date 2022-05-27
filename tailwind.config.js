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
          300: '#6E6E6E',
          400: '#E2E2E2',
          500: '#9F9F9F',
          700: '#FBFBFB',
          800: '#F8F8F8',
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