import styled from 'styled-components';

import { Section, colors, sizes } from 'assets/styled';

const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const StyledTextContainer = styled.div`
  h1,
  h2 {
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 0;
    color: transparent;
    text-indent: -9999px;

    img {
      max-width: 12rem;
    }
  }

  h2 {
    font-size: 2rem;
  }

  ul {
    justify-content: flex-start;
    margin-top: 1rem;
  }

  p {
    margin-bottom: 0.25rem;

    strong {
      color: ${colors.white};
      text-decoration: underline;
    }
  }

  @media screen and (min-width: ${sizes.m_tablet_width}) {
    max-width: 80%;
  }
`;

export { StyledSection, StyledTextContainer };
