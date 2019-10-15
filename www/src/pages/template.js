import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Page from 'components/Page';

const Template = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Page>{children}</Page>
      <Footer />
    </React.Fragment>
  );
};

export default Template;
