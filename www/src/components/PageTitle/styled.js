import styled from 'styled-components';

export const StyledTitle = styled.h1`
  position: relative;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  text-transform: lowercase;

  &:after {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0.25rem;
    width: 2rem;
    background-color: #ff7827;
  }
`;
