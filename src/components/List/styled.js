import styled from 'styled-components';

import { fonts, colors } from 'assets/styled';

const StyledList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
`;

const StyledListItem = styled.li`
  padding: 0 0.5rem;
`;

export { StyledList, StyledListItem };
