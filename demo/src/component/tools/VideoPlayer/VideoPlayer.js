import React from "react";
import ReactPlayer from "react-player";
import './VideoPlayer.css'

function VideoPlayer({ url }) {
  return (
    <div className="video-player">
      <ReactPlayer className='videoSite' url={url} controls={true} />
    </div>
  );
}

export default VideoPlayer;
