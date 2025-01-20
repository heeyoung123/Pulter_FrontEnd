import "styled-components";

const colors = {
  primary1: "#51B1A6",
  primary2: "#9CE5CB",
  primary3: "#EAF6E4",
  titleGreen: "#83CA92",
  green: "#AEE2D6",
  backGray: "#F6F6F6",
  iconGray: "#ECEFF6",
  black: "#3D3D3D",
  gray: "#5A5A75",
  blue: "#95D6FF",
  white: "#FFFFFF",
  border: "#E2E2E2",
};
export const lightTheme = {
  color: "#FFFFFF",
  bgColor: "#000000",
  gray: "#D9D9D9",
};
const fontSize = {
  s: "0.815rem",
  m: "1rem",
  lg: "1.25rem",
  xl: "1.94rem",
};
const fontWeight = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
};
const size = {
  xs: "0.5rem",
  s: "1rem",
  m: "1.5rem",
};
const borderRadius = {
  xs: "0.25rem",
  sm: "0.5rem",
  base: "0.75rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "2.63rem",
  "3xl": "3.13rem",
  "4xl": "6.25rem",
};
const theme = {
  colors,
  lightTheme,
  fontSize,
  size,
  fontWeight,
  borderRadius,
};

export default theme;

/** 타입 재정의를 위함 ( "styled-components" 변수 타입 추론을 위함( 자동완성 ) ) */
export type Theme = typeof theme;
