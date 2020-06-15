import React from 'react';
import PropTypes from 'prop-types';

const StyledAvatar = ({ src, alt }) => (
  <>
    <img src={src} alt={alt} />
    <style jsx>{`
      img {
        width: 42px;
        height: 42px;
        border-radius: 21px;
        margin-right: 1rem;
      }
    `}</style>
  </>
);

StyledAvatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default StyledAvatar;
