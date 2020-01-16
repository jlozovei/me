import styled from 'styled-components';

export const StyledCard = styled.div`
  position: relative;

  h3 {
    margin-bottom: 0.5rem;
  }
`;

export const StyledLinks = styled.div`
  margin-top: 0.5rem;

  a {
    display: inline-block;
    position: relative;
    font-size: 0.875rem;
    font-weight: bold;
    text-transform: uppercase;

    & + a {
      margin-left: 0.875rem;
    }
  }
`;
