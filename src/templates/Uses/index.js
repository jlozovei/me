import React from 'react';

import { Default } from 'templates/Default';
import { UsesList } from 'components/Uses';

import { Container, SectionWatermark } from 'assets/styled';

import { language, isEn } from 'helpers/language';

const UsesTemplate = ({ title, content, location, items }) => {
  const lang = language(location.pathname);
  const pageTitle = isEn(lang) ? 'Uses' : 'Eu uso';

  return (
    <Default location={location} meta={{ title: pageTitle }}>
      <SectionWatermark>
        <Container>
          <h1>{title}</h1>

          {content}

          <UsesList categories={items} />
        </Container>
      </SectionWatermark>
    </Default>
  );
};

export { UsesTemplate };
