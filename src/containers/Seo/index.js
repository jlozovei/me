import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { language } from 'helpers/language';

const Seo = ({ info, location }) => {
  const { description, meta, title } = info;
  const lang = language(location.pathname);

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata.title;
  const metatags = meta || [];

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          name: 'theme-color',
          content: '#26282b'
        },
        {
          name: 'msapplication-navbutton-color',
          content: '#26282b'
        },
        {
          name: 'apple-mobile-web-app-status-bar-styl',
          content: '#26282b'
        },
        {
          name: 'pinterest',
          content: 'nopin'
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:image',
          content: `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:creator',
          content: 'juliolozovei'
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: metaDescription
        },
        {
          property: 'twitter:image',
          content: `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`
        }
      ].concat(metatags)}
    />
  );
};

Seo.defaultProps = {
  info: {
    title: '',
    description: '',
    meta: []
  },
  location: {
    pathname: ''
  }
};

Seo.propTypes = {
  info: PropTypes.object,
  location: PropTypes.object
};

export { Seo };
