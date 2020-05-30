import styled from "styled-components";

const StyledBlogList = styled.div`
  .post-list {
    padding-inline-start: 0;
  }
  .post {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
  }
  .post .post-date {
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }
  .post .post-title {
    font-size: 1.2rem;
  }
`;

export default StyledBlogList;
