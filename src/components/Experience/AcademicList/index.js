import React from 'react';

import { StyledList, StyledListItem, ExperienceCard } from 'components/Experience';

const AcademicList = ({ items }) => {
  const requireImage = (imageName) => {
    try {
      const imageSource = require(`assets/images/academic/${imageName}.svg`);
      return imageSource.default;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledList data-testid="academic-list">
      {items.map(({ key, name, institution, img, date, text, lang }) => (
        <StyledListItem key={key}>
          <ExperienceCard
            title={name[lang]}
            subtitle={`${institution} | ${date}`}
            body={text[lang]}
            image={requireImage(img)}
          />
        </StyledListItem>
      ))}
    </StyledList>
  );
};

AcademicList.defaultProps = {
  items: []
};

export { AcademicList };
