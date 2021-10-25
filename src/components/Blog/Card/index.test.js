import React from 'react';
import { render, screen } from '@testing-library/react';

import { BlogCard } from 'components/Blog';
import { post as mockedPost, createCustomPost } from '__mocks__';

describe('BlogCard', () => {
  it('renders with en post', async () => {
    const formattedPost = {
      date: mockedPost.frontmatter.date,
      category: mockedPost.frontmatter.category,
      title: mockedPost.frontmatter.title,
      excerpt: mockedPost.frontmatter.excerpt,
      lang: mockedPost.fields.langKey,
      readingTime: mockedPost.timeToRead
    };

    render(<BlogCard post={formattedPost} />);

    expect(screen.getByTestId('post-title')).toHaveTextContent(formattedPost.title);
    expect(screen.getByTestId('post-cta')).toHaveTextContent('Read more →');
  });

  it('renders with pt-br post', async () => {
    const newPost = createCustomPost({
      fields: {
        slug: '/pt-br/uma-postagem',
        langKey: 'pt-br'
      },
      frontmatter: {
        title: 'Uma postagem',
        excerpt: 'Apenas uma postagem.'
      }
    });

    const formattedPost = {
      date: newPost.frontmatter.date,
      category: newPost.frontmatter.category,
      title: newPost.frontmatter.title,
      excerpt: newPost.frontmatter.excerpt,
      lang: newPost.fields.langKey,
      readingTime: newPost.timeToRead
    };

    render(<BlogCard post={formattedPost} />);

    expect(screen.getByTestId('post-title')).toHaveTextContent(formattedPost.title);
    expect(screen.getByTestId('post-cta')).toHaveTextContent('Leia mais →');
  });
});
