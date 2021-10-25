import styled from 'styled-components';

import { colors, fonts } from 'assets/styled';

const StyledPostMeta = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
`;

const StyledPostMetaInfo = styled.p`
  position: relative;
  margin-bottom: 0;
  font-size: 0.875rem;
  color: ${colors.text};

  & + p {
    margin-left: 0.5rem;
    padding-left: 0.5rem;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 1px;
      height: 100%;
      background-color: ${colors.sunset};
      transform: rotateZ(10deg);
    }
  }
`;

export { StyledPostMeta, StyledPostMetaInfo };
