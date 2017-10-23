import React, {Component} from 'react';
import VideoList from './components/VideoList';
import SearchForm from './components/SearchForm';
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
      .then( r => this.setState({videos : r.data.items.filter( v => v.id.kind === 'youtube#video')}))
      .catch(error => console.log(`Error! ${error}`));
  }

  render() {
    return (
      <div>
        <SearchForm onSearch={value => { this.search(value) }}/>
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
// Les funcions cridades de pare a fill (ex: SearchForm -> onSearch) s'han de dir igual al pare i al fill. Es criden amb this.props.NOM_DE_LA_FUNCIÓ
