import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink as Link } from 'react-router-dom';

import ListInline from 'components/ListInline';

import { StyledHeader, StyledFlexContainer, StyledOptions } from './styled';

const Header = ({ children }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <StyledHeader className="header">
      <StyledFlexContainer>
        <nav>
          <ListInline header>
            <li>
              <Link exact to="/">
                {t('menu.home')}
              </Link>
            </li>

            <li>
              <Link exact to="/me">
                {t('menu.me')}
              </Link>
            </li>

            <li>
              <Link exact to="/uses">
                {t('menu.uses')}
              </Link>
            </li>
          </ListInline>
        </nav>

        <StyledOptions>
          <ListInline header>
            <li>
              <button onClick={() => changeLanguage('en')} title={t('menu.english')}>
                en{' '}
                <span role="img" aria-label={t('menu.uk')}>
                  🇬🇧
                </span>
              </button>
            </li>

            <li>
              <button onClick={() => changeLanguage('pt')} title={t('menu.portuguese')}>
                pt-br{' '}
                <span role="img" aria-label={t('menu.br')}>
                  🇧🇷
                </span>
              </button>
            </li>
          </ListInline>
        </StyledOptions>
      </StyledFlexContainer>
    </StyledHeader>
  );
};

export default Header;
