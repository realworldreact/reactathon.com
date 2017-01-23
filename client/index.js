import { createElement } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import createReducer from './create-reducer';

// protect against undefined when rendering static
const win = typeof window !== 'undefined' ? window : {};
const doc = win.document ? win.document : {};
const devTools = win.devToolsExtension ? win.devToolsExtension() : f => f;

export const store = createStore(createReducer(), devTools);

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
