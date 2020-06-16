import React from 'react';
import PropTypes from 'prop-types';

const StyledBanner = ({ src, alt }) => (
  <>
    <img src={src} alt={alt} />
    <style jsx>{`
      img {
        max-width: initial;
        width: calc(100% + 2.5rem);
        margin: 0 -1.25rem;
      }
    `}</style>
  </>
);

StyledBanner.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default StyledBanner;
