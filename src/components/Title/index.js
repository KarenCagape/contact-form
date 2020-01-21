import React from "react";
import styled from "styled-components";
import { space, color, typography } from "styled-system";
import css from "@styled-system/css";

const H1 = styled("h1")(color, space, typography, ({ theme }) =>
  css({
    fontSize: theme.fontSizes.h1,
    lineHeight: theme.lineHeights.h1
  })
);

const H2 = styled("h2")(color, space, typography, ({ theme }) =>
  css({
    fontSize: theme.fontSizes.h2,
    lineHeight: theme.lineHeights.h2
  })
);

const H3 = styled("h3")(color, space, typography, ({ theme }) =>
  css({
    fontSize: theme.fontSizes.h3,
    lineHeight: theme.lineHeights.h3
  })
);

const H4 = styled("h4")(color, space, typography, ({ theme }) =>
  css({
    fontSize: theme.fontSizes.h4,
    lineHeight: theme.lineHeights.h4
  })
);

const H5 = styled("h5")(color, space, typography, ({ theme }) =>
  css({
    fontSize: theme.fontSizes.h5,
    lineHeight: theme.lineHeights.h5
  })
);

const H6 = styled("h6")(color, space, typography, ({ theme }) =>
  css({
    fontSize: theme.fontSizes.h6,
    lineHeight: theme.lineHeights.h6
  })
);

function Title(props) {
  if (props.heading === "h2") {
    return <H2 {...props} />;
  } else if (props.heading === "h3") {
    return <H3 {...props} />;
  } else if (props.heading === "h4") {
    return <H4 {...props} />;
  } else if (props.heading === "h5") {
    return <H5 {...props} />;
  } else if (props.heading === "h6") {
    return <H6 {...props} />;
  } else {
    return <H1 {...props} />;
  }
}

export default Title;
