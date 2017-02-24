import omit from 'lodash/omit';

export function makeFieldRequired(validator) {
  return (val) => val ? validator(val) : false;
}

export function createFormValidator(fieldValidators) {
  const fieldKeys = Object.keys(fieldValidators);
  return values => fieldKeys
    .map(field => {
      if (fieldValidators[field](values[field])) {
        return null;
      }
      return { [field]: !fieldValidators[field](values[field]) };
    })
    .filter(Boolean)
    .reduce((errors, error) => ({ ...errors, ...error }), {});
}

// this should filter out none-dom props to silence React warnings
export function DOMOnlyProps(field) {
  return omit(field, [
    'initialValue',
    'autofill',
    'autocompleted',
    'onUpdate',
    'valid',
    'invalid',
    'dirty',
    'pristine',
    'active',
    'touched',
    'visited',
    'autofilled',
    'error'
  ]);
}
