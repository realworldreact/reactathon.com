import React, { PureComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './workshops.styl';
import workshopsInfo from './workshops.json';

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

const images = {
  ben,
  berks,
  brian,
  david,
  mike,
  moose
};
const cx = classnames.bind(styles);
const propTypes = {};
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
const workshops = workshopsInfo.map(({
  name,
  date,
  title,
  company,
  instructor,
  difficulty
}) => (
  <div
    className={ cx('workshop-container') }
    key={ name }
    >
    <div className={ cx('workshop-info') }>
      <header className={ cx('title-container') }>
        <h4 className={ cx('title') }>
          { difficulty }
        </h4>
      </header>
      <h2 className={ cx('name') }>
        { name }
      </h2>
      <h3 className={ cx('instructor') }>
        { instructor }
      </h3>
      <h4 className={ cx('inst-title') }>
        { title }, { company }
      </h4>
    </div>
    <div className={ cx('date') }>
      { date }
    </div>
  </div>
));
export default class Workshops extends PureComponent {
  render() {
    return (
      <div className={ cx('workshops') }>
        <TitleCard
          id='Workshops'
          >
          Workshops
        </TitleCard>
        <div className={ cx('info') }>
          <h1>March 7 - 10</h1>
          <h2>Learn from Leaders in the Field</h2>
          <h3>
            Choose your workshops a la carte,
            or select tracks for multi-day instruction and discounts.
            <br />Please note: ALL of our workshops assume that you are
            comfortable using JavaScript.
          </h3>
        </div>
        <div className={ cx('instructors-list') }>
          { instructors }
        </div>
        <div className={ cx('workshops-list') }>
          { workshops }
        </div>
        <div className={ cx('action') }>
          <ActionButton
            href='https://ti.to/real-world-react/reactathon-2017'
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
