import { createAction } from 'redux-actions';
import { createTypes } from 'redux-create-types';

export {
  default as rootEpic
} from './epic-analytics.js';


export const ns = 'app';
const types = createTypes([
  'analytics'
], ns);

const throwIfUndefined = () => {
  throw new TypeError('Argument must not be of  type `undefined`');
};

export function createEventMeta({
  category = throwIfUndefined(),
  action = throwIfUndefined(),
  label,
  value
} = throwIfUndefined()) {
  return {
    analytics: {
      type: 'event',
      category,
      action,
      label,
      value
    }
  };
}

export const trackEvent = createAction(
  types.analytics,
  null,
  createEventMeta
);

export const trackSocial = createAction(
  types.analytics,
  null,
  (
    network = throwIfUndefined(),
    action = throwIfUndefined(),
    target = throwIfUndefined()
  ) => ({
    analytics: {
      type: 'event',
      network,
      action,
      target
    }
  })
);

const reducer = (state = {}) => state;
reducer.toString = () => ns;

export default reducer;
