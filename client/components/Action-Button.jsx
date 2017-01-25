import React, { PropTypes, PureComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './action-button.styl';

const cx = classnames.bind(styles);
const propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string
};

export default class ActionButton extends PureComponent {
  render() {
    const { href, target } = this.props;
    const Wrap = href ? 'a' : 'button';
    const props = {
      className: cx('action-button')
    };
    if (href) {
      props.href = href;
      props.target = target;
    }
    return (
      <Wrap { ...props }>
        { this.props.children }
      </Wrap>
    );
  }
}
ActionButton.displayName = 'ActionButton';
ActionButton.propTypes = propTypes;
