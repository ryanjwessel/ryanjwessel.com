import React from 'react';
import PropTypes from 'prop-types';

const LinkRenderer = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer noopener">
      {props.children}
    </a>
  );
};

LinkRenderer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  href: PropTypes.string,
};

LinkRenderer.defaultProps = {
  href: '',
};

export default LinkRenderer;
