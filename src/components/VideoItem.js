import React from 'react';
import './VideoItem.css';

const VideoItem = (props) => {

  //Arrow function is necessary

  const onSelectClick = () => {
    props.onVideoSelect(props.video);

    props.onTermSubmit(props.video.snippet.title);
  };

  return (
    <div className=" video-item item" onClick={onSelectClick}>
      <img alt={props.video.snippet.title} className="ui image" src={props.video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
