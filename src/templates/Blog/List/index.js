import React from 'react';

import { Default } from 'templates/Default';
import { BlogList } from 'components/Blog';
import { Container, SectionWatermark } from 'assets/styled';
import { StyledNoResults } from './styled';

const NoResultsContent = ({ lang }) => {
  return (
    <React.Fragment>
      <p>
        <span role="img" aria-label={lang === 'en' ? 'fire' : 'fogo'}>
          &#128293;
        </span>
        <span role="img" aria-label={lang === 'en' ? 'bomb' : 'bomba'}>
          &#128163;
        </span>
      </p>

      {lang === 'en' ? (
        <React.Fragment>
          <h2>Sorry, nothing to see here.</h2>
          <p>Please come back later.</p>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h2>Desculpe, mas não tem nada para ver aqui.</h2>
          <p>Por favor, volte mais tarde.</p>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const BlogListTemplate = ({ title, content, posts, lang, location }) => {
  const hasPosts = posts.length > 0;

  return (
    <Default location={location} meta={{ title: 'Blog' }}>
      <SectionWatermark>
        <Container>
          <h1>{title}</h1>

          {content}

          {hasPosts ? (
            <BlogList posts={posts} />
          ) : (
            <StyledNoResults>
              <NoResultsContent lang={lang} />
            </StyledNoResults>
          )}
        </Container>
      </SectionWatermark>
    </Default>
  );
};

export default BlogListTemplate;
