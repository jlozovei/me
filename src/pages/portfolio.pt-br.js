import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { PortfolioTemplate } from 'templates/Portfolio';
import portfolioData from 'content/portfolio.yml';

const Content = () => (
  <React.Fragment>
    <p>
      Esses são os meus trabalhos mais recentes. Todos eles são <em>open source</em>!
    </p>
    <p>
      Você pode encontrar mais projetos nos meus perfis do{' '}
      <OutboundLink href="https://github.com/jlozovei">GitHub</OutboundLink> e{' '}
      <OutboundLink href="https://glitch.com/@jlozovei">Glitch</OutboundLink>.
    </p>
  </React.Fragment>
);

const Portfolio = ({ location }) => {
  const items = portfolioData.map((item) => ({
    ...item,
    description: item.description['pt-br'],
    lang: 'pt-br'
  }));

  return (
    <PortfolioTemplate title="Portfólio." content={<Content />} location={location} items={items} />
  );
};

export default Portfolio;
