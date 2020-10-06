import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {

  const renderedList = props.videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} onVideoSelect={props.onVideoSelect} onTermSubmit={props.onTermSubmit}/>;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>
};

export default VideoList;
