import React from 'react';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import { Seo } from 'containers/Seo';
import { Page } from 'assets/styled';

import { language } from 'helpers/language';

import { GlobalBody, GlobalTypography } from 'assets/styled';

const Default = ({ children, location, meta }) => {
  const lang = language(location.pathname);

  return (
    <React.Fragment>
      <GlobalBody />
      <GlobalTypography />
      <Seo info={meta} location={location} />

      <Header lang={lang} />

      <Page>{children}</Page>

      <Footer lang={lang} />
    </React.Fragment>
  );
};

export { Default };
