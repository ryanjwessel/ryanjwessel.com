import styled from "styled-components";

const StyledHeader = styled.header`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    margin-bottom: 0;
  }

  nav a {
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      color: #0451a5;
    }
  }
`;

export default StyledHeader;
