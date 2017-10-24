import React, {Component} from 'react';
import VideoList from './components/VideoList';
import MenuBar from './components/MenuBar';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    // Can be whatever is needed.
    this.state = {
      videos     : []
    };
  }

  search(query) {
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
        <MenuBar onSearch={value => { this.search(value) }}/>
        <VideoList videos={this.state.videos}/>
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
