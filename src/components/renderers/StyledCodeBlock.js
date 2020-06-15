import React from 'react';

const StyledCodeBlock = () => (
  <style jsx>{`
    div {
      margin: 0 -1.25rem 1rem;
    }
    @media only screen and (min-width: 1280px) {
      div {
        margin: 0 -4rem 1rem;
      }
    }
  `}</style>
);

export default StyledCodeBlock;
