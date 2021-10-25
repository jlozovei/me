import React from 'react';

import { Default } from 'templates/Default';
import { PortfolioList } from 'components/Portfolio';

import { Container, SectionWatermark } from 'assets/styled';

import { language, isEn } from 'helpers/language';

const PortfolioTemplate = ({ title, content, location, items }) => {
  const lang = language(location.pathname);
  const pageTitle = isEn(lang) ? 'Portfolio' : 'Portfólio';

  return (
    <Default location={location} meta={{ title: pageTitle }}>
      <SectionWatermark>
        <Container>
          <h1>{title}</h1>

          {content}

          <PortfolioList items={items} />
        </Container>
      </SectionWatermark>
    </Default>
  );
};

export { PortfolioTemplate };
