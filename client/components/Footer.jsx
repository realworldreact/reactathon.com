import React, { PureComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './footer.styl';

const cx = classnames.bind(styles);
const propTypes = {};

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className={ cx('footer', 'row center-xs middle-xs') }>
        <div className='col-xs'>
            info
        </div>
        <div className='col-xs'>
            Contacts
        </div>
      </footer>
    );
  }
}
Footer.displayName = 'Footer';
Footer.propTypes = propTypes;
