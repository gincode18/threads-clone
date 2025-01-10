/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
 theme: {
    extend: {
      colors: {
        // Define your custom colors here
        'primary': '#3B82F6',
        'secondary': '#10B981',
      },
      // You can add other theme customizations
      spacing: {
        'custom-spacing': '2.5rem',
      },
    },
  },
  plugins: [],
}
