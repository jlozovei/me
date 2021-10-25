import React from 'react';
import { render, screen } from '@testing-library/react';

import { ExperienceCard } from 'components/Experience';

describe('ExperienceCard', () => {
  it('renders', async () => {
    const experience = {
      title: 'An experience',
      subtitle: '2021 - the beggining',
      body: `
        <p data-testid="first-paragraph">We are just about starting!</p>
      `,
      image: ''
    };

    render(<ExperienceCard {...experience} />);

    expect(screen.getByTestId(`experience--${experience.title}`)).toBeInTheDocument();
    expect(screen.getByTestId('experience-title')).toHaveTextContent(experience.title);
    expect(screen.getByTestId('experience-subtitle')).toHaveTextContent(experience.subtitle);
    expect(screen.getByTestId('first-paragraph')).toBeInTheDocument();
  });
});
