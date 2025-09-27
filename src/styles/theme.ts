import type { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  border: "1px solid #AFAFAF",
  shadow: {
    surface: "1px 1px 7px rgba(0, 0, 0, 0.25)",
    detail: "0px 2px 3px rgba(0, 0, 0, 0.25)",
    detailSmall: "1px 1px 3px rgba(0, 0, 0, 0.15)",
  },
  rounded: {
    xs: "5px",
    sm: "10px",
    xl: "15px",
  },
  colors: {
    bg: "#F4F4F4",
    surface: "#FFFFFF",
    textPrimary: "#818181",
    textAccent: "#626262",
    textError: "#ff4c4cff",
  }
}