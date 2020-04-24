import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 2rem;
  padding: 0 1rem;
  font-size: 0.75rem;
  background-color: #15161f;
  color: #94959e;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left,
  .right {
    display: flex;
    align-items: center;
  }

  svg {
    fill: #94959e;
    width: 1rem;
    height: 1rem;
  }

  a {
    color: #94959e;
    &.icon-link {
      font-size: 0;
    }
  }

  &:hover {
    background-color: #000;
    color: #fff;
    svg {
      fill: #fff;
    }
    a {
      color: #fff;
    }
  }
`;

export default StyledFooter;
