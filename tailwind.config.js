/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animationDelay: {
        1: '0.1s',
        2: '0.2s',
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        Mobilefall: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        fall: 'fall 2s ease-in-out',
        Mobilefall: 'Mobilefall 2s ease-in-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        pretendard: ['pretendard'],
        gothic: ['KBO Dia Gothic'],
        header: ['Newake'],
      },
      textColor: {
        redBlur: '#FFEDEA',
        redDark: '#DB4B35',
        red01: '#FCDCD7',
        red02: '#FAB9B1',
        red03: '#F69888',
        red04: '#F47460',
        red05: '#F15139',
        red06: '#C2412E',
        red07: '#913121',
        red08: '#612017',
        red09: '#30100A',

        blueBlur: '#E9EDF8',
        blue01: '#D3D9F0',
        blue02: '#A7B4E1',
        blue03: '#7A8ED1',
        blue04: '#4E69C2',
        blue05: '#2243B3',
        blue06: '#1B368F',
        blue07: '#14286B',
        blue08: '#0E1B48',
        blue09: '#070D24',

        grayBlur: '#FAFAFA',
        'gray0.5': '#F3F3F3',
        gray01: '#F5F5F5',
        gray02: '#E5E5E5',
        gray03: '#D4D4D4',
        gray04: '#A3A3A3',
        gray05: '#737373',
        gray06: '#525252',
        gray07: '#404040',
        gray08: '#262626',
        gray09: '#171717',

        surface: '#F8F8FB',

        statusYellow: '#F1B419',
        statusBlue: '#36AAEB',
        statusGreen: '#56BC44',
        statusRed: '#E73324',

        errorRed: '#E43333',
      },
      colors: {
        redBlur: '#FFEDEA',
        redDark: '#DB4B35',
        red01: '#FCDCD7',
        red02: '#FAB9B1',
        red03: '#F69888',
        red04: '#F47460',
        red05: '#F15139',
        red06: '#C2412E',
        red07: '#913121',
        red08: '#612017',
        red09: '#30100A',

        blueBlur: '#E9EDF8',
        blue01: '#D3D9F0',
        blue02: '#A7B4E1',
        blue03: '#7A8ED1',
        blue04: '#4E69C2',
        blue05: '#2243B3',
        blue06: '#1B368F',
        blue07: '#14286B',
        blue08: '#0E1B48',
        blue09: '#070D24',

        grayBlur: '#FAFAFA',
        'gray0.5': '#F3F3F3',
        gray01: '#F5F5F5',
        gray02: '#E5E5E5',
        gray03: '#D4D4D4',
        gray04: '#A3A3A3',
        gray05: '#737373',
        gray06: '#525252',
        gray07: '#404040',
        gray08: '#262626',
        gray09: '#171717',

        surface: '#F8F8FB',

        statusYellow: '#F1B419',
        statusBlue: '#36AAEB',
        statusGreen: '#56BC44',
        statusRed: '#E73324',

        errorRed: '#E43333',
      },
      transitionProperty: {
        height: 'height',
        maxHeight: 'maxHeight',
        padding: 'padding',
      },
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
};
