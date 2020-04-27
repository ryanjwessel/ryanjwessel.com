import styled from "styled-components";

/**
 * FIXME: This is not really a terminal icon component. It inverts the colors for the children it wraps.
 * Update this when I add theme support to reflect this.
 */
const StyledTerminalIcon = styled.span`
  background-color: #fff;
  color: #292c3e;
  padding: 3px;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid transparent;
  border-radius: 4px;
  margin-right: 1rem;
  line-height: initial;
`;

export default StyledTerminalIcon;
