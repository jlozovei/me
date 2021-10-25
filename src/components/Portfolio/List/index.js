import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { PortfolioCard } from 'components/Portfolio';

import { StyledList, StyledListItem } from './styled';

const PortfolioList = ({ items }) => {
  return (
    <StyledList data-testid="portfolio-list">
      {items.map(({ title, year, url, description, lang, image }) => (
        <StyledListItem key={url}>
          <OutboundLink href={url} target="_blank" rel="noopener noreferrer">
            <PortfolioCard project={{ title, year, url, description, lang, image }} />
          </OutboundLink>
        </StyledListItem>
      ))}
    </StyledList>
  );
};

PortfolioList.defaultProps = {
  items: []
};

export { PortfolioList };
