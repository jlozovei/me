import React from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

import { history } from './history';

import Home from 'pages/Home';
import Me from 'pages/Me';
import NotFound from 'pages/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/me" component={Me} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </BrowserRouter>
);

export default Routes;
