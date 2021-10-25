import React from 'react';

import { UsesTemplate } from 'templates/Uses';
import usesData from 'content/uses.yml';

const Content = () => (
  <React.Fragment>
    <p>In my daily routine I use a lot of tools, devices and gadgets. Here are some of them:</p>
  </React.Fragment>
);

const Uses = ({ location }) => {
  const items = usesData.map((item) => ({
    ...item,
    lang: 'en'
  }));

  return <UsesTemplate title="Uses." content={<Content />} location={location} items={items} />;
};

export default Uses;
