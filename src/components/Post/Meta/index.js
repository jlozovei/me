import React from 'react';

import { StyledPostMeta, StyledPostMetaInfo } from './styled';

const ReadingTime = ({ lang, time }) => (
  <StyledPostMetaInfo data-testid="meta-reading">
    {lang === 'en' ? `${time}min read` : `Leitura aprox. de ${time}min`}
  </StyledPostMetaInfo>
);

const PostMeta = ({ meta }) => {
  const { date, lang, readingTime, category } = meta;

  return (
    <StyledPostMeta>
      <StyledPostMetaInfo data-testid="meta-date">{date}</StyledPostMetaInfo>
      <ReadingTime lang={lang} time={readingTime} />
      <StyledPostMetaInfo data-testid="meta-category">#{category}</StyledPostMetaInfo>
    </StyledPostMeta>
  );
};

PostMeta.defaultProps = {
  meta: {
    date: '',
    lang: 'en',
    readingTime: 0,
    category: ''
  }
};

export { PostMeta };
