import React from 'react';

const VideoList = props => {
  const videos = props.videos.map(video => {
    return <div key={video.id.videoId} className="item">
        <div className="image">
          <img src={video.snippet.thumbnails.medium.url}></img>
        </div>
        <div className="content">
          <a className="header">{video.snippet.title}</a>
          <div className="meta">
            <span>Description</span>
          </div>
          <div class="description">
            <p>Content!</p>
          </div>
          <div class="extra">
            Additional Details
          </div>
        </div>
      </div>
  });

  return <div className="ui items">{videos}</div>
}

export default VideoList;