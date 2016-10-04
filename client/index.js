import { createElement } from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';

import routes from './routes.js';
import createReducer from './create-reducer';

// protect against undefined when rendering static
const win = typeof window !== 'undefined' ? window : {};
const doc = win.doc ? win.doc : {};

const devTools = win.devToolsExtension ? win.devToolsExtension() : f => f;
const adjustUrlOnReplay = !!win.devToolsExtension;

const store = createStore(
  createReducer(),
  compose(
    applyMiddleware(
      routerMiddleware(browserHistory)
    ),
    devTools
  )
);

// defaults to html5 history
// falls back to hash history if unavailable
const history = syncHistoryWithStore(
  browserHistory,
  store,
  { adjustUrlOnReplay }
);

if (doc.getElementById) {
  render(
    createElement(
      Provider,
      { store },
      createElement(Router, { routes, history })
    ),
    doc.getElementById('app')
  );
}
