import React from 'react';

import { PostMeta } from 'components/Post';

import { StyledCard, StyledCardBody } from './styled';

const ReadMore = ({ lang }) => (
  <span data-testid="post-cta">{lang === 'en' ? 'Read more' : 'Leia mais'} &rarr;</span>
);

const BlogCard = ({ post }) => {
  const { date, readingTime, category, title, excerpt, lang } = post;

  return (
    <StyledCard data-testid={`post--${title}`}>
      <PostMeta meta={{ date, lang, readingTime, category }} />

      <StyledCardBody>
        <h3 data-testid="post-title">{title}</h3>
        <p data-testid="post-excerpt">{excerpt}</p>

        <ReadMore lang={lang} />
      </StyledCardBody>
    </StyledCard>
  );
};

BlogCard.defaultProps = {
  post: {
    date: '',
    readingTime: 0,
    category: '',
    title: '',
    excerpt: '',
    lang: 'en'
  }
};

export { BlogCard };
