import styled from 'styled-components';

export const StyledHeadline = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  text-align: center;

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

  h1 {
    margin-bottom: 0.5rem;
  }

  small {
    margin-bottom: 1rem;
  }
`;
