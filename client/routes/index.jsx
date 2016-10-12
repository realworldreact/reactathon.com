import React from 'react';
import { Route } from 'react-router';

import About from './about/About.jsx';

export default (
  <div>
    <Route
      component={ About }
      path='about'
    />
  </div>
);
