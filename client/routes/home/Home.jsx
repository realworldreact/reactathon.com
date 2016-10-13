import React, { Component } from 'react';
import classnames from 'classnames/bind';

import styles from './home.styl';

const cx = classnames.bind(styles);

const propTypes = {};
export default class Home extends Component {
  render() {
    return (
      <div className={ cx('home', 'col-sm-6', 'col-sm-offset-3') }>
        <header>
          <h3>Home</h3>
        </header>
        <article>
          Text
        </article>
      </div>
    );
  }
}
Home.displayName = 'Home';
Home.propTypes = propTypes;
