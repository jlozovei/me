import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { ExperienceTemplate } from 'templates/Experience';
import { WorkList, AcademicList } from 'components/Experience';

import academicsData from 'content/academics.yml';
import workData from 'content/work.yml';

const Heading = () => (
  <React.Fragment>
    <p>Below you can find more information about my working experience and my academic history.</p>
    <p>
      You can also find these information on{' '}
      <OutboundLink
        href="https://linkedin.com/in/jlozovei"
        target="_blank"
        rel="noopener noreferrer"
      >
        my LinkedIn profile
      </OutboundLink>
      .
    </p>
  </React.Fragment>
);

const Work = ({ items }) => (
  <React.Fragment>
    <h2>Work experience.</h2>

    <WorkList items={items} />
  </React.Fragment>
);

const Academic = ({ items }) => (
  <React.Fragment>
    <h2>Academic History.</h2>

    <AcademicList items={items} />
  </React.Fragment>
);

const Experience = ({ location }) => {
  const workHistory = workData.map((item) => ({
    ...item,
    lang: 'en'
  }));
  const academicHistory = academicsData.map((item) => ({
    ...item,
    lang: 'en'
  }));

  return (
    <ExperienceTemplate
      title="Experience."
      heading={<Heading />}
      work={<Work items={workHistory} />}
      academic={<Academic items={academicHistory} />}
      location={location}
    />
  );
};

export default Experience;
