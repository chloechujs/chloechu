/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#E76D02",
        "primary-gray": "#ECECEC",
      },
      fontFamily: {
        mango: ["Mango Grotesque", "sans-serif"],
      },
      spacing: {
        "400": "400px",
      },
    },
  },
  plugins: [],
};
