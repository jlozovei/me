import React from 'react';
import { render, screen } from '@testing-library/react';

import { BlogList } from 'components/Blog';
import { post as mockedPost, createCustomPost } from '__mocks__';

describe('BlogList', () => {
  it('renders with list', async () => {
    const list = [
      mockedPost,
      createCustomPost({
        timeToRead: 8,
        fields: {
          slug: '/second-blog-post'
        },
        frontmatter: {
          date: '01/02/2021',
          title: 'Second blog post',
          excerpt: 'This blogging stuff is getting serious.'
        }
      })
    ];

    render(<BlogList posts={list} />);

    expect(screen.getByTestId('blog-list')).toBeInTheDocument();
    expect(screen.getByTestId(`post--${list[0].frontmatter.title}`)).toBeInTheDocument();
    expect(screen.getByTestId(`post--${list[1].frontmatter.title}`)).toBeInTheDocument();
  });
});
