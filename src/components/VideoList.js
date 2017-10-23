import React from 'react';
import VideoItem from './VideoItem';

const VideoList = props => {

  const videoItems  = props.videos.map( v => <VideoItem key={v.id.videoId} videoId={v.id.videoId} title={v.title}/>);

  return (
    <div>{videoItems}</div>
  )
}

export default VideoList;
