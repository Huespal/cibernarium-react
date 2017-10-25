// @flow

import React from 'react';
import type {Video} from './types';
import './VideoItem.css';

type Props = {
  video: Video
};

const VideoItem = (props: Props) => {

  return (
    <div>
      <h1>{props.video.title}</h1>
      <img src={props.video.image} alt={props.video.title}/>
    </div>
  )
}

export default VideoItem;
