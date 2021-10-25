import React from 'react';
import { Link } from 'gatsby';

import { BlogCard } from 'components/Blog';

import { StyledList, StyledListItem } from './styled';

const BlogList = ({ posts }) => {
  return (
    <StyledList data-testid="blog-list">
      {posts.map(({ fields, timeToRead, frontmatter }) => {
        const { slug, langKey } = fields;
        const { date, excerpt, title, category } = frontmatter;

        return (
          <StyledListItem key={slug}>
            <Link to={slug}>
              <BlogCard
                post={{
                  date,
                  category,
                  title,
                  excerpt,
                  lang: langKey,
                  readingTime: timeToRead
                }}
              />
            </Link>
          </StyledListItem>
        );
      })}
    </StyledList>
  );
};

BlogList.defaultProps = {
  posts: []
};

export { BlogList };
