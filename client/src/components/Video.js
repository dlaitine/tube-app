import React from 'react';

const Video = props => {
  if(!props.video) {
    return null;
  }

  const videoUrl = 'https://www.youtube.com/embed/' + props.video.id.videoId;

  return <div className="iframe-container">
      <iframe
        src={videoUrl}
        allowFullScreen>
    </iframe>
  </div>
}

export default Video;