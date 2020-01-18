import styled from "styled-components";
import { space, color } from "styled-system";
import css from "@styled-system/css";

const heading = ({ heading }) => heading;

let Title;

if (heading === "h2") {
  Title = styled("h2")(space, color, ({ theme }) => {
    css({
      fontSize: theme.fontSizes.h1,
      lineHeight: theme.lineHeights.h1
    });
  });
} else if (heading === "h3") {
  Title = styled("h3")(space, color, ({ theme }) => {
    css({
      fontSize: theme.fontSizes.h1,
      lineHeight: theme.lineHeights.h1
    });
  });
} else if (heading === "h4") {
  Title = styled("h4")(space, color, ({ theme }) => {
    css({
      fontSize: theme.fontSizes.h1,
      lineHeight: theme.lineHeights.h1
    });
  });
} else if (heading === "h5") {
  Title = styled("h5")(space, color, ({ theme }) => {
    css({
      fontSize: theme.fontSizes.h1,
      lineHeight: theme.lineHeights.h1
    });
  });
} else if (heading === "h6") {
  Title = styled("h6")(space, color, ({ theme }) => {
    css({
      fontSize: theme.fontSizes.h1,
      lineHeight: theme.lineHeights.h1
    });
  });
} else {
  Title = styled("h1")(space, color, ({ theme }) => {
    css({
      fontSize: theme.fontSizes.h1,
      lineHeight: theme.lineHeights.h1
    });
  });
}

export default Title;
