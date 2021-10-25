import React from 'react';

import { StyledList, StyledListItem, ExperienceCard } from 'components/Experience';

const WorkList = ({ items }) => {
  const requireImage = (imageName) => {
    try {
      const imageSource = require(`assets/images/work/${imageName}.svg`);
      return imageSource.default;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledList data-testid="work-list">
      {items.map(({ name, role, img, date, text, lang }) => (
        <StyledListItem key={date}>
          <ExperienceCard
            title={name}
            subtitle={`${role} | ${date}`}
            body={text[lang]}
            image={requireImage(img)}
          />
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export { WorkList };
