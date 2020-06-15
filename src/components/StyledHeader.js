import React from 'react';
import { colors } from 'src/styles/theme';

const StyledHeader = () => (
  <style jsx>{`
    header {
      height: 4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }
    h1 {
      margin-bottom: 0;
    }
    nav a {
      cursor: pointer;
      display: flex;
      align-items: center;
      color: ${colors.light.accent};
    }
    nav a:hover {
      color: ${colors.light.darkAccent};
    }
  `}</style>
);

export default StyledHeader;
