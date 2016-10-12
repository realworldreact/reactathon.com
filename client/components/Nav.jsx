import React, { Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames/bind';

import style from './nav.styl';
import logo from '../../images/logo.gif';

const cx = classnames.bind(style);
const propTypes = { };

export default class Nav extends Component {

  render() {
    return (
      <nav className={ cx('navbar') }>
        <div className={ cx('brand') }>
          <Link to='/'>
            <img
              alt='logo'
              src={ logo }
            />
          </Link>
        </div>
        <nav className={ cx('links') }>
          <ul>
            <li>
              <Link to='/about'>
                About
              </Link>
            </li>
            <li>
              <Link to='/other-link'>
                Other Link
              </Link>
            </li>
          </ul>
        </nav>
      </nav>
    );
  }
}

Nav.propTypes = propTypes;
