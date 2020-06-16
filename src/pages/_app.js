import React from 'react';
import PropTypes from 'prop-types';
import StyledApp from 'src/styles/app';

const App = ({ Component, pageProps }) => {
  return (
    <div className="app-container">
      <Component {...pageProps} />
      <style jsx global>
        {StyledApp}
      </style>
    </div>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
