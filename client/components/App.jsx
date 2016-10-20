import React, { PropTypes, Component } from 'react';
import classnames from 'classnames/bind';
import 'flexboxgrid/dist/flexboxgrid.css';

import style from './app.styl';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';


const cx = classnames.bind(style);

export default class App extends Component {
  render() {
    return (
      <div className={ cx('app') }>
        <Nav />
        <div className={ cx('app-child', 'container-fluid') }>
          { this.props.children }
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};
