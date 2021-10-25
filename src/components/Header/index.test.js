import React from 'react';
import { render, screen } from '@testing-library/react';

import { Header } from 'components/Header';

describe('Header', () => {
  it('renders with en text', async () => {
    render(<Header />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByText('PT-BR')).toBeInTheDocument();
  });

  it('renders with pt-br text', async () => {
    render(<Header lang="pt-br" />);

    expect(screen.getByText('Início')).toBeInTheDocument();
    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByText('PT-BR')).toBeInTheDocument();
  });
});
