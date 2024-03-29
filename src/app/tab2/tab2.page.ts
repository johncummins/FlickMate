import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ReadMovieService } from '../services/read-movie.service';
import { SearchMoviesService } from '../services/search-movies.service';
// import { MovieBasic } from './MovieBasic';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  public searchRes: Observable<any[]>;
  // public popularMovies: any;
  public popularMovies: Observable<any[]>; // used for API call

  public topRatedMovies: Observable<any[]>;
  public trendingMovies: Observable<any[]>;

  public inputDisplay: Observable<any[]>;
  public showSearchResults = true;
  public showSearchTab = false;
  public posterUrl = 'https://www.themoviedb.org/t/p/w185';

  constructor(
    private searchmoviesservice: SearchMoviesService,
    private router: Router,
    private readmovieservice: ReadMovieService, public keyboard: Keyboard, public navCtrl: NavController
  ) { }

  basicSearch(searchInput) {
    this.inputDisplay = searchInput;
    if (typeof this.inputDisplay !== undefined && this.inputDisplay) {
      this.showSearchResults = false;

      this.searchmoviesservice.basicSearch(searchInput).subscribe(
        (result) => {
          this.searchRes = result['results'];

          console.log('THIS IS THE KEYWORD', searchInput);
        },
        async (err) => {
          console.log(err.message);
        }
      );
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

  viewMovie(movieID) {
    // Create Navigation Extras object to pass to movie page
    // This is passed into movie page from tab2.page.html
    let navigationExtras: NavigationExtras = {
      state: { movieID },
    };
    this.router.navigate(['/tabs/tab2/movie-page'], navigationExtras);
  }

  getPopular() {
    this.readmovieservice.getPopular().subscribe(
      (result) => {
        this.popularMovies = result['results'];
        console.log('THIS IS THE popular results...', this.popularMovies);
      },
      async (err) => {
        console.log(err.message);
      }
    );
  }

  getTopRated() {
    this.readmovieservice.getTopRated().subscribe(
      (result) => {
        this.topRatedMovies = result['results'];

        console.log('THIS IS THE top rated results...', this.topRatedMovies);
      },
      async (err) => {
        console.log(err.message);
      }
    );
  }
  getTrendingToday() {
    this.readmovieservice.getTrendingToday().subscribe(
      (result) => {
        this.trendingMovies = result['results'];

        console.log(
          'THIS IS THE top upcoming movies results...', this.trendingMovies
        );
      },
      async (err) => {
        console.log(err.message);
      }
    );
  }
  ngOnInit() {
    this.getPopular();
    this.getTopRated();
    this.getTrendingToday();
  }

  closeKeyboard(q: string) {
    console.log("Triggerred", q);
    this.keyboard.hide();

  }
}
