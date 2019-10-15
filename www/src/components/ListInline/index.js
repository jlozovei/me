import React from 'react';

import { StyledListInline } from './styled';

const ListInline = ({ children, header }) => {
  return <StyledListInline header={header}>{children}</StyledListInline>;
};

export default ListInline;
