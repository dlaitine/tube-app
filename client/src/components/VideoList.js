import React from 'react';
import timeFormatter from '../formatters/timeFormatter';

const VideoList = props => {
  if(props.videos.length === 0) {
    return null;
  }

  const videos = props.videos.map(video => {
    let description = video.snippet.description;

    if(description.length > 160) {
      description = description.substring(0, 160) + "...";
    }

    const formattedDuration = timeFormatter(video.contentDetails.duration);

    return <div key={video.id.videoId} className="ui item video-item" onClick={() => props.onClick(video)}>
        <div className="image video-image">
          <img src={video.snippet.thumbnails.medium.url} alt="video"></img>
          <div className="ui video-length">{formattedDuration}</div>
        </div>
        <div className="content">
          <div className="header">{video.snippet.title}</div>
          <div className="meta">
            <span>{video.snippet.channelTitle}</span>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
      </div>
  });

  return <div className="ui divided unstackable link items video-list">{videos}</div>
}

export default VideoList;