import React from 'react';

import { StyledLoader } from './styled';

const Loader = ({ global, text }) => {
  return <StyledLoader global={global}>{text && <p>Loading...</p>}</StyledLoader>;
};

export default Loader;
