import css from 'styled-jsx/css';

const StyledBlogList = css`
  .post-list {
    padding-inline-start: 0;
  }
  .post {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
  }
  .post .post-date {
    margin-bottom: 0.25rem;
  }
`;

export default StyledBlogList;
