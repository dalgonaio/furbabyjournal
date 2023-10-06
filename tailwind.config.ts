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
        "beige-50": "#fff7f0",
        "beige-100": "#CAD2C5",
        "primary-100": "#354F52",
        "primary-300": "#2c4555",
        "primary-500": "#2F3E46",
        "secondary-400": "#84A98C",
        "secondary-500":"#52796F",
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
