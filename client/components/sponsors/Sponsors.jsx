import React, { PureComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './sponsors.styl';

import TitleCard from '../Title-Card.jsx';

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
import nerdwallet from '../../images/sponsors/nerdwallet.png';
import techqueria from '../../images/sponsors/techqueria.png';



const cx = classnames.bind(styles);
const propTypes = {};

export default class Sponsors extends PureComponent {
  render() {
    return (
      <div className={ cx('sponsors') }>
        <TitleCard
          id='sponsors'
          >
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
            <div>
              <img
                alt="Nerdwallet's logo"
                src={ nerdwallet }
              />
            </div>
          </div>
          <div className={ cx('tier-4') }>
            <div>
              <a
                alt="NPR's logo"
                href='https://npr.codes'
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
          <div className={ cx('supporters') }>
            <div>
              <a
                alt="Accelebrate's logo"
                href='https://www.accelebrate.com/training/react'
                target='_blank'
                >
                <img src={ accelebrate } />
              </a>
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
            <div className={ cx('techqueria') }>
              <a
                alt="Techqueria's logo"
                href='https://techqueria.org/'
                target='_blank'
                >
                <img src={ techqueria } />
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
