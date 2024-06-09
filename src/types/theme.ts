export const theme = {
  colors: {
    primary: {
      0: '#ffffff',
      50: '#ffedea',
      100: '#fcdcd7',
      200: '#fab9b1',
      300: '#f69888',
      400: '#f47460',
      500: '#f15139',
      600: '#c2412e',
      700: '#913121',
      800: '#612017',
      900: '#30100a',
    },
    secondary: {
      yellow: '#ffd223',
      sky: '#8ccaff',
      green: '#73e390',
      pink: '#ff91b9',
      purple: '#c7a5ff',
    },
    grey: {
      0: '#ffffff',
      50: '#fafafa',
      100: '#f2f2f2',
      200: '#e6e6e6',
      300: '#d4d4d4',
      400: '#b3b3b3',
      500: '#949494',
      600: '#757575',
      700: '#525252',
      800: '#333333',
      900: '#171717',
    },
  },
  statusColors: {
    success: '#56bc44',
    danger: '#e43333',
    warning: '#f1b419',
    info: '#129eed',
  },
  backgroundColors: {
    default: '#f7f5f1',
    surface: '#ffffff',
  },
  fontFamily: {
    body: "'Pretendard GOV Variable'",
  },
  fontSizes: {
    base: '16px',
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  keyframes: {
    rotation: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  },
};

export type ThemeType = typeof theme;
