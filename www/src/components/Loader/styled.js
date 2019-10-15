import styled, { css, keyframes } from 'styled-components';

const grow = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }

  85% {
    transform: scale(.85);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

export const StyledLoader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;

  &:before {
    display: block;
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 100%;
    animation: ${grow} 1s linear infinite;
    animation-fill-mode: backwards;
  }

  p {
    margin-top: 0.5rem;
  }

  ${props =>
    props.global &&
    css`
      width: 100%;
      height: 100%;
      flex: 1;

      &:before {
        width: 6rem;
        height: 6rem;
      }
    `}
`;
