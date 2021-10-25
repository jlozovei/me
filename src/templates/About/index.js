import React from 'react';

import { Default } from 'templates/Default';

import { Container, SectionWatermark } from 'assets/styled';
import { StyledTextContainer } from './styled';

import { language, isEn } from 'helpers/language';

const AboutTemplate = ({ title, content, location }) => {
  const lang = language(location.pathname);
  const pageTitle = isEn(lang) ? 'About me' : 'Sobre mim';

  return (
    <Default
      location={location}
      meta={{
        title: pageTitle
      }}
    >
      <SectionWatermark>
        <Container>
          <StyledTextContainer>
            <h1>{title}</h1>

            {content}
          </StyledTextContainer>
        </Container>
      </SectionWatermark>
    </Default>
  );
};

export { AboutTemplate };
