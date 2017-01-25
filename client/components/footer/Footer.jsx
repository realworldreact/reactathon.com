import React, { PureComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './footer.styl';
import rwrLogo from './rwr.png';
import facebook from './facebook.png';
import email from './email.png';
import meetup from './meetup.png';
import twitter from './twitter.png';
import banner from '../../images/banner.png';

const cx = classnames.bind(styles);
const propTypes = {};

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className={ cx('footer') }>
        <div className={ cx('banner') }>
          <div>
            <img
              alt="Reactathon's banner logo - 2017 San Francisco"
              src={ banner }
            />
          </div>
        </div>
        <div className={ cx('links') }>
          <div>
            <a href='#'>
              Code of Conduct
            </a>
          </div>
          <div>
            <a href='mailto:info@reactathon.com?subject=Volunteer Inquiry'>
              Volunteers
            </a>
          </div>
          <div>
            <a
              href='mailto:sponsors@reactathon.com?subject=Sponsorship Inquiry'
              >
              Sponsors
            </a>
          </div>
        </div>
        <div className={ cx('social') }>
          <div>
            <a href='https://www.facebook.com/RealWorldReact/' target="_blank">
              <img
                alt="Facebook's icon"
                src={ facebook }
              />
            </a>
          </div>
          <div>
            <a href='mailto:info@reactathon.com?subject=Hello'>
              <img
                alt='An email icon'
                src={ email }
              />
            </a>
          </div>
          <div>
            <a href='https://twitter.com/reactathon' target="_blank">
              <img
                alt="Twitter's icon"
                src={ twitter }
              />
            </a>
          </div>
          <div>
            <a href='https://www.meetup.com/Real-World-React/' target="_blank">
              <img
                alt="Meetup's icon"
                src={ meetup }
              />
            </a>
          </div>
        </div>
        <div className={ cx('rwr') }>
          <div>
            <a href='#'>
              <img
                alt="Real World React's logo"
                src={ rwrLogo }
              />
            </a>
          </div>
          <div>© 2017 Real World React</div>
        </div>
      </footer>
    );
  }
}
Footer.displayName = 'Footer';
Footer.propTypes = propTypes;
