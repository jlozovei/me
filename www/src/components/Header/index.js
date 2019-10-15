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
                {t('header.home')}
              </Link>
            </li>

            <li>
              <Link exact to="/me">
                {t('header.me')}
              </Link>
            </li>
          </ListInline>
        </nav>

        <StyledOptions>
          <ListInline header>
            <li>
              <button onClick={() => changeLanguage('en')} title={t('header.english')}>
                en{' '}
                <span role="img" aria-label={t('header.uk')}>
                  🇬🇧
                </span>
              </button>
            </li>

            <li>
              <button onClick={() => changeLanguage('pt')} title={t('header.portuguese')}>
                pt-br{' '}
                <span role="img" aria-label={t('header.br')}>
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
