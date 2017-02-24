import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';

import style from './header.styl';
import reactathonLogo from './reactathon-logo.png';
import rwrLogo from './rwr-logo.png';
import VideoBackground from './Video-Background.jsx';

import ActionButton from '../Action-Button.jsx';

import { trackEvent } from '../../redux/index.js';
import openTableWhite from '../../images/sponsors/opentable-white.png';

const routes = [
  'Meetup',
  'Workshops',
  'Register',
  'Hiring-Mixer',
  'Hackathon'
];

const cx = classnames.bind(style);
const propTypes = routes.reduce((propTypes, route) => {
  propTypes[`clickOn${route}`] = PropTypes.func.isRequired;
  return propTypes;
}, {});
propTypes.clickOnRWR = PropTypes.func.isRequired;

function mapDispatchToProps(dispatch) {
  const dispatchers = routes.reduce((dispatchers, route) => {
    dispatchers[`clickOn${route}`] = () => dispatch(trackEvent({
      category: 'Navbar',
      action: 'click',
      label: `user clicks on ${route} navigation button`
    }));
    return dispatchers;
  }, {});

  dispatchers.clickOnRWR = () => dispatch(trackEvent({
    category: 'Navbar',
    action: 'click',
    label: "user clicks on Real World React's logo header button"
  }));

  return () => dispatchers;
}


export class Header extends Component {

  renderLinks() {
    const links = routes.map(content => (
      <li key={ content }>
        <a
          className={ cx('link') }
          href={ `/#${content}` }
          onClick={ this.props[`clickOn${content}`] }
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
            onClick={ this.props[`clickOn${routes[2]}`] }
            >
            Register Now
          </ActionButton>
        </div>
      </li>
    );
    return links;
  }

  render() {
    const {
      clickOnRWR
    } = this.props;
    return (
      <div className={ cx('header') }>
        <VideoBackground />
        <div className={ cx('title-sponsor') }>
          <img
            alt="OpenTables's logo"
            src={ openTableWhite }
          />
          <p>Presents</p>
        </div>
        <div className={ cx('logo') }>
          <img
            alt="Reactathon's logo"
            src={ reactathonLogo }
          />
        </div>
        <div className={ cx('date') }>
          <h3>March 7 - 12</h3>
        </div>
        <div className={ cx('rwr-logo') }>
          <span>Organized By</span>
          <div>
            <a
              href='https://www.realworldreact.com'
              onClick={ clickOnRWR }
              target='_blank'
              >
              <img
                alt="Real World React's logo"
                src={ rwrLogo }
              />
            </a>
          </div>
        </div>
        <nav className={ cx('nav') }>
          <ul>
            { this.renderLinks() }
          </ul>
        </nav>
      </div>
    );
  }
}

Header.displayName = 'Header';
Header.propTypes = propTypes;

export default connect(
  null,
  mapDispatchToProps
)(Header);
