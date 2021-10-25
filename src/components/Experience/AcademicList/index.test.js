import React from 'react';
import { render, screen } from '@testing-library/react';

import { AcademicList } from 'components/Experience';

import { academic as mockedAcademic } from '__mocks__';

describe('AcademicList', () => {
  it('renders', async () => {
    const list = [mockedAcademic];

    render(<AcademicList items={list} />);

    expect(screen.getByTestId('academic-list')).toBeInTheDocument();
    expect(
      screen.getByTestId(`experience--${mockedAcademic.name[mockedAcademic.lang]}`)
    ).toBeInTheDocument();
  });
});
