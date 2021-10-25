import React from 'react';
import { render, screen } from '@testing-library/react';

import { PostShare } from 'components/Post';

import { post as mockedPost } from '__mocks__';

describe('PostShare', () => {
  it('renders with en text', async () => {
    const post = {
      title: mockedPost.frontmatter.title,
      description: mockedPost.frontmatter.title,
      url: `https://jlozovei.dev/blog${mockedPost.fields.slug}`
    };

    render(<PostShare post={post} />);

    expect(screen.getByTestId('post-share')).toBeInTheDocument();

    expect(screen.getByTestId('share--fb')).toBeInTheDocument();
    expect(screen.getByTestId('share--tt')).toBeInTheDocument();
    expect(screen.getByTestId('share--in')).toBeInTheDocument();
    expect(screen.getByTestId('share--email')).toBeInTheDocument();
  });
});
