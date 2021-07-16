import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../src/config';

@Injectable({
  providedIn: 'root',
})
export class SearchMoviesService {
  // getting the api key from the config varibale in the confg.js file
  tmdbApiKey = config.TMDb_API_KEY;

  baseUrl =
    'https://api.themoviedb.org/3/search/movie?api_key=' + this.tmdbApiKey;

  constructor(private http: HttpClient) {}

  basicSearch(searchKeywords) {
    return this.http.get(
      this.baseUrl +
        '&language=en-US&query=' +
        searchKeywords +
        '&page=1&include_adult=false&region=IE'
    );
  }
}
