import React, { PropTypes, PureComponent } from 'react';
import classnames from 'classnames/bind';
import isEmail from 'validator/lib/isEmail';
import { reduxForm } from 'redux-form';

import styles from './hackathon.styl';
import hackathonBg from './bg-hackathon.png';

import TitleCard from '../Title-Card.jsx';
import {
  DOMOnlyProps,
  createFormValidator,
  makeFieldRequired
} from '../../form-utils.js';
import { trackEvent } from '../../redux/index.js';

const cx = classnames.bind(styles);
const propTypes = {
  fields: PropTypes.object,
  invalid: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  submitToUpdates: PropTypes.func.isRequired
};
const hiddenName = 'b_61b17cbde66a062a953c16339_c14aaf8666';

const validators = {
  email: makeFieldRequired(isEmail),
  hidden: (value) => !value
};

function mapDispatchToProps(dispatch) {
  const dispatchers = {
    submitToUpdates: () => dispatch(trackEvent({
      category: 'Hackathon',
      action: 'submit',
      label: 'user subscribes to hackathon updates'
    }))
  };
  // redux-form does not respect mapDispatchFactory
  // will move on to this form on the move to react-redux-form
  // return () => dispatchers;
  return dispatchers;
}

export class Hackathon extends PureComponent {
  render() {
    const {
      invalid = true,
      isSubmitting,
      fields: { hidden, email },
      submitToUpdates
    } = this.props;
    return (
      <div className={ cx('hackathon') }>
        <TitleCard img={ hackathonBg } >
          Hackathon
        </TitleCard>
        <div className={ cx('content') }>
          <div className={ cx('info') }>
            <h1>Saturday, March 11-Sunday, March 12</h1>
            <h3>9:00AM-8:00PM</h3>
            <h2>
              Come hack with some incredible APIs,
              build a startup,
              or join a team to improve your skills.
            </h2>
            <h2>
              The goal of this hackathon is to foster collaboration
              and learning as much as competition.
            </h2>
          </div>
          <div className={ cx('register') }>
            <h1>Hackathon registration opens soon.</h1>
            <h3>Sign up here to get notified when it opens</h3>
            <div>
              <form
                action={
                  '//reactathon.us12.list-manage.com/subscribe/post?' +
                  'u=61b17cbde66a062a953c16339&amp;id=c14aaf8666'
                }
                method='post'
                name='mail-chimp'
                noValidate={ true }
                onSubmit={ submitToUpdates }
                target='_blank'
                >
                <input
                  { ...DOMOnlyProps(email) }
                  className={
                    cx(
                      'email',
                      { error: email.error && email.value.length > 3 }
                    )
                  }
                  name='EMAIL'
                  placeholder='your email'
                  type='email'
                />
                <input
                  className={
                    cx(
                      'button',
                      { active: !invalid || !isSubmitting }
                    )
                  }
                  disabled={ invalid || isSubmitting }
                  name='subscribe'
                  type='submit'
                  value='Subscribe'
                />
                {
                  email.value.length >= 3 && email.error ?
                    <p>Email is invalid</p> :
                    null
                }
                <div
                  aria-hidden='true'
                  style={{
                    position: 'absolute',
                    left: '-5000px'
                  }}
                  >
                  <input
                    { ...DOMOnlyProps(hidden) }
                    name={ hiddenName }
                    tabIndex='-1'
                    type='text'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Hackathon.displayName = 'Hackathon';
Hackathon.propTypes = propTypes;
export default reduxForm(
  {
    form: 'mail-chimp',
    validate: createFormValidator(validators),
    fields: Object.keys(validators)
  },
  null,
  mapDispatchToProps
)(Hackathon);
