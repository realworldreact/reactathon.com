import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';

import styles from './sponsors.styl';

import TitleCard from '../Title-Card.jsx';

import { trackEvent } from '../../redux/index.js';

import pinterest from '../../images/sponsors/pinterest-a.png';
import reddit from '../../images/sponsors/reddit.png';
import netlify from '../../images/sponsors/netlify.png';
import serverless from '../../images/sponsors/serverless.png';
import openTable from '../../images/sponsors/opentable.png';
import coursera from '../../images/sponsors/coursera.png';
import accelebrate from '../../images/sponsors/accelebrate.png';
import nyentek from '../../images/sponsors/nyentek.png';
import npr from '../../images/sponsors/npr-2.jpg';
import eventbrite from '../../images/sponsors/eventbrite.png';
import nerdwallet from '../../images/sponsors/nerdwallet.png';
import techqueria from '../../images/sponsors/techqueria.png';
import github from '../../images/sponsors/github-sponsor.png';
import roost from '../../images/sponsors/roost.jpg';
import makeSchool from '../../images/sponsors/make-school.png';
import lyft from '../../images/sponsors/lyft.png';

const cx = classnames.bind(styles);


const clickEvents = [
  'OpenTable',
  'Coursera',
  'NPR',
  'Nyentek',
  'Techqueria',
  'Accelebrate'
];
const propTypes = clickEvents.reduce((propTypes, sponsor) => {
  propTypes[`clickOn${sponsor}`] = PropTypes.func.isRequired;
  return propTypes;
}, {});

function mapDispatchToProps(dispatch) {
  const dispatchers = clickEvents.reduce((dispatchers, sponsor) => {
    dispatchers[`clickOn${sponsor}`] = () => dispatch(trackEvent({
      category: 'Sponsors',
      action: 'click',
      label: `user clicks on ${sponsor}'s logo`
    }));
    return dispatchers;
  }, {});

  return () => dispatchers;
}

export class Sponsors extends PureComponent {
  render() {
    const {
      clickOnOpenTable,
      clickOnCoursera,
      clickOnNPR,
      clickOnNyentek,
      clickOnTechqueria,
      clickOnAccelebrate
    } = this.props;
    return (
      <div className={ cx('sponsors') }>
        <TitleCard id='sponsors'>
          Sponsors
        </TitleCard>
        <div className={ cx('container') }>
          <div className={ cx('title-sponsor', 'tiers') }>
            <div>
              <a
                href='https://www.opentable.com/careers/technology'
                onClick={ clickOnOpenTable }
                target='_blank'
                >
                <img
                  alt="OpenTable's logo"
                  src={ openTable }
                />
              </a>
            </div>
          </div>
          <div className={ cx('tier-1', 'tiers') }>
            <div>
              <img
                alt="Pinterest's logo"
                className={ cx('pinterest') }
                src={ pinterest }
              />
            </div>
            <div>
              <img
                alt="Github's logo"
                className={ cx('github') }
                src={ github }
              />
            </div>
            <div >
              <img
                alt="Lyft's logo"
                className={ cx('lyft') }
                src={ lyft }
              />
            </div>
          </div>
          <div className={ cx('tier-2', 'tiers') }>
            <div>
              <img
                alt="Netlify's logo"
                className={ cx('netlify') }
                src={ netlify }
              />
            </div>
            <div>
              <img
                alt="EventBrite's logo"
                className={ cx('eventbrite') }
                src={ eventbrite }
              />
            </div>
            <div>
              <a
                href='https://www.coursera.org/'
                onClick={ clickOnCoursera }
                target='_blank'
                >
                <img
                  alt="Coursera's logo"
                  className={ cx('coursera') }
                  src={ coursera }
                />
              </a>
            </div>
            <div>
              <img
                alt="Severless' logo"
                className={ cx('serverless') }
                src={ serverless }
              />
            </div>
            <div>
              <img
                alt="Nerdwallet's logo"
                className={ cx('nerdwallet') }
                src={ nerdwallet }
              />
            </div>
            <div>
              <img
                alt="Reddit's logo"
                className={ cx('reddit') }
                src={ reddit }
              />
            </div>
            <div>
              <a
                href='https://www.makeschool.com/'
                target='_blank'
                >
                <img
                  alt='The Make School logo'
                  className={ cx('makeschool') }
                  src={ makeSchool }
                />
              </a>
            </div>
            <div>
              <a
                href='https://www.therooststand.com/'
                target='_blank'
                >
                <img
                  alt='The Roost logo'
                  className={ cx('roost') }
                  src={ roost }
                />
              </a>
            </div>
          </div>
          <div className={ cx('tier-4', 'tiers') }>
            <div>
              <a
                href='https://npr.codes'
                onClick={ clickOnNPR }
                target='_blank'
                >
                <img
                  alt="NPR's logo"
                  className={ cx('npr') }
                  src={ npr }
                />
              </a>
            </div>
          </div>
          <div className={ cx('sponsor-title') }>
            <h2>
              Supporters
            </h2>
          </div>
          <div className={ cx('supporters', 'tiers') }>
            <div>
              <a
                href='https://www.accelebrate.com/training/react'
                onClick={ clickOnAccelebrate }
                target='_blank'
                >
                <img
                  alt="Accelebrate's logo"
                  className={ cx('accelebrate') }
                  src={ accelebrate }
                />
              </a>
            </div>
            <div>
              <a
                href='http://nyentek.com'
                onClick={ clickOnNyentek }
                target='_blank'
                >
                <img
                  alt="Nyentek's logo"
                  className={ cx('nyentek') }
                  src={ nyentek }
                />
              </a>
            </div>
            <div>
              <a
                href='https://techqueria.org/'
                onClick={ clickOnTechqueria }
                target='_blank'
                >
                <img
                  alt="Techqueria's logo"
                  className={ cx('techqueria') }
                  src={ techqueria }
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Sponsors.displayName = 'Sponsors';
Sponsors.propTypes = propTypes;

export default connect(
  null,
  mapDispatchToProps
)(Sponsors);
