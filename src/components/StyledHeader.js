import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2a2b3e;

  h1 {
    font-size: 1rem;
    margin-bottom: 0;
  }

  nav {
    display: flex;
    align-items: center;
  }
  nav:hover {
    cursor: pointer;
  }
`;

export default StyledHeader;
