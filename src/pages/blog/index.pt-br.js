import React from 'react';
import { graphql } from 'gatsby';

import BlogListTemplate from 'templates/Blog/List';

const Content = () => (
  <React.Fragment>
    <p>Meus pensamentos e opiniões sobre tecnologia, desenvolvimento, tendências e carreira.</p>
  </React.Fragment>
);

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <BlogListTemplate
      title="Blog."
      content={<Content />}
      posts={posts}
      lang="pt-br"
      location={location}
    />
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: "pt-br" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        timeToRead
        fields {
          slug
          langKey
        }
        frontmatter {
          date(formatString: "DD/MM/YYYY")
          title
          excerpt
          category
        }
      }
    }
  }
`;
