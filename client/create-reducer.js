import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import app from './redux';
import workshops from './components/workshops/redux.js';
import header from './components/header/redux';

export default function createReducer() {
  return combineReducers({
    form,
    routing,
    [app]: app,
    [workshops]: workshops,
    [header]: header
  });
}
