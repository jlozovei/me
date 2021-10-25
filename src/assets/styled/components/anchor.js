import styled from 'styled-components';

import { colors, fonts } from 'assets/styled';

const Anchor = styled.span`
  position: relative;
  display: inline-block;
  font-family: ${fonts.title};
  font-size: 0.875rem;
  font-weight: bold;
  color: ${colors.white};
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;

  &:after {
    position: absolute;
    bottom: -0.125rem;
    right: 0;
    display: block;
    width: 0;
    height: 2px;
    background-color: ${colors.tundora};
    transition: all ease-in-out 210ms;
  }

  &:hover {
    &:after {
      left: 0;
      width: 100%;
    }
  }

  &.active {
    &:after {
      width: 100%;
      background-color: ${colors.sunset};
    }
  }
`;

export { Anchor };
