import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../src/config';

@Injectable({
  providedIn: 'root',
})
export class SearchMoviesService {
  // getting the api key from the config varibale in the confg.js file
  tmdb_api_key = config.TMDb_API_KEY;

  base_url =
    'https://api.themoviedb.org/3/search/movie?api_key=' + config.TMDb_API_KEY;

  constructor(private http: HttpClient) {}

  basicSearch(search_keywords) {
    return this.http.get(
      this.base_url +
        '&language=en-US&query=' +
        search_keywords +
        '&page=1&include_adult=false&region=IE'
    );
  }
}
