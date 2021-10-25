import React from 'react';

import { Default } from 'templates/Default';

import { Container, Section, SectionWatermark } from 'assets/styled';

import { language, isEn } from 'helpers/language';

const ExperienceTemplate = ({ title, heading, work, academic, location }) => {
  const lang = language(location.pathname);
  const pageTitle = isEn(lang) ? 'Experience and formation' : 'Experiência e formação';

  return (
    <Default
      location={location}
      meta={{
        title: pageTitle
      }}
    >
      <SectionWatermark>
        <Container>
          <h1>{title}</h1>

          {heading}
        </Container>
      </SectionWatermark>

      <Section>
        <Container>{work}</Container>
      </Section>

      <Section>
        <Container>{academic}</Container>
      </Section>
    </Default>
  );
};

export { ExperienceTemplate };
