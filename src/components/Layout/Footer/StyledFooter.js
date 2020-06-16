import css from 'styled-jsx/css';
import { colors } from 'src/styles/theme';

const StyledFooter = css`
  footer {
    height: 3rem;
    margin: 0;
    color: ${colors.light.typography.secondary};
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }
  a.icon-link {
    cursor: pointer;
    font-size: 0;
    margin: 0 0.25rem;
  }
  a.icon-link:hover :global(svg.icon) {
    fill: ${colors.light.darkAccent};
  }
  :global(svg.icon) {
    fill: ${colors.light.typography.secondary};
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export default StyledFooter;
