import React from 'react';

import { StyledList, StyledListItem } from './styled';

const List = ({ items }) => {
  if (!items || items.length === 0) {
    return (
      <ul>
        <li>No data to show</li>
      </ul>
    );
  }

  return (
    <StyledList>
      {items.map((item) => {
        return <StyledListItem key={item.key}>{item.render()}</StyledListItem>;
      })}
    </StyledList>
  );
};

List.defaultProps = {
  items: []
};

export { List };
