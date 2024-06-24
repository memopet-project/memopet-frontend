import '@emotion/react';
import { ThemeType } from '@/types/theme';

declare module '@emotion/react' {
  export interface Theme extends ThemeType {
    // Add your custom theme types
    colors: {
      [key: string]: {
        [key: string]: string;
      }
    },
    statusColors: {
      [key: string]: string;
    },
    backgroundColors: {
      [key: string]: string;
    },
    fontFamily: {
      [key: string]: string;
    },
    fontSizes: {
      xs: string | number,
      sm: string | number,
      ls: string | number,
      md: string | number,
      base: string | number,
      lg: string | number,
      xl: string | number,
      '2xl': string | number,
      '3xl': string | number,
      '4xl': string | number,
      '5xl': string | number,
      '6xl': string | number,
      '7xl': string | number,
      '8xl': string | number,
      '9xl': string | number,
    },
    fontWeights: {
      normal: number,
      medium: number,
      semibold: number,
      bold: number,
    },
    keyframes: {
      rotation: {
        [key: string]: {
          transform: string;
        }
      },
      slideDown: {
        from: {
          height: string | number;
          overflow: string;
        },
        to: {
          height: string | number;
          overflow: string;
        }
      },
      slideUp: {
        from: {
          height: string | number;
          overflow: string;
        },
        to: {
          height: string | number;
          overflow: string;
        }
      }
    },
    device: {
      mobile: string,
    },
  }
}
