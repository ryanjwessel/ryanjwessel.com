import styled, { keyframes } from "styled-components";

const blink = keyframes`
  from, to {
    background-color: transparent;
    border: 1px solid #dc09c1;
  }

  50% {
    background-color: #dc09c1;
    border: 1px solid transparent;
  }
`;

const BlinkingCursor = styled.span`
  margin: -1px;
  animation: ${blink} 1s step-end infinite;
  display: inline-block;
  width: 0.5rem;
  height: 1rem;
`;

export default BlinkingCursor;
