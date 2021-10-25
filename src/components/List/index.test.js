import React from 'react';
import { render, screen } from '@testing-library/react';

import { List } from 'components/List';

describe('List', () => {
  it('renders with no items', async () => {
    render(<List />);

    expect(screen.getByText('No data to show')).toBeInTheDocument();
  });

  it('renders with some items', async () => {
    const items = [
      {
        key: 'one',
        render: () => <p>one</p>
      },
      {
        key: 'two',
        render: () => <p>two</p>
      }
    ];

    render(<List items={items} />);

    expect(screen.getByText('one')).toBeInTheDocument();
  });
});
