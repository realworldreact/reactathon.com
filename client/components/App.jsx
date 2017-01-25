import React, { PropTypes, Component } from 'react';
import classnames from 'classnames/bind';

import style from './app.styl';
import Header from './header/Header.jsx';
import General from './general/General.jsx';
import Meetup from './meetup/Meetup.jsx';
import Workshops from './workshops/Workshops.jsx';
import Mixer from './mixer/Mixer.jsx';
import Hackathon from './hackathon/Hackathon.jsx';
import Sponsors from './sponsors/Sponsors.jsx';
import Register from './register/Register.jsx';
import Footer from './footer/Footer.jsx';

const cx = classnames.bind(style);

export default class App extends Component {
  render() {
    return (
      <div className={ cx('app') }>
        <Header />
        <General />
        <Meetup />
        <Workshops />
        <Mixer />
        <Hackathon />
        <Sponsors />
        <Register />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};
