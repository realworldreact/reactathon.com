import React, { PropTypes, Component } from 'react';
import classnames from 'classnames/bind';

import style from './index.styl';
import Nav from './components/Nav.jsx';

const cx = classnames.bind(style);

export default class App extends Component {
  render() {
    return (
      <div className={ cx('app') }>
        <Nav />
        <div className={ cx('app-child') }>
          { this.props.children }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};
