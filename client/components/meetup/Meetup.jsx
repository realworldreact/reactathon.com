import React, { PureComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './meetup.styl';
import pinterest from './pinterest.png';

import ActionButton from '../Action-Button.jsx';
import TitleCard from '../Title-Card.jsx';

import imad from '../../images/peeps/imad.png';
import justin from '../../images/peeps/justin.png';
import david from '../../images/peeps/david.png';

const cx = classnames.bind(styles);
const propTypes = {};
const speakers = [{
  name: 'Imad Elyafi',
  title: 'Front-end Engineer',
  company: 'Pinterest',
  image: imad,
  talkTitle: 'How We Migrated Pinterest Profiles to React'
}, {
  name: 'Justin Bachorik',
  title: 'Lead Web Developer',
  company: 'NPR',
  image: justin,
  talkTitle: 'Modernizing Legacy Codebases'
}, {
  name: 'David Wells',
  title: 'Software Engineer',
  company: 'Serverless',
  image: david,
  talkTitle: 'Scalabale Static Sites with React & Phenomic'
}]
  .map(({ name, title, company, image, talkTitle }) => (
    <div
      className={ cx('speaker-container') }
      key={ name }
      >
      <img src={ image }/>
      <h3>{ name }</h3>
      <h4>{ title }</h4>
      <h4>{ company }</h4>
      <p>{ talkTitle }</p>
    </div>
  ));

export default class Meetup extends PureComponent {
  render() {
    return (
      <div className={ cx('meetup') }>
        <header>
          <TitleCard img='meetup'>
            Meetup
          </TitleCard>
          <h5>
            Tuesday, March 7
          </h5>
            <h6>6:00 PM - 10:00 PM</h6>
            <h6>
              An evening of socializing, networking, and technical presentations
            </h6>
        </header>
        <section className={ cx('speakers') }>
          { speakers }
        </section>
        <section className={ cx('sponsor') }>
          <ActionButton>
            Register Free
          </ActionButton>
          <div>Food & Drink Provided</div>
          <div>Presented By</div>
          <img src={ pinterest }/>
        </section>
      </div>
    );
  }
}
Meetup.displayName = 'Meetup';
Meetup.propTypes = propTypes;
