/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f7f7f7',
          '100': '#e3e3e3',
          '200': '#c8c8c8',
          '300': '#a4a4a4',
          '400': '#818181',
          '500': '#666666',
          '600': '#515151',
          '700': '#434343',
          '800': '#383838',
          '900': '#181815',
          '950': '#000000',
        },
        secondary: {
          '50': '#fff6ed',
          '100': '#ffecd4',
          '200': '#ffd4a9',
          '300': '#ffad61',
          '400': '#fe8c39',
          '500': '#fc6b13',
          '600': '#ed5009',
          '700': '#c53a09',
          '800': '#9c2f10',
          '900': '#7e2910',
          '950': '#441206',
        },
      },
    },
  },
  plugins: [
    // require('@tailwindcss/tooltip'),
  ],
}
