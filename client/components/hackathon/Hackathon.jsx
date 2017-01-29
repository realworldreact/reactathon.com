import React, { PropTypes, PureComponent } from 'react';
import classnames from 'classnames/bind';
import isEmail from 'validator/lib/isEmail';
import { reduxForm } from 'redux-form';
import ActionButton from '../Action-Button.jsx';

import styles from './hackathon.styl';

import TitleCard from '../Title-Card.jsx';
import {
  DOMOnlyProps,
  createFormValidator,
  makeFieldRequired
} from '../../form-utils.js';
import { trackEvent } from '../../redux/index.js';

const cx = classnames.bind(styles);
const volunteerUrl = 'https://docs.google.com/forms/d/e/' +
  '1FAIpQLSdkgVtFTUggBhnXZwK6RYhXUJhB0ainAxR31XEwkFVO8bBu3Q/viewform';
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
        <TitleCard
          id='Hackathon'
          >
          Hackathon
        </TitleCard>
        <div className={ cx('content') }>
          <div className={ cx('info') }>
            <h1>Saturday, March 11 - Sunday, March 12</h1>
            <h3>9:00AM-8:00PM</h3>
            <h4>
              Come hack with some incredible APIs,
              build a startup,
              or join a team to improve your skills.
            </h4>
            <h5>
              The goal of this hackathon is to foster collaboration
              and learning as much as competition.
            </h5>
          </div>
          <div className={ cx('register') }>
            <h1>Hackathon Registration Now Open</h1>
            <h3>
              Developers, Designers, and Entrepreneurs Welcome
            </h3>
            <div>
              <ActionButton href='#Register'>
                Register Free
              </ActionButton>
              <p>
                Food & Drink Provided
              </p>
              <p className={ cx('volunteers') }>
                Intersted in volunteering?
                <span>{ ' ' }</span>
                <a
                  href={ volunteerUrl }
                  target='_blank'
                  >
                  Go here
                </a>
              </p>
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
