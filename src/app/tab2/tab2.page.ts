import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ReadMovieService } from '../services/read-movie.service';
import { SearchMoviesService } from '../services/search-movies.service';
import { MovieBasic } from './MovieBasic';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  public searchRes: any;
  public popularMovies: any;
  public topRatedMovies: any;
  public trendingMovies: any;

  public inputDisplay: string;
  public showSearchResults = true;
  public showSearchTab = false;
  public base_url = 'https://www.themoviedb.org/t/p/w92';

  constructor(
    private searchmoviesservice: SearchMoviesService,
    private router: Router,
    private readmovieservice: ReadMovieService
  ) {}

  basicSearch(searchInput) {
    this.inputDisplay = searchInput;
    if (typeof this.inputDisplay !== undefined && this.inputDisplay) {
      this.showSearchResults = false;

      this.searchmoviesservice.basicSearch(searchInput).subscribe((result) => {
        this.searchRes = result['results'];

        console.log('THIS IS THE KEYWORD' + searchInput);
      });
    } else {
      this.showSearchTab = true;
    }
  }

  clearResults() {
    this.showSearchResults = true;
    this.showSearchTab = false;
  }

  showTab() {
    this.showSearchTab = true;
  }
  viewMovie(movieID, title, poster) {
    console.log('WORKING HERE' + movieID + title);
    // Create Navigation Extras object to pass to movie page
    // This is passed into movie page from tab2.page.html
    let navigationExtras: NavigationExtras = {
      state: { movieID, title, poster },
    };
    this.router.navigate(['movie-page'], navigationExtras);
  }

  getPopular() {
    this.readmovieservice.getPopular().subscribe((result) => {
      this.popularMovies = result['results'];
      console.log('THIS IS THE popular results...' + this.popularMovies);
    });
  }
  getTopRated() {
    this.readmovieservice.getTopRated().subscribe((result) => {
      this.topRatedMovies = result['results'];

      console.log('THIS IS THE top rated results...' + this.topRatedMovies);
    });
  }
  getTrendingToday() {
    this.readmovieservice.getTrendingToday().subscribe((result) => {
      this.trendingMovies = result['results'];

      console.log(
        'THIS IS THE top upcoming movies results...' + this.trendingMovies
      );
    });
  }
  ngOnInit() {
    this.getPopular();
    this.getTopRated();
    this.getTrendingToday();
  }
}
