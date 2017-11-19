// @flow

import React from 'react';
import { shallow } from 'enzyme';
import VideoItem from './VideoItem';
import type { Video } from '../components/types.js';

describe('VideoItem', () => {

  const videos = [];

  const video : Video = {
    id     : 'ilFMHFxb-us',
    image  : 'https://i.ytimg.com/vi/ilFMHFxb-us/default.jpg',
    title  : 'Pitch Black - Data Diviner'
  }

  // Exemple de test amb snapshot. Guarda tot l'estat actual del component.
  // Útil per anar ràpid i estalviar-se comprobar camp a camp.
  it('renders correctly', () => {
     const component  = shallow(<VideoItem video={video}/>);
     expect(component).toMatchSnapshot();
  })

  it('renders image correctly', () => {
     const component  = shallow(<VideoItem video={video}/>);
     const videoItems  = component.find(VideoItem);
     expect(videoItems).toEqual(videos.length);
  })

});
