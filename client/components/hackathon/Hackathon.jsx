import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';
import ActionButton from '../Action-Button.jsx';
import github from '../../images/sponsors/github-sponsor.png';

import styles from './hackathon.styl';

import TitleCard from '../Title-Card.jsx';
import { trackEvent } from '../../redux/index.js';

const cx = classnames.bind(styles);
const volunteerUrl = 'https://docs.google.com/forms/d/e/' +
  '1FAIpQLSdkgVtFTUggBhnXZwK6RYhXUJhB0ainAxR31XEwkFVO8bBu3Q/viewform';

const propTypes = {
  clickOnRegister: PropTypes.func.isRequired,
  clickOnVolunteer: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  const dispatchers = {
    clickOnRegister: () => dispatch(trackEvent({
      category: 'Hackathon',
      action: 'click',
      label: 'user clicks on Register navigation button'
    })),
    clickOnVolunteer: () => dispatch(trackEvent({
      category: 'Hackathon',
      action: 'click',
      label: 'user clicks on Volunteer form link'
    }))
  };
  // redux-form does not respect mapDispatchFactory
  // will move on to this form on the move to react-redux-form
  // return () => dispatchers;
  return dispatchers;
}

export class Hackathon extends PureComponent {
  render() {
    const {
      clickOnRegister,
      clickOnVolunteer
    } = this.props;
    return (
      <div className={ cx('hackathon') }>
        <TitleCard
          id='Hackathon'
          >
          Hackathon
        </TitleCard>
        <div className={ cx('content') }>
          <div className={ cx('info') }>
            <h1>Saturday, March 11 - Sunday, March 12</h1>
            <h3>9:00AM-8:00PM</h3>
            <h4>
              Come hack with some incredible APIs,
              build a startup,
              or join a team to improve your skills.
            </h4>
            <h5>
              The goal of this hackathon is to foster collaboration
              and learning as much as competition.
            </h5>
          </div>
          <div className={ cx('register') }>
            <h1>Hackathon Registration Now Open</h1>
            <h3>
              Developers, Designers, and Entrepreneurs Welcome
            </h3>
            <div>
              <ActionButton
                href='#Register'
                onClick={ clickOnRegister }
                >
                Register Free
              </ActionButton>
              <p>
                Food & Drink Provided
              </p>
              <p className={ cx('volunteers') }>
                Intersted in volunteering?
                <span>{ ' ' }</span>
                <a
                  href={ volunteerUrl }
                  onClick={ clickOnVolunteer }
                  target='_blank'
                  >
                  Go here
                </a>
              </p>
            </div>
          </div>
          <div className={ cx('hosted-by') }>
            <h3>
              Hosted by
            </h3>
            <div>
              <img src={ github } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Hackathon.displayName = 'Hackathon';
Hackathon.propTypes = propTypes;
export default connect(
  null,
  mapDispatchToProps
)(Hackathon);
