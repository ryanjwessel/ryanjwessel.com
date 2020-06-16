import css from 'styled-jsx/css';
import { layout } from 'src/styles/theme';

const StyledLayout = css`
  div.layout-container {
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 100vh;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1.25rem 0;
  }

  section.content-container {
    min-height: calc(
      100vh - ${layout.height.header} - ${layout.margin.header} -
        ${layout.height.footer}
    );
  }
  @media only screen and (min-width: 1280px) {
    div.layout-container {
      padding: 0 4rem 0;
    }
  }
`;

export default StyledLayout;
