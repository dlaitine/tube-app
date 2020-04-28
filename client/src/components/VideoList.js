import React from 'react';

const VideoList = props => {
  if(props.videos.length === 0) {
    return null;
  }

  const videos = props.videos.map(video => {
    return <div key={video.id.videoId} className="ui item video-item" onClick={() => props.onClick(video)}>
        <div className="image">
          <img src={video.snippet.thumbnails.medium.url}></img>
        </div>
        <div className="content">
          <a className="header">{video.snippet.title}</a>
          <div className="meta">
            <span>{video.snippet.channelTitle}</span>
          </div>
          <div className="description">
            <p>{video.snippet.description}</p>
          </div>
        </div>
      </div>
  });

  return <div className="ui divided unstackable link items video-list">{videos}</div>
}

export default VideoList;