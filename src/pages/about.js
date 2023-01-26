import React from 'react';
import { Link } from 'gatsby';

import { AboutTemplate } from 'templates/About';

import { Anchor } from 'assets/styled';

const AboutText = () => (
  <React.Fragment>
    <p>
      Born and raised in Curitiba, Brazil, I started to write HTML with 15 years old - and never
      stopped since then.
    </p>
    <p>
      Working as a front-end developer since 2015, I've already created nice stuff for software
      houses, startups, fintechs and banks - either as a full-time employee or freelancer.
    </p>
    <p>
      I like to say that <em>I'm in love with HTML, CSS and JavaScript</em>, since they're my native
      languages. I also speak portuguese (as my native tongue), english and spanish.
    </p>
    <p>
      Working for those companies helped me to grow a large experience with a lot of tools used in
      web development, from CMSs, frameworks, bundlers, task runners and obviously{' '}
      <em>ye olde HTML and CSS</em>.
    </p>
    <p>
      I've created great solutions using WordPress, React, Vue, Sass, PostCSS, Styled components,
      Jest, Gulp, Webpack, Node, Express, and many more awesome tools. Beyond using those tools,
      I've created great solutions based on accessibility, SEO, performance and semantic code.
    </p>
    <p>
      My skills also include a basic understanding of the CI/CD process, REST APIs, gitflow and
      UI/UX. My focus is to solve problems: solve them in a simple, elegant and permanent way.
    </p>
    <p>
      Besides coding, I like very much to write about technology, development and career; and strung
      my guitar as well.
    </p>
    <p>
      <Anchor as={Link} to="/about/experience">
        Experience and formation
      </Anchor>
    </p>
  </React.Fragment>
);

const About = ({ location }) => (
  <AboutTemplate title="About me." content={<AboutText />} location={location} />
);

export default About;
