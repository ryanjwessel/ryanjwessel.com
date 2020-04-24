import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);
