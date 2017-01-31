import { createTypes } from 'redux-create-types';
import { createAction, handleActions } from 'redux-actions';

import workshopsInfo from './workshops.json';
import { createEventMeta } from '../../redux';

const ns = 'workshops';
export const workshopUiName = name => `ui/${name}`;
const initValue = {
  workshopsByName: workshopsInfo.reduce((workshops, { name }) => {
    workshops[workshopUiName(name)] = false;
    return workshops;
  }, {})
};

const types = createTypes(
  [
    'showWorkshopModal',
    'hideWorkshopModal'
  ],
  ns
);

export const showWorkshopModal = createAction(
  types.showWorkshopModal,
  null,
  name => createEventMeta({
    category: 'Workshops',
    action: 'click',
    label: `click on ${name} more info modal`
  })
);
export const hideWorkshopModal = createAction(
  types.hideWorkshopModal,
  null,
  name => createEventMeta({
    category: 'Workshops',
    action: 'click',
    label: `click to close ${name} more info modal`
  })
);

export const workshopsSelector = state => state[ns].workshopsByName;

const reducer = handleActions({
  [showWorkshopModal]: (state, { payload: name }) => {
    const workshopsByName = {
      ...state.workshopsByName,
      [workshopUiName(name)]: true
    };
    return {
      ...state,
      workshopsByName
    };
  },
  [hideWorkshopModal]: (state, { payload: name }) => {
    const workshopsByName = {
      ...state.workshopsByName,
      [workshopUiName(name)]: false
    };
    return {
      ...state,
      workshopsByName
    };
  }
}, initValue);
reducer.__namespace = ns;

export default reducer;
