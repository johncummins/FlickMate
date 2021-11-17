import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../../config'

@Injectable({
  providedIn: 'root'
})
export class IMDbRatingService {

  omdb_api_key = config.OMDb_API_KEY;

  constructor(
    private http: HttpClient
  ) { }

  getIMDbRatings(imdbID) {
    console.log("This is the imdb id in the service " + imdbID)
    let result = this.http.get('https://www.omdbapi.com/?i=' + imdbID + '&apikey=' + this.omdb_api_key);
    return result;
  }

}
