import React from 'react';
import { useTranslation } from 'react-i18next';
import differenceInYears from 'date-fns/differenceInYears';

import PageTitle from 'components/PageTitle';
import ListInline from 'components/ListInline';

import Template from '../template';

import texts from 'data/texts';

const Me = props => {
  const { t } = useTranslation();

  const birthDate = new Date(1997, 2, 24),
    myAge = differenceInYears(new Date(), birthDate);

  return (
    <Template>
      <PageTitle>{t('me.title')}</PageTitle>
      <p>
        <span
          dangerouslySetInnerHTML={{
            __html: t('me.1st')
              .replace('[em]', '<em>')
              .replace('[/em]', '</em>')
          }}
        />{' '}
        <span role="img" aria-label="Hand with horns signal">
          🤘
        </span>
      </p>

      <p>{t('me.2nd')}</p>

      <p>{t('me.3rd')}</p>

      <p
        dangerouslySetInnerHTML={{
          __html: t('me.4th').replace('[myAge]', myAge)
        }}
      />

      <ListInline>
        {texts.map(source => {
          const { name, slug, link } = source;

          return (
            <li key={slug}>
              <a href={link} target="_blank" rel="noopener noreferrer" title={t(`social.${slug}`)}>
                {name}
              </a>
            </li>
          );
        })}
      </ListInline>
    </Template>
  );
};

export default Me;
