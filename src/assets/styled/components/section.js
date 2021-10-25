import styled from 'styled-components';

import { sizes } from 'assets/styled';
import logoGrey from 'assets/images/brand/jlozovei-grey.svg';

const Section = styled.div`
  position: relative;
  padding: 2rem 0;
`;

const SectionWatermark = styled(Section)`
  padding-top: 10rem;

  &:before {
    position: absolute;
    top: 2rem;
    left: 0;
    display: block;
    width: 13rem;
    height: 5rem;
    background: url(${logoGrey}) no-repeat center/contain;
  }

  @media screen and (min-width: ${sizes.m_tablet_width}) {
    padding-top: 18rem;

    &:before {
      top: 4rem;
      left: 0;
      width: 26rem;
      height: 10rem;
    }
  }
`;

export { Section, SectionWatermark };
