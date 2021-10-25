import React from 'react';
import { render, screen } from '@testing-library/react';

import { PortfolioCard } from 'components/Portfolio';
import { portfolio as mockedPortfolio, createCustomPortfolio } from '__mocks__';

describe('PortfolioCard', () => {
  it('renders with en text', async () => {
    render(<PortfolioCard project={mockedPortfolio} />);

    expect(screen.getByTestId('portfolio-title')).toHaveTextContent(mockedPortfolio.title);
    expect(screen.getByTestId('portfolio-year')).toHaveTextContent(mockedPortfolio.year);
    expect(screen.getByTestId('portfolio-cta')).toHaveTextContent('See project →');
  });

  it('renders with pt-br text', async () => {
    const localizedPortfolio = createCustomPortfolio({
      lang: 'pt-br'
    });

    render(<PortfolioCard project={localizedPortfolio} />);

    expect(screen.getByTestId('portfolio-title')).toHaveTextContent(localizedPortfolio.title);
    expect(screen.getByTestId('portfolio-year')).toHaveTextContent(localizedPortfolio.year);
    expect(screen.getByTestId('portfolio-cta')).toHaveTextContent('Ver projeto →');
  });
});
