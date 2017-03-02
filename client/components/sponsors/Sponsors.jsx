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
                src={ pinterest }
              />
            </div>
            <div>
              <img
                alt="Github's logo"
                src={ github }
              />
            </div>
            <div className={ cx('lyft') }>
              <img
                alt="Lyft's logo"
                src={ lyft }
              />
            </div>
          </div>
          <div className={ cx('tier-2', 'tiers') }>
            <div>
              <img
                alt="Netlify's logo"
                src={ netlify }
              />
            </div>
            <div className={ cx('nudge') }>
              <img
                alt="EventBrite's logo"
                src={ eventbrite }
              />
            </div>
            <div className={ cx('nudge') }>
              <a
                alt="Coursera's logo"
                href='https://www.coursera.org/'
                onClick={ clickOnCoursera }
                target='_blank'
                >
                <img
                  alt="Coursera's logo"
                  src={ coursera }
                />
              </a>
            </div>
            <div>
              <img
                alt="Severless' logo"
                src={ serverless }
              />
            </div>
            <div>
              <img
                alt="Nerdwallet's logo"
                src={ nerdwallet }
              />
            </div>
            <div>
              <img
                alt="Reddit's logo"
                src={ reddit }
              />
            </div>
            <div>
              <a
                alt="The Make School logo"
                href='https://www.makeschool.com/'
                target='_blank'
                >
                <img
                  alt="The Make School logo"
                  src={ makeSchool }
                />
              </a>
            </div>
            <div>
              <a
                alt="The Roost logo"
                href='https://www.therooststand.com/'
                target='_blank'
                >
                <img
                  alt="The Roost logo"
                  src={ roost }
                />
              </a>
            </div>
          </div>
          <div className={ cx('tier-4', 'tiers') }>
            <div>
              <a
                alt="NPR's logo"
                href='https://npr.codes'
                onClick={ clickOnNPR }
                target='_blank'
                >
                <img
                  alt="NPR's logo"
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
                  src={ accelebrate }
                />
              </a>
            </div>
            <div className={ cx('nyentek') }>
              <a
                href='http://nyentek.com'
                onClick={ clickOnNyentek }
                target='_blank'
                >
                <img
                  alt="Nyentek's logo"
                  src={ nyentek }
                />
              </a>
            </div>
            <div className={ cx('techqueria') }>
              <a
                href='https://techqueria.org/'
                onClick={ clickOnTechqueria }
                target='_blank'
                >
                <img
                  alt="Techqueria's logo"
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
