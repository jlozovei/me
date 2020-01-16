import React from 'react';
import ReactGA from 'react-ga';
import { useTranslation } from 'react-i18next';

import PageTitle from 'components/PageTitle';
import Section from 'components/Section';
import CardList from 'components/CardList';
import Card from 'components/Card';

import Template from '../template';

import portfolio from 'data/portfolio';
import projects from 'data/projects';

const Work = props => {
  const { t } = useTranslation();

  return (
    <Template>
      <PageTitle>{t('work.title')}</PageTitle>

      <p>{t('work.description')}</p>

      <Section>
        <h2>{t('work.portfolio.title')}</h2>
        <CardList>
          {portfolio.map(job => {
            const { name, slug, live } = job;

            return (
              <li key={slug}>
                <Card title={name} text={t(`work.portfolio.jobs.${slug}`)}>
                  {live && (
                    <ReactGA.OutboundLink
                      eventLabel={`Portfolio (Live) - ${name}`}
                      to={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t('work.links.live')}
                    >
                      {t('work.links.live')}
                    </ReactGA.OutboundLink>
                  )}
                </Card>
              </li>
            );
          })}
        </CardList>
      </Section>

      <hr />

      <Section>
        <h2>{t('work.projects.title')}</h2>
        <CardList>
          {projects.map(job => {
            const { name, slug, github, live } = job;

            return (
              <li key={slug}>
                <Card title={name} text={t(`work.projects.jobs.${slug}`)}>
                  {live && (
                    <ReactGA.OutboundLink
                      eventLabel={`Projects (Live) - ${name}`}
                      to={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t('work.links.live')}
                    >
                      {t('work.links.live')}
                    </ReactGA.OutboundLink>
                  )}
                  {github && (
                    <ReactGA.OutboundLink
                      eventLabel={`Projects (GitHub) - ${name}`}
                      to={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t('work.links.github')}
                    >
                      {t('work.links.github')}
                    </ReactGA.OutboundLink>
                  )}
                </Card>
              </li>
            );
          })}
        </CardList>

        <p>{t('work.projects.call')}</p>
      </Section>
    </Template>
  );
};

export default Work;
