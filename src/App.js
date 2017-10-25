//@flow

import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import type { ContextRouter } from 'react-router-dom';
import VideoList from './components/VideoList';
import MenuBar from './components/MenuBar';
import VideoPlayer from './components/VideoPlayer';
import type {Video} from './components/types';
import axios from 'axios';

type Props = {};

type State = {
  videos: Array<Video>
};

class App extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    // Can be whatever is needed.
    this.state = {
      videos     : []
    };
  }

  search(query: string) {
    const apiKey  = 'AIzaSyADjLFi95P8j8yeV9kqbHToPamJDalG7zY',
          url     = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" + query + "&key=" + apiKey;

    // Makes a request.
    axios.get(url)
      .then( r => {
        this.setState({
          videos : r.data.items.filter( v => v.id.kind === 'youtube#video')
                                .map( v => {
                                  return {
                                    id: v.id.videoId,
                                    title: v.snippet.title,
                                    image: v.snippet.thumbnails.medium.url
                                  }
                                })
        })
      })
      .catch(error => console.log(`Error! ${error}`));
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            {/* Trick per mantenir la ruta URL*/}
            <Route render={ (context: ContextRouter) => <MenuBar onSearch={value => {
                this.search(value)
                context.history.push('/')
            }}/>} />
            <Switch>
              <Route exact path='/'
                render={ () => <VideoList videos={this.state.videos} />} />
              <Route path='/detail/:id' component={VideoPlayer} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}


export default App;

// return React.createElement('div', null, 'Hello'); // Crea un div amb la string 'Hello' dins.
// const videos = youtubeApiSample.items.filter( v => v.id.kind === 'youtube#video'); // With JSON.
// AIzaSyADjLFi95P8j8yeV9kqbHToPamJDalG7zY
// https://www.googleapis.com/youtube/v3/search?part=snippet&q=blackdata&key={YOUR_API_KEY} // Youtube API Query (Searches for: blackdata)
// AXIOS (https://github.com/axios/axios) -> To perform queries. (Like $http service in Angular)
// 2 tipus de components en react -> Funció i Class. El Class pot rebre dades per herència amb el constructor (super)
// A React comopnent works with props an state.
// En react 'event' es un objecte disenyat per ells. Conté tots els events de Javascript en un.
// Les funcions cridades de pare a fill (ex: SearchForm -> onSearch) s'han de dir igual al pare i al fill. Es criden amb this.props.NOM_DE_LA_FUNCIÓ

// Per afegir tipus a Javascript.
// 1.
// import PropTypes from 'prop-types';
// VideoItem.PropTypes = {
//   image: PropTypes.string,
//   title: PropTypes.number
// }
// 2. Flow (https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-flow)

// React router dom:
// Es pot passar el component directament: component=COMPONENT_NAME. -> No rep parametres.
// Es pot fer un render d'un component: render={() => <COMPONENT_NAME param1={params} ...} -> Pots passar paràmetres
// ContextRouter es el tipus que passa el router (enlloc de tipus Props) -> Per si es fa servir Flow.
