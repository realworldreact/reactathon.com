/* eslint-disable jsx-a11y/onclick-has-focus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { PropTypes, PureComponent } from 'react';
import Modal from 'react-modal';
import classnames from 'classnames/bind';

import styles from './workshops.styl';

const descriptionLength = 300;
const cx = classnames.bind(styles);
const propTypes = {
  bio: PropTypes.string,
  brief: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
  company: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  difficulty: PropTypes.string,
  header: PropTypes.string,
  instructor: PropTypes.string,
  length: PropTypes.number,
  name: PropTypes.string,
  openModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool,
  title: PropTypes.string
};

// sentance is sliced to number of characters
// trimmed to the nearest whole sentance
function getBrief(src) {
  const briefSentances = (src.slice(0, descriptionLength) + '   ').split('.');
  // drap last sentance
  briefSentances.pop();
  return briefSentances.join('.') + '.';
}
export default class Workshop extends PureComponent {
  render() {
    const {
      bio,
      brief,
      closeModal,
      company,
      date,
      description,
      difficulty,
      header,
      instructor,
      length,
      name,
      openModal,
      showModal,
      title
    } = this.props;
    return (
      <div className={ cx('workshop-container') }>
        <img
          alt={ `${name}'s workshop header` }
          data-note='preload modal header image'
          src={ header }
          style={{ display: 'none' }}
        />
        <header className={ cx('title-container') }>
          <h4 className={ cx('title') }>
            { difficulty }
          </h4>
        </header>
        <div className={ cx('content-window') }>
          <div
            className={ cx('content-container') }
            tabIndex='0'
            >
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
                  <br />
                  <a
                    onClick={ openModal }
                    onKeyDown={ openModal }
                    role='button'
                    >
                    See full description
                  </a>
                </div>
                <div className={ cx('bio') }>
                  { getBrief(bio) }
                  <br />
                  <a
                    onClick={ openModal }
                    onKeyDown={ openModal }
                    role='button'
                    >
                    See full bio
                  </a>
                </div>
              </div>
            </footer>
          </div>
          <Modal
            className={ cx('modal') }
            contentLabel={ `${name}'s instructor bio and description` }
            isOpen={ showModal }
            onRequestClose={ closeModal }
            overlayClassName={ cx('overlay') }
            >
            <div className={ cx('header') }>
              <img
                alt={ `${name}'s workshop header` }
                data-note='preload modal header image'
                src={ header }
              />
            </div>
            <div className={ cx('brief') }>
              { description }
            </div>
            <div className={ cx('bio') }>
              { bio }
            </div>
            <div className={ cx('length') }>
              Length: { length } hours
            </div>

            <button onClick={ closeModal }>
              Close
            </button>
          </Modal>
        </div>
      </div>
    );
  }
}
Workshop.displayName = 'Workshop';
Workshop.propTypes = propTypes;
