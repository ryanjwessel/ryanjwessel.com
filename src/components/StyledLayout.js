import React from 'react';

const StyledLayout = () => (
  <style jsx>{`
    section {
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      max-width: 800px;
      margin: 0 auto;
      padding: 0 1.25rem 0;
    }

    .content {
      flex-grow: 1;
    }

    @media only screen and (min-width: 1280px) {
      padding: 0 4rem 0;
    }
  `}</style>
);

export default StyledLayout;
