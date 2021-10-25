import styled from 'styled-components';

import { sizes } from 'assets/styled';

const StyledNoResults = styled.div`
  position: relative;
  max-width: ${sizes.post_width};
  margin: 4rem auto 0;
  padding: 4rem;
  border-radius: 2px;
  text-align: center;

  h2 {
    margin: 0.5rem 0;
  }

  p {
    margin: 0;
  }
`;

export { StyledNoResults };
