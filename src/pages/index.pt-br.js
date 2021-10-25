import React from 'react';

import { HomeTemplate } from 'templates/Home';

const Content = () => (
  <React.Fragment>
    <p>Olá! Eu sou o Julio Lozovei.</p>
    <p>
      Humano, desenvolvedor front-end, músico amador, palestrante e escritor;{' '}
      <strong>solucionador de problemas</strong>.
    </p>
    <p>Você pode me encontrar com os links abaixo:</p>
  </React.Fragment>
);

const Index = ({ data, location }) => (
  <HomeTemplate
    title="Desenvolvimento front-end levado a sério."
    content={<Content />}
    location={location}
  />
);

export default Index;
