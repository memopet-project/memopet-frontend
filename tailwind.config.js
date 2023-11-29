/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        pretendard: [
          'Pretendard'
        ],
        header: [
          'Newake'
        ]
      },
      colors: {
        'mainRed': '#F15139',
        'subRed' : '#FFEDEA',
        'surface': '#F7F5F1',
        'surfaceComment' : '#FAFAFA',
        'maingray' : '#D4D4D4',
        'textGray' : '#A3A3A3',
        'textBlack' : '#171717',
        'borderBlack' : '#404040',
        'textdarkgray': '#737373',
      }
    },
  },
  plugins: [],
}
