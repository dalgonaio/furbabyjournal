import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    //All of the files tailwind applies to in src
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "beige-50": "#fff7ed",
        "beige-100": "#ffedd5",
        "primary-400": "#84A98C",
        "primary-500":"#52796F",
        "secondary-100": "#92400e",
        "secondary-300": "#78350f",
        "secondary-500": "#451a03",
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
