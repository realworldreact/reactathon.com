import { createElement } from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';


import App from './components/App.jsx';
import createReducer from './create-reducer';
import rootEpic from './redux/epic-analytics.js';

// protect against undefined when rendering static
const win = typeof window !== 'undefined' ? window : {};
const doc = win.document ? win.document : {};
const devTools = win.devToolsExtension ? win.devToolsExtension() : f => f;

const epicDependencies = {
  window: win,
  document: doc,
  ga: win.ga
};
export const store = createStore(
  createReducer(),
  compose(
    applyMiddleware(createEpicMiddleware(
      (actions, store) => rootEpic(actions, store, epicDependencies)
    )),
    devTools
  )
);

if (doc.getElementById) {
  render(
    createElement(
      Provider,
      { store },
      createElement(App)
    ),
    doc.getElementById('app')
  );
}
