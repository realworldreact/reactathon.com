import React, { Component } from 'react';
import classnames from 'classnames/bind';

import style from './header.styl';
import reactathonLogo from './reactathon-logo.png';
import rwrLogo from './rwr-logo.png';
import ActionButton from '../Action-Button.jsx';

const routes = [
  'Meetup',
  'Workshops',
  null,
  'Hiring-Mixer',
  'Hackathon'
];

const cx = classnames.bind(style);
const propTypes = {};
const links = routes.map(content => (
  <li key={ content }>
    <a
      className={ cx('link') }
        href={ `/#${content}` }
        >
      { content }
    </a>
  </li>
));
links[2] = (
  <li key='register'>
    <div className={ cx('register') }>
      <ActionButton
        href='/#Register'
        >
        Register Now
      </ActionButton>
    </div>
  </li>
);

export default class Nav extends Component {

  render() {
    return (
      <div className={ cx('header') }>
        <div className={ cx('title-sponsor') } />
        <div className={ cx('logo') }>
          <img src={ reactathonLogo } />
        </div>
        <div className={ cx('date') }>
          <h3>March 7 - 12</h3>
        </div>
        <div className={ cx('rwr-logo') }>
          <span>Organized By</span>
          <div><img src={ rwrLogo } /></div>
        </div>
        <nav className={ cx('nav') }>
          <ul>
            { links }
          </ul>
        </nav>
      </div>
    );
  }
}

Nav.propTypes = propTypes;
