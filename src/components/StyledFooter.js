import React from 'react';
import { colors } from 'src/styles/theme';

const StyledFooter = () => (
  <style jsx>{`
    footer {
      height: 4.5rem;
      padding: 0.5rem 0;
      font-size: 0.75rem;
      color: ${colors.light.typography.secondary};
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
    }
    a {
      margin: 0 0.25rem;
      color: ${colors.light.typography.secondary};
    }
    a.icon-link {
      cursor: pointer;
      font-size: 0;
    }

    a.icon-link:hover svg {
      fill: ${colors.light.darkAccent};
    }

    svg {
      fill: ${colors.light.typography.secondary};
      width: 1.5rem;
      height: 1.5rem;
    }

    @media only screen and (min-width: 768px) {
      height: 3rem;
      font-size: 1rem;
    }
  `}</style>
);

export default StyledFooter;
