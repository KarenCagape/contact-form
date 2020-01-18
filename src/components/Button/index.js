import styled from "styled-components";
import { variant, layout } from "styled-system";

const Button = styled("a")(
  layout,
  ({ theme }) => ({
    fontFamily: theme.fonts.default,
    fontWeight: theme.fontWeights.semibold,
    fontSize: 18,
    lineHeight: "0.8888888rem",
    textAlign: "center",
    padding: "12px 20px 14px",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 0,
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 0.3s ease-in-out",
    display: 'block',
    [theme.mediaQueries.md]: {
        display: 'inline-block',
        paddingRight: 30,
        paddingLeft: 30,
        minWidth: 200
    }
  }),
  variant({
    variants: {
      default: {
        borderColor: "primary",
        backgroundColor: "transparent",
        color: "primary",
        ":hover": {
          backgroundColor: "primary",
          color: "white"
        }
      },
      white: {
        borderColor: "white",
        backgroundColor: "white",
        color: "primary",
        ":hover": {
          color: "secondaryDarker",
          borderColor: "secondaryDarker",
        }
      }
    }
  })
);

export default Button;
