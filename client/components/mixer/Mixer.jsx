import React, { PureComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './mixer.styl';
import mixerBg from './bg-mixer.png';
import sponsorsBg from './bg-sponsors.png';

import TitleCard from '../Title-Card.jsx';
import ActionButton from '../Action-Button.jsx';
import reddit from '../../images/sponsors/reddit.png';
import plus from '../../images/sponsors/plus.png';

const cx = classnames.bind(styles);
const propTypes = {};

export default class Mixer extends PureComponent {
  render() {
    return (
      <div className={ cx('mixer') }>
        <TitleCard img={ mixerBg }>
          Hiring Mixer
        </TitleCard>
        <div className={ cx('cards') }>
          <div className={ cx('info') }>
            <h2>Friday, March 10</h2>
            <h3>6:30PM - 9:30PM</h3>
            <h3>
              Join us for an evening of food, drinks, and networking.
            </h3>
          </div>
          <div className={ cx('you') }>
            <div>
              <h2>San Francisco's Hottest Companies</h2>
            </div>
            <div><img src={ plus } /></div>
            <div>
              <h2>You</h2>
            </div>
          </div>
          <div className={ cx('sponsors') }>
            <img src={ sponsorsBg } />
          </div>
          <div className={ cx('presented') }>
            <div>
              <ActionButton>
                Register Free
              </ActionButton>
            </div>
            <p>
              Presented by
            </p>
            <div>
              <img src={ reddit } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Mixer.displayName = 'Mixer';
Mixer.propTypes = propTypes;
