import { TypographyVariant, TypographyComponent, TypographyWeight } from './component';
import { ColorCode, CSSValue } from './css';
import { grey } from '../theme/colors';

export type ThemeType = 'light';

// #TODO 추후 Layer 우선 순위 및 Breakpoints 에 따른 좌우 여백 정립
export interface MrCamelTheme {
  type: ThemeType;
  palette: {
    primary: {
      main: ColorCode;
      dark: ColorCode;
      light1: ColorCode;
      light2: ColorCode;
    };
    secondary: {
      red: {
        main: ColorCode;
      };
      purple: {
        main: ColorCode;
      };
    };
    common: {
      black: ColorCode;
      white: ColorCode;
      grey: typeof grey;
    };
    box: {
      stroke: {
        primary: ColorCode;
        grey: ColorCode;
      };
    };
  };
  typography: {
    [key in TypographyVariant]: {
      component: TypographyComponent;
      size: CSSValue;
      weight: TypographyWeight;
      lineHeight: CSSValue;
      letterSpacing: CSSValue;
    };
  };
  breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

declare module '@emotion/react' {
  export interface Theme extends MrCamelTheme {}
}
