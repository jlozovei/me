import React from 'react';
import { Link } from 'gatsby';

import { AboutTemplate } from 'templates/About';

import { Anchor } from 'assets/styled';

const AboutText = () => (
  <React.Fragment>
    <p>
      Nascido e criado em Curitiba, Brasil, eu comecei a escrever HTML com 15 anos de idade - e
      nunca mais parei desde então.
    </p>

    <p>
      Trabalhando como desenvolvedor front-end desde 2015, eu já criei diversas soluções com
      fábricas de software, startups, fintechs e bancos - tanto como empregado como freelancer.
    </p>

    <p>
      Eu gosto de dizer que <em>sou apaixonado por HTML, CSS e JavaScript</em>, pois elas são minhas
      linguagens nativas. Eu também falo português (meu primeiro idioma), inglês e espanhol.
    </p>

    <p>
      Trabalhar para essas empresas me ajudou a ter uma grande exepriência com diversas ferramentas
      utilizadas no desenvolvimento web, desde CMSs, frameworks, bundlers, executores de tarefas e
      obviamente <em>o velho HTML e CSS</em>.
    </p>

    <p>
      Já criei soluções utilizando WordPress, React, Vue, Sass, PostCSS, Styled components, Jest,
      Gulp, Webpack, Node, Express, e várias outras ferramentas maravilhosas. Além de utilizar essas
      ferramentas, também criei soluções baseadas em acessibilidade, SEO, performance e código
      semântico.
    </p>

    <p>
      Minhas habilidades também envolvem um conhecimento básico sobre o processo de CI/CD, APIs
      REST, gitflow e UI/UX.
    </p>

    <p>
      Além de escrever códigos, eu gosto muito de escrever sobre tecnologia, desenvolvimento e
      carreira; e também fazer um som na minha guitarra.
    </p>
    <p>
      <Anchor as={Link} to="/pt-br/sobre/experiencia">
        Experiência e formação
      </Anchor>
    </p>
  </React.Fragment>
);

const Sobre = ({ location }) => (
  <AboutTemplate title="Sobre mim." content={<AboutText />} location={location} />
);

export default Sobre;
