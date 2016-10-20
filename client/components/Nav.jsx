import React, { Component } from 'react';
import { Link } from 'react-router';

import './nav.styl';
import logo from '../../images/logo.gif';

const propTypes = { };

export default class Nav extends Component {

  render() {
    return (
      <nav className='row start-sm between-sm'>
        <div className='col-xs col-md-2'>
          <Link to='/'>
            <img
              alt='logo'
              src={ logo }
            />
          </Link>
        </div>
        <ul className='col-xs row end-xs'>
          <Link to='/about'>
            <li>
              About
            </li>
          </Link>
          <Link to='/other-link'>
            <li>
              Other Link
            </li>
          </Link>
        </ul>
      </nav>
    );
  }
}

Nav.propTypes = propTypes;
