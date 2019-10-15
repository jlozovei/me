import styled, { css } from 'styled-components';

export const StyledListInline = styled.ul`
  ${props =>
    !props.header &&
    css`
      margin-top: 1.5rem;
    `}

  margin-left: -0.5rem;
  margin-right: -0.5rem;

  li {
    display: inline-block;

    a,
    button {
      padding: 0.5rem;
      cursor: pointer;
      font-size: 0.875rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }
`;
