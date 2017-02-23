import React, { PropTypes, PureComponent } from 'react';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';

import Workshop from './Workshop.jsx';
import styles from './workshops.styl';
import workshopsInfo from './workshops.json';
import {
  hideWorkshopModal,
  showWorkshopModal,
  workshopUiName,
  workshopsSelector
} from './redux.js';

import TitleCard from '../Title-Card.jsx';
import ActionButton from '../Action-Button.jsx';

import ben from '../../images/peeps/ben.png';
import berks from '../../images/peeps/berks.png';
import brian from '../../images/peeps/brian.png';
import david from '../../images/peeps/david.png';
import mike from '../../images/peeps/mike.png';
import moose from '../../images/peeps/moose.png';
import eventbriteWhite from '../../images/sponsors/eventbrite-white.png';
import reddit from '../../images/sponsors/reddit.png';
import pinterest from '../../images/sponsors/pinterest-a.png';

import esnext from './esnext.png';
import introReact from './intro-react.png';
import reactNative from './react-native.png';
import redux from './redux.png';
import rxjs from './rxjs.png';
import serverlessWorkshop from './serverless-workshop.png';
import webpacking from './webpacking.png'

const images = {
  ben,
  berks,
  brian,
  david,
  mike,
  moose
};
const headers = {
  'ES.next Fundamentals': esnext,
  'React.js Fundamentals': introReact,
  'Integrate Redux into your React App': redux,
  'RxJS & Redux-Observable': rxjs,
  'Webpacking': webpacking,
  'Going Native with React': reactNative,
  'Serverless Apps with AWS Lambda & React': serverlessWorkshop
};
const cx = classnames.bind(styles);
const propTypes = {};
workshopsInfo.forEach(({ name }) => {
  propTypes[name] = PropTypes.shape({
    show: PropTypes.func.isRequired,
    hide: PropTypes.func.isRequired
  });
  propTypes[workshopUiName(name)] = PropTypes.bool;
});
const mapStateToProps = workshopsSelector;
function mapDispatchToProps(dispatch) {
  const dispatchers = workshopsInfo.reduce((dispatchers, { name } = {}) => {
    dispatchers[name] = {
      show: () => dispatch(showWorkshopModal(name)),
      hide: () => dispatch(hideWorkshopModal(name))
    };
    return dispatchers;
  }, {});
  return () => dispatchers;
}
const seen = {};
const instructors = workshopsInfo
  .filter(workshop => {
    if (seen[workshop.instructor]) {
      return false;
    } else {
      seen[workshop.instructor] = true;
      return true;
    }
  })
  .map(({ title, instructor, company, img }) => (
    <div
      className={ cx('instructor-container') }
      key={ instructor }
      >
      <img src={ images[img] }/>
      <h3 className={ cx('instructor') }>
        { instructor }
      </h3>
      <div className={ cx('instructor-info') }>
        <h4>{ title }</h4>
        <h4>{ company }</h4>
      </div>
    </div>
  ));
export class Workshops extends PureComponent {
  render() {
    const workshops = workshopsInfo.map(info => (
      <Workshop
        { ...info }
        className={ cx('workshop-container') }
        closeModal={ this.props[info.name]['hide'] }
        header={ headers[info.name] }
        key={ info.name }
        openModal={ this.props[info.name]['show'] }
        showModal={ this.props[workshopUiName(info.name)] }
      />
    ));
    return (
      <div className={ cx('workshops') }>
        <TitleCard id='Workshops'>
          Workshops
        </TitleCard>
        <div className={ cx('info') }>
          <h1>March 7 - 10</h1>
          <h2>Learn from Leaders in the Field</h2>
          <h3>
            Choose your workshops a la carte,
            or select tracks for multi-day instruction and discounts.
          </h3>
          <h5>
            Please note: ALL of our workshops assume that you
            are comfortable using JavaScript.
          </h5>
        </div>
        <div className={ cx('instructors-list') }>
          { instructors }
        </div>
        <div className={ cx('workshops-list') }>
          { workshops }
        </div>
        <div className={ cx('action') }>
          <ActionButton
            href='https://realworldreact.eventbrite.com'
            target='_blank'
            >
            Buy Tickets
          </ActionButton>
        </div>
        <div className={ cx('sponsor-thanks') }>
          <p>
            Workshops are made possible thanks in part to our venue sponsors:
          </p>
        </div>
        <div className={ cx('sponsors') }>
          <div>
            <img
              alt="Reddit's logo"
              src={ reddit }
            />
          </div>
          <div className={ cx('pinterest') }>
            <img
              alt="Pinterest's logo"
              src={ pinterest }
            />
          </div>
          <div className={ cx('eventbrite') }>
            <img
              alt="Eventbrite's logo"
              src={ eventbriteWhite }
            />
          </div>

        </div>
      </div>
    );
  }
}

Workshops.displayName = 'Workshops';
Workshops.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workshops);
