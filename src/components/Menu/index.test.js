import React from 'react';
import { render, screen } from '@testing-library/react';

import { Menu } from 'components/Menu';

describe('Menu', () => {
  it('renders with en links', async () => {
    render(<Menu />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About me')).toBeInTheDocument();
  });

  it('renders with pt-br links', async () => {
    render(<Menu lang="pt-br" />);

    expect(screen.getByText('Início')).toBeInTheDocument();
    expect(screen.getByText('Sobre mim')).toBeInTheDocument();
  });
});
