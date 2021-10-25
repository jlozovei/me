import styled from 'styled-components';

import { colors, sizes, Container } from 'assets/styled';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  height: 4rem;
  background-color: ${colors.black};
  border-bottom: 1px solid ${colors.shark};
  z-index: 1;

  ${Container} {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
`;

const StyledNav = styled.nav`
  ul {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: ${sizes.tablet_width}) {
    position: fixed;
    top: 0;
    left: ${(props) => (props.open ? '0' : '-100%')};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 70%;
    height: 100%;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: saturate(180%) blur(5px);
    border-right: 1px solid ${colors.shark};
    z-index: 2;
    transition: left ease-in-out 500ms;

    ul {
      flex-direction: column;
      align-items: flex-start;

      li + li {
        margin-top: 1rem;
      }
    }
  }
`;

const StyledHamburger = styled.button`
  position: relative;
  display: block;
  width: 2rem;
  height: 1.5rem;
  padding: 0;
  font-size: 0;
  color: transparent;
  background-color: ${colors.black};
  border: none;
  z-index: 2;

  span {
    top: 50%;
    background-color: ${(props) => (props.open ? 'transparent' : colors.white)};
    transform: translateY(-50%);

    &,
    &:before,
    &:after {
      position: absolute;
      left: 0;
      display: block;
      height: 0.125rem;
      transition: all ease-in-out 300ms;
    }

    &,
    &:before {
      width: 100%;
    }

    &:before,
    &:after {
      background-color: ${colors.white};
    }

    &:before {
      top: ${(props) => (props.open ? '0' : '-0.625rem')};
      ${(props) => props.open && 'transform: rotate(45deg);'}
    }

    &:after {
      top: ${(props) => (props.open ? '0' : '0.625rem')};
      width: ${(props) => (props.open ? '100%' : '70%')};
      ${(props) => props.open && 'transform: rotate(-45deg);'}
    }
  }

  @media screen and (min-width: ${sizes.m_tablet_width}) {
    display: none;
  }
`;

const StyledLanguages = styled.div``;

export { StyledHeader, StyledNav, StyledHamburger, StyledLanguages };
