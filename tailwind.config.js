/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{html,js}",
//     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     container: {
//       center: true
//     },
//     extend: {},
//   },
//   plugins: [
//     // require("daisyui"),
//     require('flowbite/plugin')
//   ]
// }

const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors')

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
             //just add this below and your all other tailwind colors willwork
          ...colors
      }
  },
    extend: {},
  }
});
