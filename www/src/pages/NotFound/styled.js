import styled from 'styled-components';

import noise from 'assets/images/noise.gif';

export const StyledNotFound = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: url(${noise}) no-repeat center/cover;

  &:before {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(25, 25, 25, 0.75);
  }

  * {
    position: relative;
  }

  img {
    margin: 2rem auto;
    width: 100%;
    max-width: 20rem;
    filter: blur(2px);
    opacity: 0;
    transition: all ease-in-out 100ms;

    &.loaded {
      filter: none;
      opacity: 1;
    }
  }

  p,
  li a {
    font-size: 1.125rem;
    font-weight: bold;
  }
`;
