import React from 'react';
import PropTypes from 'prop-types';

const ImageRenderer = ({ src, alt }) => (
  <img className="markdown-image" src={src} alt={alt} />
);

ImageRenderer.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageRenderer;
