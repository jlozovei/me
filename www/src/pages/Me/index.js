import React from 'react';
import ReactGA from 'react-ga';
import { useTranslation } from 'react-i18next';

import PageTitle from 'components/PageTitle';
import ListInline from 'components/ListInline';

import Template from '../template';

import texts from 'data/texts';

const Me = props => {
  const { t } = useTranslation();

  return (
    <Template>
      <PageTitle>{t('me.title')}</PageTitle>

      <p dangerouslySetInnerHTML={{ __html: t('me.about.0') }} />
      <p dangerouslySetInnerHTML={{ __html: t('me.about.1') }} />
      <p dangerouslySetInnerHTML={{ __html: t('me.about.2') }} />
      <p dangerouslySetInnerHTML={{ __html: t('me.about.3') }} />

      <ListInline>
        {texts.map(source => {
          const { name, slug, link } = source;

          return (
            <li key={slug}>
              <ReactGA.OutboundLink
                eventLabel={`Me - texts - ${name}`}
                to={link}
                target="_blank"
                rel="noopener noreferrer"
                title={t(`social.${slug}`)}
              >
                {name}
              </ReactGA.OutboundLink>
            </li>
          );
        })}
      </ListInline>
    </Template>
  );
};

export default Me;
