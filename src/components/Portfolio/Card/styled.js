import styled from 'styled-components';

import { colors, sizes } from 'assets/styled';

const StyledPortfolio = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
`;

const StyledPortfolioHeader = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 1rem;

  img {
    flex-basis: 4rem;
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
    border: 1px solid #4a4a4a;
    border-radius: 2px;
    object-fit: contain;
  }

  h3 {
    margin-bottom: 0;
    font-size: 2rem;
  }

  @media screen and (min-width: ${sizes.m_tablet_width}) {
    img {
      flex-basis: 6rem;
      width: 6rem;
      height: 6rem;
    }
  }
`;

const StyledPortfolioTitle = styled.div`
  flex-basis: calc(100% - 5rem);

  h3 {
    color: ${colors.white};
  }

  @media screen and (min-width: ${sizes.m_tablet_width}) {
    flex-basis: calc(100% - 7rem);
  }
`;

const StyledPortfolioBody = styled.div`
  p {
    margin-bottom: 0;
  }
`;

const StyledPortfolioLinks = styled.div`
  margin-top: 1rem;

  a {
    color: ${colors.white};
  }
`;

export {
  StyledPortfolio,
  StyledPortfolioHeader,
  StyledPortfolioTitle,
  StyledPortfolioBody,
  StyledPortfolioLinks
};
