import React from 'react';
import { render, screen } from '@testing-library/react';

import { Footer } from 'components/Footer';

describe('Footer', () => {
  it('renders with en text', async () => {
    render(<Footer />);

    expect(screen.getByText("Cookies free, you're welcome.")).toBeInTheDocument();
  });

  it('renders with pt-br text', async () => {
    render(<Footer lang="pt-br" />);

    expect(screen.getByText('Livre de cookies, disponha.')).toBeInTheDocument();
  });
});
