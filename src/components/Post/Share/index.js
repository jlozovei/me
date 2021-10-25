import React from 'react';

import { StyledList, StyledListItem } from './styled';

import fbLogo from 'assets/icons/social/facebook.svg';
import ttLogo from 'assets/icons/social/twitter.svg';
import inLogo from 'assets/icons/social/linkedin.svg';
import emailLogo from 'assets/icons/social/email.svg';

const PostShare = ({ post }) => {
  const { title, description, url } = post;

  const shareOptions = [
    {
      key: 'fb',
      name: 'Facebook',
      logo: fbLogo,
      url: `https://www.facebook.com/sharer/sharer.php?u=${url}&title=${title}&description=${description}`
    },
    {
      key: 'tt',
      name: 'Twitter',
      logo: ttLogo,
      url: `https://twitter.com/intent/tweet?text=${title}&url=${url}`
    },
    {
      key: 'in',
      name: 'LinkedIn',
      logo: inLogo,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${description}`
    },
    {
      key: 'email',
      name: 'Email',
      logo: emailLogo,
      url: `mailto:info@example.com?&subject=${title}&body=${url}`
    }
  ];

  return (
    <StyledList data-testid="post-share">
      {shareOptions.map(({ key, name, logo, url }) => {
        return (
          <StyledListItem key={key} data-testid={`share--${key}`}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={logo} alt={name} />
            </a>
          </StyledListItem>
        );
      })}
    </StyledList>
  );
};

PostShare.defaultProps = {
  post: {
    title: '',
    description: '',
    url: ''
  }
};

export { PostShare };
