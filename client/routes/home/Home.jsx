import React, { Component } from 'react';
import classnames from 'classnames/bind';

import styles from './home.styl';

const cx = classnames.bind(styles);

const propTypes = {};
export default class Home extends Component {
  render() {
    return (
      <section className={ cx('home') }>
        <header>
          <h1>Immortan</h1>
          <h2>You will ride eternal, shiny, and chrome</h2>
        </header>
        <article>
          <p>
            Bicycle rights kitsch activated charcoal venmo
            banh mi, stumptown cronut 3 wolf moon hexagon
            wayfarers poke tousled. Fashion axe selvage pour-over
            ramps heirloom, occupy cardigan pug art party.
            Poke mustache blog, seitan activated charcoal
            ugh sriracha hella mlkshk put a bird on it before
            they sold out 90's austin distillery.
            Plaid pickled pitchfork mustache lomo chambray
            fingerstache XOXO hot chicken glossier snackwave,
            drinking vinegar green juice. Cray af hoodie street art.
            Readymade 90's mixtape, lomo four dollar toast kitsch leggings. Hot
            chicken ethical pabst, fam forage lyft kale chips 3 wolf moon lo-fi
            slow-carb.
          </p>
        </article>
      </section>
    );
  }
}
Home.displayName = 'Home';
Home.propTypes = propTypes;
