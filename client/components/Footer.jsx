import React, { PureComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './footer.styl';

const cx = classnames.bind(styles);
const propTypes = {};

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className={ cx('footer') }>
        <div>
            info
        </div>
        <div>
            Contacts
        </div>
      </footer>
    );
  }
}
Footer.displayName = 'Footer';
Footer.propTypes = propTypes;
