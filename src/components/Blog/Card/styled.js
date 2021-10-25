import styled from 'styled-components';

import { colors, fonts } from 'assets/styled';

const StyledCard = styled.div`
  position: relative;
  padding: 1rem 0;
`;

const StyledCardBody = styled.div`
  margin-top: 1rem;

  h3 {
    margin-bottom: 0.5rem;
    color: ${colors.white};
  }

  p {
    margin-bottom: 1rem;
  }

  span {
    position: relative;
    display: inline-block;
    font-family: ${fonts.title};
    font-size: 0.875rem;
    font-weight: bold;
    color: ${colors.white};
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 1px;
  }
`;

export { StyledCard, StyledCardBody };
