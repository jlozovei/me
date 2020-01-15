import React from 'react';
import { useTranslation } from 'react-i18next';

import ListInline from 'components/ListInline';

import Template from '../template';
import { StyledHeadline } from './styled';

import social from 'data/social';
import hello from 'assets/images/hello.png';

const Home = props => {
  const { t } = useTranslation();

  return (
    <Template>
      <StyledHeadline>
        <img
          src={hello}
          alt={t('home.image')}
          onLoad={event => event.target.classList.add('loaded')}
        />
        <h1>jlozovei.dev</h1>

        <p>
          {t('home.description')}{' '}
          <span role="img" aria-label="Hand with horns signal">
            🤘
          </span>
        </p>

        <ListInline>
          {social.map(network => {
            const { name, slug, link } = network;

            return (
              <li key={slug}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t(`social.${slug}`)}
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ListInline>
      </StyledHeadline>
    </Template>
  );
};

export default Home;
