import React, { PureComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './sponsors.styl';

import sponsorsBg from './bg-sponsors-foo.png';

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
              <img src={ pinterest } />
            </div>
            <div>
              <img
                className={ cx('reddit') }
                src={ reddit }
              />
            </div>
            <div>
              <img src={ microsoft } />
            </div>
          </div>
          <div className={ cx('tier-2') }>
            <div>
              <img src={ netlify } />
            </div>
            <div>
              <img src={ serverless } />
            </div>
          </div>
          <div className={ cx('tier-3') }>
            <div>
              <img src={ openTable } />
            </div>
            <div>
              <img src={ coursera } />
            </div>
          </div>
          <div>
            <h2>
              Supporters
            </h2>
          </div>
          <div className={ cx('supporters') }>
            <div>
              <img src={ accelebrate } />
            </div>
            <div className={ cx('nyentek') }>
              <img src={ nyentek } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Sponsors.displayName = 'Sponsors';
Sponsors.propTypes = propTypes;
