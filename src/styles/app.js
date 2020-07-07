import css from 'styled-jsx/css';
import { colors } from 'src/styles/theme';

const StyledApp = css.global`
  * {
    box-sizing: inherit;
    line-height: 1.5;
  }
  ::selection {
    background-color: ${colors.light.accent};
    color: ${colors.light.background};
  }
  html {
    box-sizing: border-box;
    overflow-y: scroll;
  }
  body {
    margin: 0;
    overflow-x: hidden;
    background-color: ${colors.light.background};
    color: ${colors.light.typography.primary};
    font-family: 'Ubuntu', Arial, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a,
  .link {
    color: ${colors.light.accent};
    text-decoration: none;
  }
  a:hover,
  .link:hover {
    cursor: pointer;
    color: ${colors.light.darkAccent};
  }
  img {
    max-width: 100%;
  }
  strong {
    font-weight: bold;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li,
  table {
    font-family: 'Ubuntu', Arial, sans-serif;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 1rem;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    letter-spacing: -0.5px;
    color: inherit;
    text-rendering: optimizeLegibility;
  }
  h1 {
    font-size: 1.75rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  h3,
  h4 {
    font-size: 1.25rem;
  }
  h5,
  h6 {
    font-weight: normal;
    font-style: italic;
  }
  blockquote {
    margin: 0.5rem 0;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 0.25rem solid ${colors.light.accent};
    background-color: #f3f3f3;
  }
  @media (min-width: 1280px) {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      letter-spacing: -1px;
    }
    h1 {
      letter-spacing: -1px;
    }
    h2 {
      letter-spacing: -0.75px;
    }
    h3 {
      letter-spacing: -0.5px;
      font-weight: normal;
    }
  }
`;

export default StyledApp;
