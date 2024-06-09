import '@emotion/react';
import { ThemeType } from '@/types/theme';

declare module '@emotion/react' {
  export interface Theme extends ThemeType {
    // Add your custom theme types
    fontSizes: {
      base: string,
      xs: string,
      sm: string,
      md: string,
      lg: string,
      xl: string,
      '2xl': string,
      '3xl': string,
      '4xl': string,
      '5xl': string,
      '6xl': string,
    },
    fontWeights: {
      normal: number,
      medium: number,
      semibold: number,
      bold: number,
    }
  }
}
