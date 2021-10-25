import React from 'react';

import { StyledCard, StyledCardTitle, StyledCardHeader, StyledCardBody } from './styled';

const ExperienceCard = ({ title, subtitle, image, body }) => {
  return (
    <StyledCard data-testid={`experience--${title}`}>
      <StyledCardHeader>
        <img src={image} alt={title} />

        <StyledCardTitle>
          <h3 data-testid="experience-title">{title}</h3>
          <p data-testid="experience-subtitle">{subtitle}</p>
        </StyledCardTitle>
      </StyledCardHeader>

      <StyledCardBody>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </StyledCardBody>
    </StyledCard>
  );
};

ExperienceCard.defaultProps = {
  title: '',
  subtitle: '',
  image: '',
  body: () => <p> </p>
};

export { ExperienceCard };
