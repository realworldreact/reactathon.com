import React, { PureComponent } from 'react';

const propTypes = {};
export default class About extends PureComponent {
  render() {
    return (
      <div className='about'>
        About
      </div>
    );
  }
}

About.displayName = 'About';
About.propTypes = propTypes;
