// @flow

import React from 'react';
import VideoItem from './VideoItem';
import type {Video} from './types';
import './VideoList.css';

type Props = {
  videos: Array<Video>
}

const VideoList = (props: Props) => {

  const videoItems  = props.videos.map( v =>
    <VideoItem key={v.id} video={v} />
  );

  return (
    <div className="video-list">{videoItems}</div>
  )
}

export default VideoList;
