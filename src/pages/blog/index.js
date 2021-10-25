import * as React from 'react';
import { graphql } from 'gatsby';

import BlogListTemplate from 'templates/Blog/List';

const Content = () => (
  <React.Fragment>
    <p>My thoughts and opinions about technology, development, trends and career.</p>
  </React.Fragment>
);

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <BlogListTemplate
      title="Blog."
      content={<Content />}
      posts={posts}
      lang="en"
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
      filter: { fields: { langKey: { eq: "en" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        timeToRead
        fields {
          slug
          langKey
        }
        frontmatter {
          date(formatString: "MM/DD/YYYY")
          title
          excerpt
          category
        }
      }
    }
  }
`;
