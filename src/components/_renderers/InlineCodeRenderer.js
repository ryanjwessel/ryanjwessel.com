import React from 'react';
import PropTypes from 'prop-types';

const InlineCodeRenderer = ({ value }) => (
  <code className="markdown-inline-code">{value}</code>
);

InlineCodeRenderer.propTypes = {
  value: PropTypes.string.isRequired,
};

export default InlineCodeRenderer;
