import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import '../styles/defaults.css';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};
// TODO: Actually use the values provided by ThemeProvider.

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
