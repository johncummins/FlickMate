import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../src/config';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root',
})
export class ReadMovieService {
  // getting the api key from the config varibale in the confg.js file
  tmdb_api_key = config.TMDb_API_KEY;

  // https://api.themoviedb.org/3/movie/770?api_key=[tmdb-apikey]&language=en-US
  base_url = 'https://api.themoviedb.org/3/movie/';
  end_url = '?api_key=' + this.tmdb_api_key + '&language=en-US';

  constructor(private http: HttpClient) {}

  getPopular() {
    return this.http.get(
      this.base_url + 'popular' + this.end_url + '&page=1&region=IE'
    );
  }

  getTopRated() {
    return this.http.get(
      this.base_url + 'top_rated' + this.end_url + '&page=1&region=IE'
    );
  }

  getTrendingToday() {
    return this.http.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=' +
        this.tmdb_api_key +
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
    return this.http.get(this.base_url + movieid + this.end_url);
  }

  getCredits(movieid) {
    return this.http.get(this.base_url + movieid + '/credits' + this.end_url);
  }

  getWatchProviders(movieid) {
    return this.http.get(
      this.base_url + movieid + '/watch/providers?api_key=' + this.tmdb_api_key
    );
  }
}
