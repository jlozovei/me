import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { PortfolioTemplate } from 'templates/Portfolio';
import portfolioData from 'content/portfolio.yml';

const Content = () => (
  <React.Fragment>
    <p>
      Here are some of my recent projects. All of them are <em>open source</em>!
    </p>
    <p>
      You can find more on my <OutboundLink href="https://github.com/jlozovei">GitHub</OutboundLink>{' '}
      and <OutboundLink href="https://glitch.com/@jlozovei">Glitch</OutboundLink> profiles.
    </p>
  </React.Fragment>
);

const Portfolio = ({ location }) => {
  const items = portfolioData.map((item) => ({
    ...item,
    description: item.description['en'],
    lang: 'en'
  }));

  return (
    <PortfolioTemplate title="Portfolio." content={<Content />} location={location} items={items} />
  );
};

export default Portfolio;
