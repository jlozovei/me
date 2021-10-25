import styled from 'styled-components';

import { Page } from 'assets/styled';

const StyledPage = styled(Page)`
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    max-width: 12rem;
    margin: 0 auto 4rem;
  }

  p {
    margin-bottom: 0;
  }

  ul {
    margin-top: 2rem;
  }
`;

export { StyledPage };
