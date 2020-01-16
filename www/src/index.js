import React from 'react';
import { hydrate, render } from 'react-dom';
import { Router } from 'react-router-dom';
import ReactGA from 'react-ga';

import history from 'routes/history';

import App from './App';
import './i18n';
import isLocal from 'helpers/isLocal';

import 'assets/css/app.css';

!isLocal() && ReactGA.initialize(process.env.REACT_APP_ANALYTICS_ID);

const Root = () => (
  <Router history={history}>
    <App />
  </Router>
);

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<Root />, rootElement);
} else {
  render(<Root />, rootElement);
}
