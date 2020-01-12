import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink as Link } from 'react-router-dom';

import ListInline from 'components/ListInline';

import { StyledNotFound } from './styled';

import thinking from 'assets/images/thinking.png';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <StyledNotFound>
        <img src={thinking} alt="" onLoad={event => event.target.classList.add('loaded')} />

        <h1>{t('404.title')}</h1>
        <p>{t('404.description')}</p>

        <ListInline>
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
        </ListInline>
      </StyledNotFound>
    </React.Fragment>
  );
};

export default NotFound;
