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

/* <iframe width="560" height="315" title={props.title}
  src={"https://www.youtube.com/embed/" + props.videoId} frameBorder="0" allowFullScreen></iframe> */
