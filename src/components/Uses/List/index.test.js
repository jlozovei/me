import React from 'react';
import { render, screen } from '@testing-library/react';

import { UsesList } from 'components/Uses';
import {
  useCategory as mockedUseCategory,
  createCustomUseCategory,
  useItemWithExtras as mockedUseItemWithExtras
} from '__mocks__';

describe('UsesList', () => {
  it('renders with en text', async () => {
    const list = [
      mockedUseCategory,
      createCustomUseCategory({
        key: 'categ2',
        lang: 'en',
        label: {
          en: 'Category #2',
          'pt-br': 'Categoria #2'
        },
        items: [mockedUseItemWithExtras]
      })
    ];

    render(<UsesList categories={list} />);

    expect(screen.getByTestId(`category--${list[0].key}`)).toBeInTheDocument();
    expect(screen.getByTestId(`category--${list[1].key}`)).toBeInTheDocument();

    expect(screen.getByTestId(`use--${list[0].items[0].name}`)).toBeInTheDocument();

    expect(screen.getByTestId(`extra--${list[1].items[0].extras[0].label}`)).toBeInTheDocument();
  });
});
