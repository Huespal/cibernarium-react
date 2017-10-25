import YoutubeUtil from './YoutubeUtil';
import data from '../youtube-api-sample.json';

describe ('YoutubeUtil', () => {
  it('extracts videos correctly', () => {

    const videos = YoutubeUtil.extractVideos(data);
    // expect(videos.length).toEqual(9);
    expect(videos[0]).toEqual({
      title: 'Black Data'
    });
  });
});
