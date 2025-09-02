/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkDream: {
          50: '#F8CACF',
          100: '#F6AEAE',
          200: '#F49C9C',
          300: '#F18585',
        },
        lilacDream: {
          50: '#EED5FB',
          100: '#E4BEF8',
          200: '#D5A8F2',
          300: '#CB90F1',
          400: '#C174F2',
        },
      },
    },
  },
  plugins: [],
}
