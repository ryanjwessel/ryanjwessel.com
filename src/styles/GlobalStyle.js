import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: inherit;
    line-height: 1.5;
    transition: opacity 0.2s ease;
  }
  html {
    box-sizing: border-box;
    overflow-y: scroll;
  }
  body {
    margin: 0;
    overflow-x: hidden;
    background-color: #292c3e;
    color: #fff;
    font-family: "Ubunto Mono", "Lucida Console", monospace;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    text-decoration: underline;
    color: #fff;
  }
  a:hover {
    opacity: 0.5;
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
  li {
    font-family: "Ubunto Mono", "Lucida Console", monospace;
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
  h3, h4 {
    font-size: 1.25rem;
  }
  code, .code {
    border: 1px solid #94959e;
    border-radius: 4px;
    font-size: .9rem;
    padding: .1rem .2rem;
    background-color: #3f4052;
    color: #8bcc57;
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
      ${"" /* font-size: 2rem; */}
      letter-spacing: -1px;
    }
    h2 {
      ${"" /* font-size: 1.5rem; */}
      letter-spacing: -0.75px;
    }
    h3 {
      ${"" /* font-size: 1rem; */}
      letter-spacing: -0.5px;
      font-weight: normal;
    }
  }
`;

export default GlobalStyle;
