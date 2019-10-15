import React from 'react';
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
          <a
            href="https://www.reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            title={t('social.react')}
          >
            react
          </a>
          . {t('footer.code')}{' '}
          <a
            href="https://github.com/jlozovei/me"
            target="_blank"
            rel="noopener noreferrer"
            title={t('social.github')}
          >
            github
          </a>
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
