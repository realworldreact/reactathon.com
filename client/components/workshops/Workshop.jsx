import React, { PropTypes, PureComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './workshops.styl';

const cx = classnames.bind(styles);
const propTypes = {
  bio: PropTypes.string,
  brief: PropTypes.string,
  company: PropTypes.string,
  date: PropTypes.string,
  difficulty: PropTypes.string,
  instructor: PropTypes.string,
  name: PropTypes.string,
  onMouseLeave: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  showExtra: PropTypes.bool,
  title: PropTypes.string
};

export default class Workshop extends PureComponent {
  render() {
    const {
      bio,
      brief,
      company,
      date,
      difficulty,
      instructor,
      name,
      onMouseLeave,
      onMouseOver,
      showExtra,
      title
    } = this.props;
    return (
      <div
        className={ cx('workshop-container') }
        onMouseLeave={ onMouseLeave }
        onMouseOver={ onMouseOver }
        >
        <header className={ cx('title-container') }>
          <h4 className={ cx('title') }>
            { difficulty }
          </h4>
        </header>
        <div className={ cx('content-window') }>
          <div className={
            cx('content-container', { 'show-extra': showExtra })
            }>
            <section className={ cx('workshop-info') }>
              <h2 className={ cx('name') }>
                { name }
              </h2>
              <h3 className={ cx('instructor') }>
                { instructor }
              </h3>
              <h4 className={ cx('inst-title') }>
                { title }, { company }
              </h4>
            </section>
            <footer className={ cx('footer-container') }>
              <div className={ cx('date') }>
                { date }
              </div>
              <div className={ cx('extra-info') }>
                <div className={ cx('brief') }>
                  { brief }
                  <a>See Full description</a>
                </div>
                <div className={ cx('bio') }>
                  { bio }
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
Workshop.displayName = 'Workshop';
Workshop.propTypes = propTypes;
