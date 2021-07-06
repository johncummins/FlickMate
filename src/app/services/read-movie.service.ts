import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../src/config';

@Injectable({
  providedIn: 'root',
})
export class ReadMovieService {
  // getting the api key from the config varibale in the confg.js file
  tmdb_api_key = config.TMDb_API_KEY;

  base_url = 'https://api.themoviedb.org/3/movie/';
  end_url = '?api_key=' + this.tmdb_api_key + '&language=en-US';

  constructor(private http: HttpClient) {}

  getDetails(movieid) {
    return this.http.get(this.base_url + movieid + this.end_url);
  }
  getPopular() {
    return this.http.get(this.base_url + 'popular' + this.end_url + '&page=1');
  }
  getTopRated() {
    return this.http.get(
      this.base_url + 'top_rated' + this.end_url + '&page=1'
    );
  }
  getTrendingToday() {
    return this.http.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=' +
        this.tmdb_api_key
    );
  }
}
