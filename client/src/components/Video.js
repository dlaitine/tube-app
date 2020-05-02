import React from 'react';
import dateFormatter from '../formatters/dateFormatter';

const Video = props => {
  if(!props.video) {
    return null;
  }

  const videoUrl = 'https://www.youtube.com/embed/' + props.video.id;
  let formattedDate = dateFormatter(props.video.snippet.publishedAt);

  return (
  <div className="ui card video-container">
    <div className="iframe-container">
      <iframe
        title="video"
        src={videoUrl}
        allowFullScreen>
    </iframe>
    </div>
    <div className="content">
      <div className="header">{props.video.snippet.title}</div>
      <div className="meta">
      <span>{props.video.snippet.channelTitle}</span>
      |
      <span className="date"> {formattedDate}</span>
      </div>
    </div>
  </div>
  )
}

export default Video;