import styled from "styled-components";

const StyledHeader = styled.header`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2a2b3e;
  margin-bottom: 2rem;

  h1 {
    margin-bottom: 0;
  }

  nav a {
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }
`;

export default StyledHeader;
