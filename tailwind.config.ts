import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "beige-50": "#FEFAE0",
        "beige-100": "#fcf4d7",
        "primary-100": "#E9EDC9",
        "primary-300": "#CCD5AE",
        "primary-500": "#8d9f87",
        "secondary-400": "#FAEDCD",
        "secondary-500":"#DA4A373",
      },
      fontFamily: {
        dmsans: ["DM Sans,", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        abstractwaves: "url(./assets/AbstractWaves.png)",
        sparkles: "url(./assets/AbstractWaves.png)",
        circles: "url(./assets/Circles.png)"
      }
    },
    screens:{
      //set up default breakpoints
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}
export default config
