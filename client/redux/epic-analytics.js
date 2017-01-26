import capitalize from 'lodash/capitalize';
import { of } from 'rxjs/observable/of';

import { filter } from 'rxjs/operator/filter';
import { map } from 'rxjs/operator/map';
import { ignoreElements } from 'rxjs/operator/ignoreElements';
import { _catch } from 'rxjs/operator/catch';

// analytics types
// interface social {
//   network: String, // facebook, twitter, etc
//   action: String, // like, favorite, etc
//   target: String // url like fcc.com or any other string
// }
// interface event {
//   category: String,
//   action: String,
//   label?: String,
//   value?: String
// }
//
const types = [ 'event', 'social' ];
function formatFields({ type, ...fields }) {
  // make sure type is supported
  if (!types.some(_type => _type === type)) {
    return null;
  }
  return Object.keys(fields).reduce((_fields, field) => {
    _fields[ type + capitalize(field) ] = fields[ field ];
    return _fields;
  }, { type });
}

export default function analyticsEpic(actions, getState, { ga }) {
  if (typeof ga !== 'function') {
    return of({
      type: 'GA_ERROR',
      payload: new Error('GA not found'),
      error: true
    });
  }
  return actions
    ::filter(({ meta }) => !!(meta && meta.analytics && meta.analytics.type))
    ::map(({ meta: { analytics } }) => formatFields(analytics))
    ::filter(Boolean)
    ::map(({ type, ...fields }) => ga('send', type, fields))
    ::ignoreElements()
    ::_catch(err => of({
      type: 'GA_ERROR',
      payload: err,
      error: true
    }));
}
