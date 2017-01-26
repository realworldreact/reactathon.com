import React, { PropTypes, PureComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './title-card.styl';

const cx = classnames.bind(styles);
const propTypes = {
  children: PropTypes.string,
  id: PropTypes.string,
  img: PropTypes.string
};

export default class TitleCard extends PureComponent {
  render() {
    const {
      children,
      id,
      img
    } = this.props;
    return (
      <div
        className={ cx('title-card') }
        style={{ backgroundImage: `url(${img})` }}
        >
        <h1 id={ id }>{ children }</h1>
      </div>
    );
  }
}
TitleCard.displayName = 'TitleCard';
TitleCard.propTypes = propTypes;
