import React from 'react';
import { graphql } from 'gatsby';

import { NotFoundTemplate } from 'templates/NotFound';
import { Menu } from 'components/Menu';

import jlozoveiLogo from 'assets/images/brand/jlozovei-white.svg';

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <NotFoundTemplate location={location}>
      <img src={jlozoveiLogo} alt="jlozovei" />

      <h1>404: Not Found</h1>
      <p>You just hit a nonexistent route - or the page was moved somewhere else.</p>
      <p>Please, try one of the working links below:</p>

      <Menu />
    </NotFoundTemplate>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
