import styled from "styled-components";
import StyledTerminalIcon from "./StyledTerminalIcon";

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
    cursor: pointer;
    display: flex;
    align-items: center;

    &:active {
      color: #dc09c1;

      ${StyledTerminalIcon} {
        background-color: #dc09c1;
      }
    }
  }
`;

export default StyledHeader;
