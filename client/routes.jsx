import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './components/App.jsx';
import Home from './routes/home/Home.jsx';
import childRoutes from './routes/index.jsx';

export default (
  <Route
    component={ App }
    path='/'
    >
    <IndexRoute component={ Home } />
    { childRoutes }
  </Route>
);
