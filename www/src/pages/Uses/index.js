import React from 'react';
import { useTranslation } from 'react-i18next';

import PageTitle from 'components/PageTitle';
import Section from 'components/Section';

import Template from '../template';

import uses from 'data/uses';

const Uses = props => {
  const { t } = useTranslation();

  return (
    <Template>
      <PageTitle>{t('uses.title')}</PageTitle>

      <p dangerouslySetInnerHTML={{ __html: t('uses.description') }} />

      <Section>
        <h2>{t('uses.home.title')}</h2>
        <ul>
          {Object.keys(uses.home).map(key => (
            <li key={key}>
              {t(`uses.stuff.${key}`)}: <b dangerouslySetInnerHTML={{ __html: uses.home[key] }} />
            </li>
          ))}
        </ul>
      </Section>

      <hr />

      <Section>
        <h2>{t('uses.work.title')}</h2>
        <ul>
          {Object.keys(uses.work).map(key => (
            <li key={key}>
              {t(`uses.stuff.${key}`)}: <b dangerouslySetInnerHTML={{ __html: uses.work[key] }} />
            </li>
          ))}
        </ul>
      </Section>

      <hr />

      <Section>
        <h2>{t('uses.personal.title')}</h2>
        <ul>
          {Object.keys(uses.personal).map(key => (
            <li key={key}>
              {t(`uses.stuff.${key}`)}:{' '}
              <b dangerouslySetInnerHTML={{ __html: uses.personal[key] }} />
            </li>
          ))}
        </ul>
      </Section>
    </Template>
  );
};

export default Uses;
