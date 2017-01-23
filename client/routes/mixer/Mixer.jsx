import React, { PureComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './index.styl';

const cx = classnames.bind(styles);
const propTypes = {};

export default class About extends PureComponent {
  render() {
    return (
      <div className={ cx('mixer') }>
        <header>
          <h1>
            About Us
          </h1>
        </header>
        <article>
          We are the immortan!
        </article>
      </div>
    );
  }
}

About.displayName = 'About';
About.propTypes = propTypes;
