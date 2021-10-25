import React from 'react';
import { Link, graphql } from 'gatsby';

import { Default } from 'templates/Default';
import { PostMeta, PostShare } from 'components/Post';

import { PAGES } from 'constants/pages';

import { Container, SectionWatermark, Anchor } from 'assets/styled';
import {
  StyledArticle,
  StyledArticleHeader,
  StyledArticleBody,
  StyledPostContent,
  StyledShare,
  StyledBackLink
} from './styled';

const BackLink = ({ lang }) => {
  const blogListLink = PAGES[lang].find((page) => page.key === 'blog');

  return (
    <StyledBackLink>
      <p>
        <Anchor as={Link} to={blogListLink.path}>
          &larr; {lang === 'en' ? 'See all posts' : 'Ver todos os artigos'}
        </Anchor>
      </p>
    </StyledBackLink>
  );
};

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const { fields, frontmatter, timeToRead } = post;
  const { site } = data;

  return (
    <Default
      location={location}
      meta={{ title: frontmatter.title, description: frontmatter.excerpt }}
    >
      <SectionWatermark>
        <Container>
          <BackLink lang={fields.langKey} />

          <StyledArticle className="blog-post" itemScope itemType="http://schema.org/Article">
            <StyledArticleHeader>
              <PostMeta
                meta={{
                  date: frontmatter.date,
                  lang: fields.langKey,
                  readingTime: timeToRead,
                  category: frontmatter.category
                }}
              />
              <h1 itemProp="headline">{frontmatter.title}</h1>
            </StyledArticleHeader>

            <StyledArticleBody>
              <StyledPostContent
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
              />

              <StyledShare>
                <PostShare
                  post={{
                    title: frontmatter.title,
                    description: frontmatter.excerpt,
                    url: `${site.siteMetadata.siteUrl}${fields.slug}`
                  }}
                />
              </StyledShare>
            </StyledArticleBody>
          </StyledArticle>
        </Container>
      </SectionWatermark>
    </Default>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MM/DD/YYYY")
        title
        category
        excerpt
      }
      fields {
        langKey
        slug
      }
    }
  }
`;
