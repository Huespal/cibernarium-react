// @flow

import type {Video} from '../components/types';

export default class YoutubeUtil {

    static extractVideos(data: any) : Array<Video> {

      return data.items
        .filter( v => v.id.kind === 'youtube#video')
        .map( v => {
          return {
            id: v.id.videoId,
            title: v.snippet.title,
            image: v.snippet.thumbnails.medium.url
          }
        });
    }
}
