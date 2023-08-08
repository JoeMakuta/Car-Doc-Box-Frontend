/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // app content
    `./**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main_color: "#D37E2F",
      },
    },
  },
  plugins: [],
};
