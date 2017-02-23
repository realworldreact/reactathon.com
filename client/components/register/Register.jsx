import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';

import styles from './register.styl';

import TitleCard from '../Title-Card.jsx';
import banner from '../../images/banner.png';
import goToIcon from '../../images/goTo.png';
import { trackEvent } from '../../redux/index.js';

const cx = classnames.bind(styles);
const events = [{
  event: 'All Workshops',
  link: 'https://realworldreact.eventbrite.com'
}, {
  event: 'Hiring Mixer',
  link: 'https://react-hiring-mixer.eventbrite.com'
}, {
  event: 'Meetup',
  link: 'https://www.meetup.com/Real-World-React/events/236140965/'
}, {
  event: 'Hackathon',
  link: 'https://react-hackathon.eventbrite.com'
}];

const propTypes = events.reduce((propTypes, { event }) => {
  propTypes[`clickOn${event}`] = PropTypes.func.isRequired;
  return propTypes;
}, {});

function mapDispatchToProps(dispatch) {
  const dispatchers = events.reduce((dispatchers, { event }) => {
    dispatchers[`clickOn${event}`] = () => dispatch(trackEvent({
      category: 'Navbar',
      action: 'click',
      label: `user clicks on ${event} registration link`
    }));
    return dispatchers;
  }, {});

  return () => dispatchers;
}

export class Register extends PureComponent {
  renderEvents() {
    return events.map(({ event, link }) => (
      <div
        className={ cx('row') }
        key={ event }
        >
        <div>{ event }</div>
        <div>
          <a
            href={ link }
            onClick={ this.props[`clickOn${event}`] }
            target='_blank'
            >
            Go To Page<img alt='Go To Icon' src={ goToIcon } />
          </a>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className={ cx('register') }>
        <TitleCard
          id='Register'
          >
          Registration
        </TitleCard>
        <div className={ cx('content') }>
          <header className={ cx('banner') }>
            <div>
              <img
                alt="Reactathon's banner - 2017 San Francisco"
                src={ banner }
              />
            </div>
          </header>
          <div className={ cx('table-container') }>
            <div className={ cx('table') }>
              <div className={ cx('row') }>
                <div>Event</div>
                <div>Sign-up Link</div>
              </div>
              { this.renderEvents() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.displayName = 'Register';
Register.propTypes = propTypes;

export default connect(
  null,
  mapDispatchToProps
)(Register);
