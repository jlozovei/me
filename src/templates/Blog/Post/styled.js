import styled from 'styled-components';

import { sizes, colors, fonts } from 'assets/styled';

const StyledArticle = styled.article`
  max-width: ${sizes.post_width};
  margin: 0 auto;

  h1 {
    margin-top: 2rem;
  }
`;

const StyledArticleHeader = styled.header`
  margin-bottom: 2rem;
`;

const StyledArticleBody = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledPostContent = styled.div`
  flex-basis: calc(100% - 2rem);
  max-width: calc(100% - 2rem);
  padding-right: 2rem;

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2.5rem;
    color: ${colors.white};
  }

  p {
    text-align: justify;
  }

  ul,
  ol {
    margin: 1rem 0;

    li {
      list-style-position: inside;

      & + li {
        margin-top: 0.375rem;
      }
    }
  }

  ol {
    li {
      list-style-type: decimal;
    }
  }

  ul {
    li {
      list-style-type: disc;
    }
  }

  blockquote {
    max-width: 90%;
    margin: 4rem auto;
    padding-left: 2rem;
    border-left: 4px solid ${colors.sunset};
    font-family: ${fonts.title};
    color: ${colors.white};
    transform: skewX(-5deg);
  }

  pre[class*='language-'],
  code[class*='language-'] {
    background: ${colors.shark};
    border: 1px solid ${colors.tundora};
    border-radius: 2px;
  }

  pre[class*='language-'] {
    display: block;
    margin: 2rem 0;
    padding: 1rem;

    code[class*='language-'] {
      border: none;
    }
  }

  code[class*='language-'] {
    padding: 0 0.125rem;
    box-shadow: none;
    font-family: ${fonts.code};
    color: ${colors.sunset};
  }

  hr {
    width: 12rem;
    height: 0.25rem;
    margin: 4rem auto;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: inset 4rem 0 0 rgb(0 0 0 / 30%), inset 8rem 0 0 rgb(0 0 0 / 60%);
    transform: skewX(-55deg);
  }

  figure {
    margin: 2rem 0;
    text-align: center;

    img {
      object-fit: contain;
    }

    figcaption {
      margin-top: 0.5rem;
      font-size: 0.875rem;
      color: ${colors.white};
    }
  }
`;

const StyledShare = styled.div`
  position: sticky;
  top: 5rem;
  flex-basis: 2rem;
  padding-top: 0.5rem;
  text-align: right;
`;

const StyledBackLink = styled.div`
  margin-bottom: 4rem;
`;

export {
  StyledArticle,
  StyledArticleHeader,
  StyledArticleBody,
  StyledPostContent,
  StyledShare,
  StyledBackLink
};
