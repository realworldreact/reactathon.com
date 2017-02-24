import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';

import style from './video-background.styl';
import poster from './poster.png';
import videoWebm from './bg-video.webm';
import videoMP4 from './bg-video.mp4';

import {
  shouldLoadSelector,
  canWeLoadVideo
} from './redux';

const cx = classnames.bind(style);
const videoId = 'Video';
const propTypes = {
  canWeLoadVideo: PropTypes.func.isRequired,
  poster: PropTypes.string,
  shouldLoad: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    shouldLoad: shouldLoadSelector(state)
  };
}

const mapDispatchToProps = {
  canWeLoadVideo
};

class BackgroundVideo extends Component {
  componentDidMount() {
    this.props.canWeLoadVideo();
  }
  componentWillUnmount() {
    const doc = typeof window !== 'undefined' ?
      window.document :
      { getElementById: () => {} };
    const video = doc.getElementById(videoId);

    if (video) {
      video.pause();
      video.src = '';
      video.load();
    }
  }

  render() {
    const {
      shouldLoad
    } = this.props;
    return (
      <div>
        <video
          autoPlay={ shouldLoad }
          className={ cx('background-video') }
          id={ videoId }
          muted={ true }
          poster={ poster }
          preload={ shouldLoad ? 'auto' : 'none' }
          >
          <source
            src={ videoWebm }
            type='video/webm'
          />
          <source
            src={ videoMP4 }
            type='video/mp4'
          />
        </video>
        <div className={ cx('background-video-overlay') } />
      </div>
    );
  }
}

BackgroundVideo.propTypes = propTypes;
BackgroundVideo.displayName = 'BackgroundVideo';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackgroundVideo);
