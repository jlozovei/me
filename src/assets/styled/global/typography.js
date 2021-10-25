import { createGlobalStyle } from 'styled-components';

import { fonts, colors } from 'assets/styled';

const GlobalTypography = createGlobalStyle`
  body,
  button {
    font-family: ${fonts.text};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fonts.title};
    font-weight: bold;
    line-height: calc(100% + 4px);
  }

  p,
  li,
  code,
  small {
    line-height: calc(100% + 10px);
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3.25rem;
  }

  h3 {
    font-size: 3rem;
  }

  h4 {
    font-size: 2.5rem;
  }

  h5 {
    font-size: 2rem;
  }

  h6 {
    font-size: 1.5rem;
  }

  p,
  li,
  code {
    font-size: 1rem;
  }

  blockquote,
  blockquote p {
    font-size: 1.5rem;
  }

  pre,
  code,
  kbd {
    font-family: ${fonts.code};
    white-space: pre-line;
    word-break: break-word;
  }

  p {
    a {
      font-weight: 600;
      color: ${colors.white};
    }
  }
`;
export { GlobalTypography };
