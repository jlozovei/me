import React from 'react';

import { Footer } from 'components/Footer';

import { GlobalBody, GlobalTypography, Container } from 'assets/styled';
import { StyledPage } from './styled';

const NotFoundTemplate = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalBody />
      <GlobalTypography />

      <StyledPage>
        <Container>{children}</Container>
      </StyledPage>

      <Footer />
    </React.Fragment>
  );
};

export { NotFoundTemplate };
