import React from 'react';

import { StyledContainer } from 'assets/styled';

import { StyledPage } from './styled';

const Page = ({ children }) => {
  return (
    <StyledPage className="page">
      <StyledContainer>{children}</StyledContainer>
    </StyledPage>
  );
};

export default Page;
