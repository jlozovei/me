import React from 'react';

import { Container } from 'assets/styled';
import { StyledFooter } from './styled';

const Footer = ({ lang }) => {
  const currentYear = new Date().getFullYear();
  const text = lang === 'en' ? "Cookies free, you're welcome." : 'Livre de cookies, disponha.';

  return (
    <StyledFooter>
      <Container>
        <p>{text}</p>
        <small>jlozovei | {currentYear}</small>
      </Container>
    </StyledFooter>
  );
};

Footer.defaultProps = {
  lang: 'en'
};

export { Footer };
