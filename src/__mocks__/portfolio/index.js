const portfolio = {
  description: 'A nice portfolio project.',
  image: 'portfolio',
  lang: 'en',
  title: 'First Portfolio',
  url: 'https://first.portfolio',
  year: 2021
};

const createCustomPortfolio = (props) => ({
  ...portfolio,
  ...props
});

export { portfolio, createCustomPortfolio };
