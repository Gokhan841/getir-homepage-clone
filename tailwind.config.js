const { HiColorSwatch } = require("react-icons/hi");
const { ImTextColor } = require("react-icons/im");

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "0.1": "0.063rem"
      },
      colors: {
        'brand-color': '#4c3398',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7',
        'brand-yellow': '#ffd300',
      },
      backgroundImage: {
        'purple-image': "url('https://cdn.getir.com/getirweb-images/common/illustration/doodle.png')",
      },
    },
  },
  plugins: [],
}
