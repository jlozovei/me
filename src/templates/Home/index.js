import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { Default } from 'templates/Default';

import { List } from 'components/List';

import { SOCIAL_NETWORKS } from 'constants/social';

import { Container, Anchor } from 'assets/styled';
import { StyledSection, StyledTextContainer } from './styled';

import jlozoveiLogo from 'assets/images/brand/jlozovei-white.svg';

const HomeTemplate = ({ title, content, location }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
          }
        }
      }
    `
  );

  const socialLinks = Object.keys(SOCIAL_NETWORKS).map((key) => {
    const network = SOCIAL_NETWORKS[key];

    return {
      key,
      render: () => (
        <Anchor as={OutboundLink} href={network.url} target="_blank" rel="noopener noreferrer">
          {network.name}
        </Anchor>
      )
    };
  });

  return (
    <Default
      location={location}
      meta={{
        title: site.siteMetadata.description
      }}
    >
      <StyledSection>
        <Container>
          <StyledTextContainer>
            <h1>
              jlozovei
              <img src={jlozoveiLogo} alt="jlozovei" />
            </h1>
            <h2>{title}</h2>

            {content}

            <List items={socialLinks} />
          </StyledTextContainer>
        </Container>
      </StyledSection>
    </Default>
  );
};

export { HomeTemplate };
