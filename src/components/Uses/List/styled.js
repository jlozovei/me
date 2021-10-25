import styled from 'styled-components';

import { colors, sizes } from 'assets/styled';

const StyledCategory = styled.div`
  h3 {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-bottom: 2rem;
    background-color: transparent;
    color: ${colors.white};

    &:after {
      display: inline-block;
      flex: 1;
      width: 100%;
      height: 1px;
      margin-left: 1rem;
      background-color: ${colors.sunset};
    }
  }

  & + div {
    margin-top: 2rem;
  }
`;

const StyledContainer = styled.div`
  margin-top: 4rem;

  ${StyledCategory} {
    & + ${StyledCategory} {
      margin-top: 4rem;
    }

    &:nth-child(even) {
      h3 {
        flex-direction: row-reverse;

        &:after {
          margin-left: 0;
          margin-right: 1rem;
        }
      }
    }
  }
`;

const StyledList = styled.ul`
  margin-left: 2rem;
`;

const StyledListItem = styled.li`
  list-style-type: disc;

  h4 {
    display: inline-block;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    color: ${colors.white};
  }

  p {
    margin-bottom: 0;
  }

  & + li {
    margin-top: 2rem;
  }
`;

const StyledExtras = styled.div`
  margin-top: 0.5rem;

  ul {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;

    li {
      margin-right: 1rem;
    }
  }
`;

export { StyledContainer, StyledCategory, StyledList, StyledListItem, StyledExtras };
