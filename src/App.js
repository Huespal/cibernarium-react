import React, {Component} from 'react';
import VideoList from './components/VideoList';
// import youtubeApiSample from './youtube-api-sample'; // From JSON
import axios from 'axios';

class App extends Component {

  //  const videos = [
  //    {id: "Sbf6W2obfZM", title: "Maquillatge"},
  //    {id: "-YbY0zfDrRk", title: "Maquillatge 2"},
  //    {id: "kg5a4P65KOE", title: "Maquillatge 3"}
  //  ];

  constructor(props) {
    super(props);

    // Can be whatever is needed.
    this.state = {
      videos : []
    };

    this.initialize();
  }


  initialize() {
    const query   = 'dbz',
          apiKey  = 'AIzaSyADjLFi95P8j8yeV9kqbHToPamJDalG7zY',
          url     = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" + query + "&key=" + apiKey;

    // Make a request for a user with a given ID.
    axios.get(url)
      .then( r => this.setState({videos : r.data.items.filter( v => v.id.kind === 'youtube#video')}))
      .catch(error => console.log(`Error! ${error}`));
  }

  render() {
    return (
      <div>
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

// AXIOS -> To perform queries. (Like $http service in Angular)
// 2 tipus de components en react -> Funció i Class. El Class pot rebre dades per herència amb el constructor (super)
// A React comopnent works with props an state.
