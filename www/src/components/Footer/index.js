import React from 'react';
import ReactGA from 'react-ga';
import { useTranslation } from 'react-i18next';

import { StyledFooter, StyledFlexContainer } from './styled';

const Footer = ({ children }) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter className="footer">
      <StyledFlexContainer>
        <p>
          {t('footer.built')}{' '}
          <span role="img" aria-label={t('footer.love')}>
            ❤️
          </span>
          {t('footer.using')}{' '}
          <ReactGA.OutboundLink
            eventLabel="Footer - react"
            to="https://www.reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            title={t('social.react')}
          >
            react
          </ReactGA.OutboundLink>
          . {t('footer.code')}{' '}
          <ReactGA.OutboundLink
            eventLabel="Footer - github"
            to="https://github.com/jlozovei/me"
            target="_blank"
            rel="noopener noreferrer"
            title={t('social.github')}
          >
            github
          </ReactGA.OutboundLink>
          .
        </p>
        <p>
          <span role="img" aria-label="copyright">
            ©️
          </span>{' '}
          jlozovei {currentYear}
        </p>
      </StyledFlexContainer>
    </StyledFooter>
  );
};

export default Footer;
