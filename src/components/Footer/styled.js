import styled from 'styled-components';

import { colors, Container } from 'assets/styled';

const StyledFooter = styled.footer`
  position: relative;
  padding: 1rem 0;
  background-color: ${colors.black};
  border-top: 1px solid ${colors.shark};

  ${Container} {
    text-align: right;
  }

  p {
    margin-bottom: 0.25rem;
    font-size: 0.875rem;
  }

  small {
    color: ${colors.white};
  }
`;

export { StyledFooter };
