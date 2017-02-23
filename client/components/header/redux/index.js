import { map } from 'rxjs/operator/map';
import { filter } from 'rxjs/operator/filter';
import { createAction, handleActions } from 'redux-actions';
import { createTypes } from 'redux-create-types';

export const ns = 'header';
export const initialState = {};

export const types = createTypes([
  'canWeLoadVideo',
  'screenIsToSmall',
  'loadVideo',
  'shouldLoad'
], ns);

export const loadVideo = createAction(types.loadVideo);
export const screenIsToSmall = createAction(types.screenIsToSmall);

export const shouldLoadProp = 'ui/shouldLoad';

export const shouldLoadSelector = state => {
  return state[ns][shouldLoadProp];
};

export const canWeLoadVideo = createAction(types.canWeLoadVideo);
export function canWeLoadVideoEpic(actions, state, { window }) {
  return actions
    .ofType(types.canWeLoadVideo)
    ::map(() => {
      if (
        typeof window.matchMedia === 'function' &&
        // 48em comes from client/vars.style::$scale['sm']
        !window.matchMedia('(min-width: 48em)').matches
      ) {
        return screenIsToSmall();
      }
      return loadVideo();
    })
    ::filter(Boolean);
}


export const rootEpic = canWeLoadVideoEpic;

const reducer = handleActions({
  [loadVideo]: state => ({
    ...state,
    [shouldLoadProp]: true
  })
}, initialState);

reducer.toString = () => ns;
export default reducer;

