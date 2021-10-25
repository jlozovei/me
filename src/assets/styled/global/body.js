import { createGlobalStyle } from 'styled-components';

import { colors } from 'assets/styled';

const GlobalBody = createGlobalStyle`
  body {
    background-color: ${colors.black};
    color: ${colors.text};
  }

  body {
    &,
    #___gatsby,
    #gatsby-focus-wrapper {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: flex-start;
    }

    #___gatsby,
    #gatsby-focus-wrapper {
      flex: 1;
    }
  }
`;
export { GlobalBody };
