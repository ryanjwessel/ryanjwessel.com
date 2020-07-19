import React from 'react';

// FIXME: I am not sure why this SVG requires a viewBox, but without it the icon expands outside of the container.
const YouTube = () => (
  <svg className="icon" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,6 L39.5,6 C41.709139,6 43.5,7.790861 43.5,10 L43.5,39.5 C43.5,41.709139 41.709139,43.5 39.5,43.5 L10,43.5 C7.790861,43.5 6,41.709139 6,39.5 L6,10 C6,7.790861 7.790861,6 10,6 Z M33.3648649,24.75 L18.1621622,17.1486486 L18.1621622,32.3513514 L33.3648649,24.75 Z"></path>
  </svg>
);

export default YouTube;
