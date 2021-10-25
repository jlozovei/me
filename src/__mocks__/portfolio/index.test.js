import { portfolio as mockedPortfolio, createCustomPortfolio } from '__mocks__';

describe('create custom mocked portfolio', () => {
  it('return mocked portfolio with custom arguments', async () => {
    const portfolio = createCustomPortfolio({
      image: '',
      lang: 'pt-br',
      year: 2019
    });

    expect(portfolio).toMatchObject({
      ...mockedPortfolio,
      ...portfolio
    });
  });
});
