import styled from 'styled-components';

import { colors, fonts, sizes } from 'assets/styled';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`;

const StyledCardHeader = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 1rem;

  img {
    flex-basis: 4rem;
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
    border-radius: 2px;
    background-color: #fff;
    padding: 0.5rem;
    object-fit: contain;
  }
`;

const StyledCardTitle = styled.div`
  flex-basis: calc(100% - 5rem);

  h3 {
    margin-bottom: 0.25rem;
    font-size: 2rem;
    color: ${colors.white};
  }

  p {
    margin-bottom: 0;
    font-family: ${fonts.title};
    font-size: 0.875rem;
    font-weight: bold;
    color: ${colors.white};
  }
`;

const StyledCardBody = styled.div`
  p {
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: ${sizes.m_tablet_width}) {
    align-self: flex-end;
    flex-basis: calc(100% - 5rem);
    width: calc(100% - 5rem);
  }
`;

export { StyledCard, StyledCardHeader, StyledCardTitle, StyledCardBody };
