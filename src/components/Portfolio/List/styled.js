import styled from 'styled-components';

import { colors, sizes } from 'assets/styled';

const StyledList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  justify-content: flex-start;
  margin: 4rem 0;

  @media screen and (min-width: ${sizes.m_tablet_width}) {
    margin: 8rem -1rem 0;
  }
`;

const StyledListItem = styled.li`
  flex-basis: 100%;
  width: 100%;
  padding: 2rem 0;

  a {
    display: block;
    text-decoration: none;
  }

  @media screen and (max-width: ${sizes.tablet_width}) {
    border-bottom: 1px solid ${colors.tundora};
  }

  @media screen and (min-width: ${sizes.m_tablet_width}) {
    flex-basis: 33.3333333333%;
    width: 33.3333333333%;
    padding: 2rem 1rem;
  }
`;

export { StyledList, StyledListItem };
