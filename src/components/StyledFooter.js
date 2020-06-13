import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 4.5rem;
  padding: 0.5rem 0;
  font-size: 0.75rem;
  color: #666;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  a {
    margin: 0 0.25rem;
    color: #666;
    &.icon-link {
      cursor: pointer;
      font-size: 0;
    }
  }

  a.icon-link:hover svg {
    fill: #0451a5;
  }

  svg {
    fill: #666;
    width: 1.5rem;
    height: 1.5rem;
  }

  @media only screen and (min-width: 768px) {
    height: 3rem;
    font-size: 1rem;
  }
`;

export default StyledFooter;
