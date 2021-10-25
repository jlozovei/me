import React from 'react';
import { render, screen } from '@testing-library/react';

import { WorkList } from 'components/Experience';

import { work as mockedWork } from '__mocks__';

describe('WorkList', () => {
  it('renders', async () => {
    const list = [mockedWork];

    render(<WorkList items={list} />);

    expect(screen.getByTestId('work-list')).toBeInTheDocument();
    expect(screen.getByTestId(`experience--${mockedWork.name}`)).toBeInTheDocument();
  });
});
