import React from "react";
import { ThemeProvider } from "styled-components";
import "../styles/defaults.css";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};
// TODO: Actually use the values provided by ThemeProvider.

export default ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);
