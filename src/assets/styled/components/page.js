import styled from 'styled-components';

import { colors, sizes } from 'assets/styled';
import outlined97 from 'assets/images/brand/97-outline.svg';

const Page = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  flex: 1;

  h1,
  h2 {
    color: ${colors.white};
  }

  &:after {
    position: absolute;
    bottom: -2rem;
    right: 0;
    display: block;
    width: 10rem;
    height: 15rem;
    background: url(${outlined97}) no-repeat 0 0 / contain;
    z-index: -1;
  }

  @media screen and (min-width: ${sizes.m_tablet_width}) {
    &:after {
      bottom: -4rem;
      width: 20rem;
      height: 30rem;
    }
  }
`;

export { Page };
