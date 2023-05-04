import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';
import Video from "../../img/Intro-pulse2k23.mp4"

class VideoPlayer extends Component {
  render() {
    return (
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={Video}
          width="100%"
          height="100%"
          controls={true}
          playing={true}
          muted={true}
        />
      </div>
    );
  }
}

export default VideoPlayer;
