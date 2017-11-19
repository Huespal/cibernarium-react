// @flow

import React, {Component} from 'react';
import axios from 'axios';
import type { ContextRouter } from 'react-router-dom';

type State = {
  title   : string,
  videoId : string
}

export default class VideoPlayer extends Component<ContextRouter, State> {

constructor(props: ContextRouter) {
  super(props);

  // Get from router in App.js (like $stateParms of Angular 1)
  const videoId = props.match.params.id,
        url     = "https://www.googleapis.com/youtube/v3/videos/?part=snippet&id=" + videoId + "&key=AIzaSyADjLFi95P8j8yeV9kqbHToPamJDalG7zY";

  this.state = {
    title   : '',
    videoId : ''
  }

  // Makes a request.
  axios.get(url)
    .then( r => {
      const items = r.data.items;
      if (items.length) this.setState({title: items[0].snippet.title});
    })
    .catch(error => console.log(`Error! ${error}`));
}

  render() {
    return (
      <div>
        {/* <h1>{props.video.title}</h1> */}
        <iframe
            width="560" height="315"
            title={this.state.title}
            src={"https://www.youtube.com/embed/" + this.state.videoId}
            frameBorder="0" allowFullScreen>
          </iframe>
      </div>
    )
  }

}
