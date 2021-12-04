module.exports = {
  purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#FFF",
      blue: "#577BC1",
      lightBlue: "#98BAE7",
      black: "#000"
    },

    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
