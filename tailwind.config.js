/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'humo': "url('./assets/img/Fondos/fondo.jpg')",
        'andrea': "url('./assets/img/Fondos/fondoSobreMi.png')"
      }
    },
    screens: {
      'custom': '426px', // breakpoint personalizado para > 425px
      
    },
  },
  plugins: [],
};
