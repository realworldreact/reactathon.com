import React, { PureComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './sponsors.styl';

import TitleCard from '../Title-Card.jsx';

import sponsorsBg from '../../images/backgrounds/bg-sponsors-register.png';
import pinterest from '../../images/sponsors/pinterest.png';
import reddit from '../../images/sponsors/reddit.png';
import microsoft from '../../images/sponsors/microsoft.png';
import netlify from '../../images/sponsors/netlify.png';
import serverless from '../../images/sponsors/serverless.png';
import openTable from '../../images/sponsors/opentable.png';
import coursera from '../../images/sponsors/coursera.png';
import accelebrate from '../../images/sponsors/accelebrate.png';
import nyentek from '../../images/sponsors/nyentek.png';
import npr from '../../images/sponsors/npr-2.jpg';
import eventbrite from '../../images/sponsors/eventbrite.png';

const cx = classnames.bind(styles);
const propTypes = {};

export default class Sponsors extends PureComponent {
  render() {
    return (
      <div className={ cx('sponsors') }>
        <TitleCard img={ sponsorsBg }>
          Sponsors
        </TitleCard>
        <div className={ cx('container') }>
          <div className={ cx('tier-1') }>
            <div>
              <img
                alt="Pinterest's logo"
                src={ pinterest }
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
              <img
                alt="Microsoft's logo"
                src={ microsoft }
              />
            </div>
          </div>
          <div className={ cx('tier-2') }>
            <div>
              <img
                alt="Netlify's logo"
                src={ netlify }
              />
            </div>
            <div>
              <img
                alt="Severless' logo"
                src={ serverless }
              />
            </div>
            <div>
              <img
                alt="EventBrite's logo"
                src={ eventbrite }
              />
            </div>
          </div>
          <div className={ cx('tier-3') }>
            <div>
              <img
                alt="OpenTable's logo"
                src={ openTable }
              />
            </div>
            <div>
              <img
                alt="Coursera's logo"
                src={ coursera }
              />
            </div>
          </div>
          <div className={ cx('tier-4') }>
            <div>
              <img
                alt="NPR's logo"
                src={ npr }
              />
            </div>
          </div>
          <div className={ cx('sponsor-title') }>
            <h2>
              Supporters
            </h2>
          </div>
          <div className={ cx('supporters') }>
            <div>
              <img
                alt="Accelebrate's logo"
                src={ accelebrate }
              />
            </div>
            <div className={ cx('nyentek') }>
              <a
                alt="Nyentek's logo"
                href='http://nyentek.com'
                target='_blank'
                >
                <img src={ nyentek } />
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
