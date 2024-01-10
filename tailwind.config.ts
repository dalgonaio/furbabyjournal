import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    //All of the files tailwind applies to in src
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      colors: {
        'gray-20': '#545454',
        'gray-50': '#002244',
        'gray-100': '#5E0000',
        'gray-500': '#545454',
        'beige-0': '#FFFFFF',
        'beige-50': '#F5F5EF',
        'primary-400': '#84A98C',
        'primary-500': '#52796F',
        'secondary-100': '#2e008b',
        'secondary-300': '#00008b',
        'secondary-500': '#002244',
      },
      fontFamily: {
        dmsans: ['DM Sans,', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      content: {
        abstractwaves: 'url(./assets/AbstractWaves.png)',
        sparkles: 'url(./assets/AbstractWaves.png)',
        circles: 'url(./assets/Circles.png)',
      },
    },
    screens: {
      //set up default breakpoints
      xs: '480px',
      sm: '768px',
      md: '1060px',
    },
  },
  plugins: [],
};
export default config;
