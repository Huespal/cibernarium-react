// @flow

import React from 'react';
import type { ContextRouter } from 'react-router-dom';

const VideoPlayer = (props: ContextRouter) => {

  // Get from router in App.js (like $stateParms of Angular 1)
  const videoId = props.match.params.id;

  return (
    <div>
      {/* <h1>{props.video.title}</h1> */}
      <iframe
          width="560" height="315"
          title={videoId} /*{props.video.title}*/
          src={"https://www.youtube.com/embed/" + videoId}
          frameBorder="0" allowFullScreen>
        </iframe>
    </div>
  )
}

export default VideoPlayer;
