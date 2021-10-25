import React from 'react';
import { render, screen } from '@testing-library/react';

import { PortfolioList } from 'components/Portfolio';
import { portfolio as mockedPortfolio, createCustomPortfolio } from '__mocks__';

describe('PortfolioList', () => {
  it('renders with en text', async () => {
    const list = [
      mockedPortfolio,
      createCustomPortfolio({
        title: 'Some other portfolio.',
        url: 'https://second.portfolio'
      })
    ];

    render(<PortfolioList items={list} />);

    expect(screen.getByTestId('portfolio-list')).toBeInTheDocument();
    expect(screen.getByTestId(`portfolio--${list[0].title}`)).toBeInTheDocument();
    expect(screen.getByTestId(`portfolio--${list[1].title}`)).toBeInTheDocument();
  });
});
