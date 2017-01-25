import React, { PureComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './general.styl';
import checkMark from './check-mark.png';

const cx = classnames.bind(styles);
const propTypes = {};

export default class General extends PureComponent {
  render() {
    return (
      <div className={ cx('general') }>
        <div className={ cx('quote') }>
          <h2>
      “React has challenged the way we builduser interfaces. Fundamentally.”
          </h2>
          <h3>
            -Tom Occhino, Manager of the React Team at Facebook
          </h3>
        </div>
        <div className={ cx('about') }>
          <h2>About</h2>
          <p>
            Developers from around the world will descend on Silicon Valley for
            Facebook’s React Conf on March 13-14.
          </p>
          <p>
            Reactathon is a week of community-run events in San Francisco
            leading up to the conference.
          </p>
        </div>
        <div className={ cx('goals') }>
          <h2>Goals</h2>
          <ul>
            <li>
              <img src={ checkMark }/>
              Build Community
            </li>
            <li>
              <img src={ checkMark }/>
              Educate Newcomers
            </li>
            <li>
              <img src={ checkMark }/>
              Showcase the Experts
            </li>
            <li>
              <img src={ checkMark }/>
              Further Empower the Advanced
            </li>
            <li>
              <img src={ checkMark }/>
              Fun!
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
General.displayName = 'General';
General.propTypes = propTypes;
