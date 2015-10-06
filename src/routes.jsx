import { Route, IndexRoute } from 'react-router';
import React from 'react';
import Layout from './Layout';
import App from './App';
import About from './About';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={App} />
    <Route path="/about" component={About} />
  </Route>
);
