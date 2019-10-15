import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import { history } from 'routes/history';

import App from './App';
import './i18n';

import 'assets/css/app.css';

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
