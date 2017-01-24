import React, { PureComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './workshops.styl';
import workshopsInfo from './workshops.json';
import workshopsBg from './bg-workshops.png';

import TitleCard from '../Title-Card.jsx';

import ben from '../../images/peeps/ben.png';
import berks from '../../images/peeps/berks.png';
import brian from '../../images/peeps/brian.png';
import david from '../../images/peeps/david.png';
import mike from '../../images/peeps/mike.png';
import moose from '../../images/peeps/moose.png';

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
    <h4>{ instructor }</h4>
    <h5>{ title }</h5>
    <p>{ company }</p>
  </div>
));

export default class Workshops extends PureComponent {
  render() {
    return (
      <div className={ cx('workshops') }>
        <TitleCard img={ workshopsBg }>
          Workshops
        </TitleCard>
        <div className={ cx('instructors-list') }>
          { instructors }
        </div>
      </div>
    );
  }
}
Workshops.displayName = 'Workshops';
Workshops.propTypes = propTypes;
