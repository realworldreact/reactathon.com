import React, { PureComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './register.styl';

import TitleCard from '../Title-Card.jsx';
import banner from '../../images/banner.png';
import goToIcon from '../../images/goTo.png';

const cx = classnames.bind(styles);
const propTypes = {};
const events = [{
  event: 'All Workshops',
  link: 'https://ti.to/real-world-react/reactathon-2017'
}, {
  event: 'Hiring Mixer',
  link: 'https://react-hiring-mixer.eventbrite.com'
}, {
  event: 'Meetup',
  link: 'https://www.meetup.com/Real-World-React/events/236140965/'
}, {
  event: 'Hackathon',
  link: '',
  isComingSoon: true
}].map(({ event, link, isComingSoon }) => (
  <div
    className={ cx('row') }
    key={ event }
    >
    <div>{ event }</div>
    <div>
      {
        isComingSoon ?
          'Coming Soon!' :
          (
            <a
              href={ link }
              target='_blank'
              >
              Go To Page<img alt='Go To Icon' src={ goToIcon } />
            </a>
          )
      }
    </div>
  </div>
));

export default class Register extends PureComponent {
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
              { events }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Register.displayName = 'Register';
Register.propTypes = propTypes;
