import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

const StyledListItem = styled.li`
  & + li {
    margin-top: 1rem;
  }

  a {
    position: relative;
    display: block;

    img {
      width: 1.5rem;
      height: 1.5rem;
      object-fit: contain;
    }
  }
`;

export { StyledList, StyledListItem };
