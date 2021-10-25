import React from 'react';

import { HomeTemplate } from 'templates/Home';

const Content = () => (
  <React.Fragment>
    <p>Hey there! I'm Julio Lozovei.</p>
    <p>
      Human, front-end developer, amateur musician, writer and speaker;{' '}
      <strong>problem solver</strong>.
    </p>
    <p>You can find me anywhere with the links below:</p>
  </React.Fragment>
);

const Index = ({ location }) => (
  <HomeTemplate
    title="Front-end development taken seriously."
    content={<Content />}
    location={location}
  />
);

export default Index;
