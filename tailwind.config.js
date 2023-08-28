const newLocal = " bg-gradient-to-r from-gray-500";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '380px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily:{
      sans : ["Georgia", "Times New Roman", "Sans-Serif"],
      serif : ["Merriweather","sans-serif"],
      display : ["Oswald"]
    },
    
    extend: {
      backgroundImage: {
       
      },
    },
  },
  plugins: [],
}
