import React from 'react';

const Video = props => {
  if(!props.video) {
    return null;
  }

  const videoUrl = 'https://www.youtube.com/embed/' + props.video.id;

  return <div className="iframe-container">
      <iframe
        title="video"
        src={videoUrl}
        allowFullScreen>
    </iframe>
  </div>
}

export default Video;