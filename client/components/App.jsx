import React, { PropTypes, Component } from 'react';
import classnames from 'classnames/bind';

import style from './app.styl';
import Header from './header/Header.jsx';
import Footer from './Footer.jsx';


const cx = classnames.bind(style);

export default class App extends Component {
  render() {
    return (
      <div className={ cx('app') }>
        <Header />
        <div className={ cx('app-child') } />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};
