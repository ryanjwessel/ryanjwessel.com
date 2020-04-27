import styled from "styled-components";

const StyledBlogList = styled.div`
  li.post {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 0;
  }
  div.post-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  p.terminal-loop span:not(:first-of-type) {
    display: flex;
    align-items: center;

    &:nth-of-type(2) {
      padding-left: 2rem;
    }
  }
`;

export default StyledBlogList;
