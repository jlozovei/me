import styled from 'styled-components';

import { StyledContainer } from 'assets/styled';

export const StyledHeader = styled.header`
  position: relative;
  padding: 1rem 0;
`;

export const StyledOptions = styled.div`
  position: relative;
`;

export const StyledFlexContainer = styled(StyledContainer)`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  justify-content: space-between;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    li {
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;

      a {
        &.active {
          color: #27b8ff;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    flex-flow: column-reverse;
    align-items: center;

    ${StyledOptions} {
      border-bottom: 1px solid #c1c1c1;
      margin-bottom: 0.25rem;
      padding-bottom: 0.25rem;
    }
  }
`;
