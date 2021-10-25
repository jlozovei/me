import React from 'react';
import { render, screen } from '@testing-library/react';

import { PostMeta } from 'components/Post';

import { post as mockedPost } from '__mocks__';

describe('PostMeta', () => {
  it('renders with en text', async () => {
    const meta = {
      date: mockedPost.frontmatter.date,
      lang: 'en',
      readingTime: mockedPost.timeToRead,
      category: mockedPost.frontmatter.category
    };

    render(<PostMeta meta={meta} />);

    expect(screen.getByTestId('meta-date')).toHaveTextContent(meta.date);
    expect(screen.getByTestId('meta-reading')).toHaveTextContent(`${meta.readingTime}min read`);
    expect(screen.getByTestId('meta-category')).toHaveTextContent(`#${meta.category}`);
  });

  it('renders with pt-br text', async () => {
    const meta = {
      date: mockedPost.frontmatter.date,
      lang: 'pt-br',
      readingTime: mockedPost.timeToRead,
      category: mockedPost.frontmatter.category
    };

    render(<PostMeta meta={meta} />);

    expect(screen.getByTestId('meta-reading')).toHaveTextContent(
      `Leitura aprox. de ${meta.readingTime}min`
    );
  });
});
