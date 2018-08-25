import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import indexRoutes from '../routes/index';

const hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => (
            <Route path={prop.path} component={prop.component} key={key} />
          ))}
        </Switch>
      </Router>
    );
  }
}

export default hot(module)(App);
