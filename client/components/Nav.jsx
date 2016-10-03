import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classnames from 'classnames/bind';

import style from './nav.styl';

const cx = classnames.bind(style);
const propTypes = { };

const mapStateToProps = state => state;

export class Nav extends Component {

  render() {
    return (
      <nav className={ cx('nav') }>
        <Link
          className={ cx('nav-logo') }
          to='/'
          >
          Logo
        </Link>
      </nav>
    );
  }
}

Nav.propTypes = propTypes;

export default connect(
  mapStateToProps
)(Nav);
