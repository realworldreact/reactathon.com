import React, { PropTypes, PureComponent } from 'react';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';

import styles from './footer.styl';
import rwrLogo from './rwr.png';
import facebook from './facebook.png';
import email from './email.png';
import meetup from './meetup.png';
import twitter from './twitter.png';
import banner from '../../images/banner.png';
import { trackEvent } from '../../redux/index.js';

const cx = classnames.bind(styles);
const propTypes = {
  clickOnCoC: PropTypes.func.isRequired,
  clickOnEmailVolunteer: PropTypes.func.isRequired,
  clickOnEmailSponsor: PropTypes.func.isRequired,
  clickOnFacebook: PropTypes.func.isRequired,
  clickOnEmail: PropTypes.func.isRequired,
  clickOnTwitter: PropTypes.func.isRequired,
  clickOnMeetup: PropTypes.func.isRequired,
  clickOnRwr: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  const dispatchers = {
    clickOnCoC: () => dispatch(trackEvent({
      category: 'Footer',
      action: 'click',
      label: 'user clicks on code of conduct'
    })),
    clickOnEmailVolunteer: () => dispatch(trackEvent({
      category: 'Footer',
      action: 'click',
      label: 'user clicks on volunteer email link'
    })),
    clickOnEmailSponsor: () => dispatch(trackEvent({
      category: 'Footer',
      action: 'click',
      label: 'user clicks on sponsor email link'
    })),
    clickOnFacebook: () => dispatch(trackEvent({
      category: 'Footer',
      action: 'click',
      label: 'user clicks on facebook link'
    })),
    clickOnEmail: () => dispatch(trackEvent({
      category: 'Footer',
      action: 'click',
      label: 'user clicks on general email link'
    })),
    clickOnTwitter: () => dispatch(trackEvent({
      category: 'Footer',
      action: 'click',
      label: 'user clicks on twitter link'
    })),
    clickOnMeetup: () => dispatch(trackEvent({
      category: 'Footer',
      action: 'click',
      label: 'user clicks on Meetup link'
    })),
    clickOnRwr: () => dispatch(trackEvent({
      category: 'Footer',
      action: 'click',
      label: 'user clicks on RWR logo'
    }))
  };
  return () => dispatchers;
}

export class Footer extends PureComponent {
  render() {
    const {
      clickOnCoC,
      clickOnEmailVolunteer,
      clickOnEmailSponsor,
      clickOnFacebook,
      clickOnEmail,
      clickOnTwitter,
      clickOnMeetup,
      clickOnRwr
    } = this.props;
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
            <a
              href='http://jsconf.com/codeofconduct.html'
              onClick={ clickOnCoC }
              target='_blank'
              >
              Code of Conduct
            </a>
          </div>
          <div>
            <a
              href='mailto:info@reactathon.com?subject=Volunteer Inquiry'
              onClick={ clickOnEmailVolunteer }
              target='_blank'
              >
              Volunteers
            </a>
          </div>
          <div>
            <a
              href='mailto:sponsors@reactathon.com?subject=Sponsorship Inquiry'
              onClick={ clickOnEmailSponsor }
              target='_blank'
              >
              Sponsors
            </a>
          </div>
        </div>
        <div className={ cx('social') }>
          <div>
            <a
              href='https://www.facebook.com/RealWorldReact/'
              onClick={ clickOnFacebook }
              target='_blank'
              >
              <img
                alt="Facebook's icon"
                src={ facebook }
              />
            </a>
          </div>
          <div>
            <a
              href='mailto:info@reactathon.com?subject=Hello'
              onClick={ clickOnEmail }
              target='_blank'
              >
              <img
                alt='An email icon'
                src={ email }
              />
            </a>
          </div>
          <div>
            <a
              href='https://twitter.com/reactathon'
              onClick={ clickOnTwitter }
              target='_blank'
              >
              <img
                alt="Twitter's icon"
                src={ twitter }
              />
            </a>
          </div>
          <div>
            <a
              href='https://www.meetup.com/Real-World-React/'
              onClick={ clickOnMeetup }
              target='_blank'
              >
              <img
                alt="Meetup's icon"
                src={ meetup }
              />
            </a>
          </div>
        </div>
        <div className={ cx('rwr') }>
          <div>
            <a
              href='#'
              onClick={ clickOnRwr }
              >
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

export default connect(
  null,
  mapDispatchToProps
)(Footer);
