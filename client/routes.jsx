import React from 'react';
import { Route } from 'react-router';
import App from './App.jsx';
import childRoutes from './routes/index.jsx';

export default (
  <Route
    component={ App }
    path='/'
    >
    { childRoutes }
  </Route>
);
