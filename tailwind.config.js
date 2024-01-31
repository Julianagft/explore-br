/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: '#D92949',
        blue: '#3BC9D9',
        purple: '#5E53A6',
        green: '#95BF39',
        orange: '#F26430',
      },
    },
  },
  plugins: [],
};
