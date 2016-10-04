import { createElement } from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';

import routes from './routes.jsx';
import createReducer from './create-reducer';

// protect against undefined when rendering static
const win = typeof window !== 'undefined' ? window : {};
const doc = win.doc ? win.doc : {};

const devTools = win.devToolsExtension ? win.devToolsExtension() : f => f;
const adjustUrlOnReplay = !!win.devToolsExtension;

export const store = createStore(
  createReducer(),
  compose(
    applyMiddleware(
      routerMiddleware(browserHistory)
    ),
    devTools
  )
);

let history;
if (browserHistory) {
  history = syncHistoryWithStore(
    browserHistory,
    store,
    { adjustUrlOnReplay }
  );
}

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
