import React from 'react';
import PropTypes from 'prop-types';
import StyledApp from 'src/components/StyledApp';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <StyledApp />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
