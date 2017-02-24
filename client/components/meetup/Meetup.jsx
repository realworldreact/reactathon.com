import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';

import styles from './meetup.styl';
import pinterest from './pinterest.png';

import ActionButton from '../Action-Button.jsx';
import TitleCard from '../Title-Card.jsx';

import { trackEvent } from '../../redux/index.js';

import imad from '../../images/peeps/imad.png';
import justin from '../../images/peeps/justin.png';
import david from '../../images/peeps/david.png';
import harry from '../../images/peeps/harry.png';

const cx = classnames.bind(styles);
const propTypes = {
  clickOnRegister: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  const dispatchers = {
    clickOnRegister: () => dispatch(trackEvent({
      category: 'Meetup',
      action: 'click',
      label: 'user clicks on Meetup register button'
    }))
  };
  return () => dispatchers;
}
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
  name: 'Harry Tormey',
  title: 'Software Engineer',
  company: 'Mobile',
  image: harry,
  talkTitle: 'When To Go Native Over Javascript'
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
        <img
          alt={ `${name}'s pretty face` }
          src={ image }
        />
      <h3>{ name }</h3>
      <h4>{ title }</h4>
      <h4>{ company }</h4>
      <p>{ talkTitle }</p>
    </div>
  ));

export class Meetup extends PureComponent {
  render() {
    return (
      <div className={ cx('meetup') }>
        <header>
          <TitleCard
            id='Meetup'
            >
            Meetup
          </TitleCard>
          <h2>
            Tuesday, March 7
          </h2>
            <h3>
              6:00 PM - 10:00 PM
            </h3>
            <h5>
              An evening of socializing, networking, and technical presentations
            </h5>
            <h4>
              Featuring
            </h4>
        </header>
        <section className={ cx('speakers') }>
          { speakers }
        </section>
        <section className={ cx('sponsor') }>
          <ActionButton
            href='#Register'
            onClick={ this.props.clickOnRegister }
            >
            Register Free
          </ActionButton>
          <div>Food & Drink Provided</div>
          <div>Presented By</div>
          <img
            alt="Pinterest's logo"
            src={ pinterest }
          />
        </section>
      </div>
    );
  }
}
Meetup.displayName = 'Meetup';
Meetup.propTypes = propTypes;

export default connect(
  null,
  mapDispatchToProps
)(Meetup);
