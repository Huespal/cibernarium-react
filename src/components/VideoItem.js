import React from 'react';

const VideoItem = props => {

  return (
    <div>
      <h1>{props.title}</h1>
      <iframe width="560" height="315" title={props.title}
        src={"https://www.youtube.com/embed/" + props.videoId} frameBorder="0" allowFullScreen></iframe>
    </div>
  )
}

export default VideoItem;
