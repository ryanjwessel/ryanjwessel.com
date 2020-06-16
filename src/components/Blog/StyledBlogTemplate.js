import css from 'styled-jsx/css';
import { colors } from 'src/styles/theme';

const StyledBlogTemplate = css`
  :global(code.markdown-inline-code) {
    color: ${colors.light.typography.code};
  }
  :global(img.markdown-image) {
    display: block;
    margin: 0 auto;
  }
  :global(.article-footer-card) {
    border: 1px solid ${colors.light.border};
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 2rem 0;
  }
`;

export default StyledBlogTemplate;
