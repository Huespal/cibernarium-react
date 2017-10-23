import React from 'react';
import VideoList from './components/VideoList';
// import youtubeApiSample from './youtube-api-sample'; // From JSON
import axios from 'axios';

const App = () => {

  //  const videos = [
  //    {id: "Sbf6W2obfZM", title: "Maquillatge"},
  //    {id: "-YbY0zfDrRk", title: "Maquillatge 2"},
  //    {id: "kg5a4P65KOE", title: "Maquillatge 3"}
  //  ];

  const query = 'blackdata',
        url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + query + "&key=AIzaSyADjLFi95P8j8yeV9kqbHToPamJDalG7zY";

  // const videos = youtubeApiSample.items.filter( v => v.id.kind === 'youtube#video');
  //
  // return (
  //   <div>
  //   <VideoList videos={videos}/>
  //  </div>
  // )

  return <div>Not done yet</div>
}


export default App;

// return React.createElement('div', null, 'Hello'); // Crea un div amb la string 'Hello' dins.

// AIzaSyADjLFi95P8j8yeV9kqbHToPamJDalG7zY
// https://www.googleapis.com/youtube/v3/search?part=snippet&q=blackdata&key={YOUR_API_KEY} // Youtube API Query (Searches for: blackdata)
