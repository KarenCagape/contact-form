import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import WebFont from "webfontloader";
import { ThemeProvider } from "styled-components";

import "normalize.css";
import theme from "./theme";

WebFont.load({
  typekit: { id: "wdx3hrh" }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
