import { Route } from 'react-router';
import React from 'react';
import Layout from './Layout';
import App from './App';

export default (
  <Route component={Layout}>
    <Route path="/" component={App} />
  </Route>
);
