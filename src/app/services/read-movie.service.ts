import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../src/config';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root',
})
export class ReadMovieService {
  // getting the api key from the config varibale in the confg.js file
  tmdbApiKey = config.TMDb_API_KEY;
  // https://api.themoviedb.org/3/movie/770?api_key=[tmdb-apikey]&language=en-US
  baseUrl = 'https://api.themoviedb.org/3/movie/';
  endUrl = '?api_key=' + this.tmdbApiKey + '&language=en-US';

  constructor(private http: HttpClient) {}

  getPopular() {
    return this.http.get(
      this.baseUrl + 'popular' + this.endUrl + '&page=1&region=IE'
    );
  }

  getTopRated() {
    return this.http.get(
      this.baseUrl + 'top_rated' + this.endUrl + '&page=1&region=IE'
    );
  }

  getTrendingToday() {
    return this.http.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=' +
        this.tmdbApiKey +
        '&region=IE'
    );
  }

  getDetails(movieid) {
    // let movieidString = JSON.stringify(movieid);
    // JSON.stringify;
    // console.log('This is the movie ID in the searvice fucntion' + movieid);
    // console.log(
    //   'This is the movie ID in the searvice fucntion (string)' + movieidString
    // );
    return this.http.get(
      this.baseUrl +
        movieid +
        this.endUrl +
        '&append_to_response=images,release_dates'
    );
  }

  getCredits(movieid) {
    return this.http.get(this.baseUrl + movieid + '/credits' + this.endUrl);
  }

  getWatchProviders(movieid) {
    return this.http.get(
      this.baseUrl + movieid + '/watch/providers?api_key=' + this.tmdbApiKey
    );
  }

  getVideos(movieid) {
    return this.http.get(this.baseUrl + movieid + '/videos' + this.endUrl);
  }
}
