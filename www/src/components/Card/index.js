import React from 'react';
import { StyledCard, StyledLinks } from './styled';

const Card = ({ title, text, children }) => {
  return (
    <StyledCard>
      {title && <h3>{title}</h3>}
      {text && <p dangerouslySetInnerHTML={{ __html: text }} />}
      <StyledLinks>{children}</StyledLinks>
    </StyledCard>
  );
};

export default Card;
