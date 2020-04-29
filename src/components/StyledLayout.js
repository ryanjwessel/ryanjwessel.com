import styled from "styled-components";

const StyledLayout = styled.section`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.25rem 4.5rem;

  .content {
    flex-grow: 1;
  }

  @media only screen and (min-width: 768px) {
    padding-bottom: 3rem;
  }
`;

export default StyledLayout;
