const breakpoints = ['576px', '768px', '992px', '1200px', '1452px']

breakpoints.sm = "576px";
breakpoints.md = "768px";
breakpoints.lg = "992px";
breakpoints.xl = "1200px";
breakpoints.xxl = "1452px";

export default {
  breakpoints,
  mediaQueries: {
    sm: `@media screen and (min-width: ${breakpoints.sm})`,
    md: `@media screen and (min-width: ${breakpoints.md})`,
    lg: `@media screen and (min-width: ${breakpoints.lg})`,
    xl: `@media screen and (min-width: ${breakpoints.xl})`,
    xxl: `@media screen and (min-width: ${breakpoints.xxl})`
  },
  fontSizes: {
    body: ['16px', '16px', '16px'],
    h1: ['40px', '40px', '45px'],
    h2: ['32px', '32px', '40px'],
    h3: ['32px', '32px', '35px'],
    h4: ['24px', '24px', '30px'],
    h5: ['20px', '20px', '24px'],
    h6: ['18px', '18px', '20px'],
    small: ['13px', '13px', '14px'],
    button: ['18px', '18px', '18px']
  },
  lineHeights: {
    body: ["1.5"],
    h1: ["normal"],
    h2: ["normal"],
    h3: ["normal"],
    h4: ["normal"],
    h5: ["normal"],
    h6: ["normal"],
    small: ["2", "1.86"]
  },
  fontWeights: {
    light: "300",
    normal: "400",
    semibold: "600",
    bold: "700",
    black: "900"
  },
  fonts: {
    default: "source-sans-pro, sans-serif"
  },
  colors: {
    body: "#6C6A8D",
    primary: "#6963FF",
    secondary: "#2A1B4D",
    secondaryDarker: "#231641",
    tertiary: "#00F7FF",
    white: "#fff",
    black: "#000"
  },

};
