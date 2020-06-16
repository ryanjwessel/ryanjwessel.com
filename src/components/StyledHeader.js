import css from 'styled-jsx/css';
import { colors } from 'src/styles/theme';

const StyledHeader = css`
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
  nav > a {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: ${colors.light.accent};
  }
  nav > a:hover {
    color: ${colors.light.darkAccent};
  }
`;

export default StyledHeader;
