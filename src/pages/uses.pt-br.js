import React from 'react';

import { UsesTemplate } from 'templates/Uses';
import usesData from 'content/uses.yml';

const Content = () => (
  <React.Fragment>
    <p>
      Na minha rotina diária eu uso várias ferramentas, dispositivos e aparelhos. Aqui estão algumas
      delas:
    </p>
  </React.Fragment>
);

const Uses = ({ location }) => {
  const items = usesData.map((item) => ({
    ...item,
    lang: 'pt-br'
  }));

  return <UsesTemplate title="Eu uso." content={<Content />} location={location} items={items} />;
};

export default Uses;
