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
`;

export default StyledBlogList;
