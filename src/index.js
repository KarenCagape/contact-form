import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import WebFont from "webfontloader";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import "normalize.css";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box;
    }
`;

WebFont.load({
  typekit: { id: "wdx3hrh" }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

//Sandbox https://codesandbox.io/s/github/KarenCagape/contact-form
