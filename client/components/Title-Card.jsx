import React, { PropTypes, PureComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './title-card.styl';

const cx = classnames.bind(styles);
const propTypes = {
  children: PropTypes.string,
  id: PropTypes.string
};

export default class TitleCard extends PureComponent {
  render() {
    const {
      children,
      id
    } = this.props;
    return (
      <div className={ cx('title-card') }>
        <h1 id={ id }>{ children }</h1>
      </div>
    );
  }
}
TitleCard.displayName = 'TitleCard';
TitleCard.propTypes = propTypes;
