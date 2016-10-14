import React, { PureComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './about.styl';

const cx = classnames.bind(styles);
const propTypes = {};

export default class About extends PureComponent {
  render() {
    return (
      <div className={ cx('about', 'col-sm-6 col-sm-offset-3') }>
        <header>
          <h3>
            About Us.
          </h3>
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
