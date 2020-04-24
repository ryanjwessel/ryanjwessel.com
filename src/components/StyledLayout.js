import styled from "styled-components";

const StyledLayout = styled.section`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 4rem 1.25rem 1.5rem;

  .content {
    flex-grow: 1;
  }
`;

export default StyledLayout;
