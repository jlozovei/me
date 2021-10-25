import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { ExperienceTemplate } from 'templates/Experience';
import { WorkList, AcademicList } from 'components/Experience';

import academicsData from 'content/academics.yml';
import workData from 'content/work.yml';

const Heading = () => (
  <React.Fragment>
    <p>
      Aqui você vai encontrar mais informações sobre minha experiência de trabalho, junto com minha
      formação acadêmica.
    </p>
    <p>
      Essas informações você também pode encontrar no{' '}
      <OutboundLink
        href="https://linkedin.com/in/jlozovei"
        target="_blank"
        rel="noopener noreferrer"
      >
        meu perfil do LinkedIn
      </OutboundLink>
      .
    </p>
  </React.Fragment>
);

const Work = ({ items }) => (
  <React.Fragment>
    <h2>Experiência de trabalho.</h2>

    <WorkList items={items} />
  </React.Fragment>
);

const Academic = ({ items }) => (
  <React.Fragment>
    <h2>Histórico acadêmico.</h2>

    <AcademicList items={items} />
  </React.Fragment>
);

const Experiencia = ({ location }) => {
  const workHistory = workData.map((item) => ({
    ...item,
    lang: 'pt-br'
  }));
  const academicHistory = academicsData.map((item) => ({
    ...item,
    lang: 'pt-br'
  }));

  return (
    <ExperienceTemplate
      title="Experiência."
      heading={<Heading />}
      work={<Work items={workHistory} />}
      academic={<Academic items={academicHistory} />}
      location={location}
    />
  );
};

export default Experiencia;
