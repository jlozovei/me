import React from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

import history from './history';

import Home from 'pages/Home';
import Me from 'pages/Me';
import Uses from 'pages/Uses';
import Work from 'pages/Work';
import NotFound from 'pages/NotFound';

const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/me" component={Me} />
        <Route exact path="/uses" component={Uses} />
        <Route exact path="/work" component={Work} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </BrowserRouter>
);

export default Routes;
