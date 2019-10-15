import styled from 'styled-components';

import { StyledContainer } from 'assets/styled';

export const StyledFooter = styled.footer`
  position: relative;
  padding: 2rem 0;
`;

export const StyledFlexContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;

  p {
    font-size: 1rem;
  }
`;
