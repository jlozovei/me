import styled from 'styled-components';

import { colors } from 'assets/styled';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  margin-top: 4rem;
`;

const StyledListItem = styled.li`
  flex-basis: 100%;
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid ${colors.tundora};

  a {
    display: block;
    text-decoration: none;
  }
`;

export { StyledList, StyledListItem };
