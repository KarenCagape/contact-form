import styled from "styled-components";
import { flexbox, layout } from "styled-system";
import css from "@styled-system/css";

const Container = styled("div")(
  {
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: "auto",
    marginRight: "auto"
  },
  css({
    maxWidth: [null, 540, 720, 960, 1140]
  })
);

const Row = styled("div")(flexbox, {
  display: "flex",
  flexWrap: "wrap",
  marginLeft: -15,
  marginRight: -15
});

const Column = styled("div")(
  {
    paddingLeft: 15,
    paddingRight: 15,
    position: "relative",
    width: "100%"
  },
  flexbox,
  layout
);

export { Container, Row, Column };
