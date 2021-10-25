import React from 'react';

import { Anchor } from 'assets/styled';

import {
  StyledPortfolio,
  StyledPortfolioHeader,
  StyledPortfolioTitle,
  StyledPortfolioBody,
  StyledPortfolioLinks
} from './styled';

const PortfolioCard = ({ project }) => {
  const { title, year, description, url, lang, image } = project;

  const requireImage = (imageName) => {
    try {
      const imageSource = require(`assets/images/portfolio/${imageName}.jpg`);
      return imageSource.default;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledPortfolio data-testid={`portfolio--${title}`}>
      <StyledPortfolioHeader>
        <img src={requireImage(image)} alt={title} />
        <StyledPortfolioTitle>
          <h3 data-testid="portfolio-title">{title}</h3>
          <small data-testid="portfolio-year">{year}</small>
        </StyledPortfolioTitle>
      </StyledPortfolioHeader>

      <StyledPortfolioBody>
        <p data-testid="portfolio-description">{description}</p>
      </StyledPortfolioBody>

      <StyledPortfolioLinks>
        <Anchor data-testid="portfolio-cta">
          {lang === 'en' ? 'See project' : 'Ver projeto'} &rarr;
        </Anchor>
      </StyledPortfolioLinks>
    </StyledPortfolio>
  );
};

PortfolioCard.defaultProps = {
  project: {
    title: '',
    year: 0,
    description: '',
    url: '',
    lang: 'en',
    image: ''
  }
};

export { PortfolioCard };
