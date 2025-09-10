import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    border: string;
    shadow: {
      surface: string;
      detail: string;
    }
    rounded: {
      xs: string;
      sm: string;
      xl: string;
    };
    colors: {
      bg: string;
      surface: string;
      textPrimary: string;
      textAccent: string;
    }
  }
}