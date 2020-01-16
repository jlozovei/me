import styled from 'styled-components';
import { StyledCard } from 'components/Card/styled';

export const StyledCardList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  justify-content: flex-start;
  position: relative;
  margin: 2rem -1rem;

  li {
    flex-basis: 100%;
    padding: 1rem;
    list-style: none;

    & + li {
      margin-top: 1rem;
    }

    ${StyledCard} {
      height: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    li {
      flex-basis: 50%;

      & + li {
        margin: 0;
      }
    }
  }
`;
