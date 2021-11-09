import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../src/config';
import { catchError, tap, map } from 'rxjs/operators';
// import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  // getting the api key from the config varibale in the confg.js file
  private youTubeApiKey = config.youTube_API_KEY;
  private youTubeUrl: string =
    'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=';
  constructor(private http: HttpClient) { }

  getTrailer(videoid) {
    return this.http.get(
      this.youTubeUrl + videoid + '&key=' + this.youTubeApiKey
    );
  }
  // getTrailer(videoid) {
  //   return this.http
  //     .get(this.youTubeUrl + videoid + '&key=' + this.youTubeApiKey)
  //     .map((res) => {
  //       return res['items'];
  //     });
  // }
}
