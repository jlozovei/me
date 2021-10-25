import React, { useState } from 'react';
import { Link } from 'gatsby';

import { Container, Anchor } from 'assets/styled';
import { Menu } from 'components/Menu';
import { List } from 'components/List';
import { StyledHeader, StyledNav, StyledHamburger, StyledLanguages } from './styled';

const Header = ({ lang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeader>
      <Container>
        <StyledNav open={isMenuOpen}>
          <Menu lang={lang} />
        </StyledNav>

        <StyledHamburger open={isMenuOpen} onClick={toggleMenu}>
          <span />
          {isMenuOpen ? 'Close menu' : 'Open menu'}
        </StyledHamburger>

        <StyledLanguages>
          <List
            items={[
              {
                key: 'en',
                render: () => (
                  <Anchor as={Link} to="/" className={lang === 'en' && 'active'}>
                    EN
                  </Anchor>
                )
              },
              {
                key: 'about',
                render: () => (
                  <Anchor as={Link} to="/pt-br" className={lang === 'pt-br' && 'active'}>
                    PT-BR
                  </Anchor>
                )
              }
            ]}
          />
        </StyledLanguages>
      </Container>
    </StyledHeader>
  );
};

Header.defaultProps = {
  lang: 'en'
};

export { Header };
