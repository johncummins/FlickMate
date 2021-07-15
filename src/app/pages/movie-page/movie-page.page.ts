import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadMovieService } from 'src/app/services/read-movie.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.page.html',
  styleUrls: ['./movie-page.page.scss'],
})
export class MoviePagePage implements OnInit {
  //stores the movie id - which is passed into the getDetials function in the read-movei service
  movie: any;
  //object to store the resutls of get details fucntion
  movieDetails = {} as any;

  providers_res = {} as any;
  providers_flatrate_arr = {} as any;

  credits_res = {} as any;

  show_availability_message: boolean = true;

  // this variable sets the region for the watch providers fucntion
  region = 'IE';
  public poster_url = 'https://www.themoviedb.org/t/p/w92';
  public logo_url = 'https://www.themoviedb.org/t/p/w45';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readmovieservice: ReadMovieService
  ) {
    this.route.queryParams.subscribe(
      (params) => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.movie = this.router.getCurrentNavigation().extras.state;
          console.log(this.movie.movieID);
          // console.log(this.movie.poster);
          // console.log(this.movie.title);
        }
      },
      async (err) => {
        console.log(err.message);
      }
    );
  }

  getDetails() {
    this.readmovieservice.getDetails(this.movie.movieID).subscribe(
      (result) => {
        this.movieDetails = result;
      },
      async (err) => {
        console.log(err.message);
      }
    );
  }

  getWatchProviders() {
    this.readmovieservice.getWatchProviders(this.movie.movieID).subscribe(
      (result) => {
        this.providers_res = result;

        if (
          //check its availabilty in ireland
          this.providers_res.results.hasOwnProperty('IE') &&
          //check its available for streaming
          this.providers_res.results[this.region].hasOwnProperty('flatrate')
        ) {
          this.providers_flatrate_arr = this.providers_res.results[this.region];
          console.log(this.providers_res.results.hasOwnProperty('IE'));
        } else {
          this.show_availability_message = false;
        }
      },
      async (err) => {
        console.log(err.message);
      }
    );
  }

  getCredits() {
    this.readmovieservice.getCredits(this.movie.movieID).subscribe(
      (result) => {
        this.credits_res = result;
        console.log(
          'This is the credits results: ' + this.credits_res.cast[0].name
        );
      },
      async (err) => {
        console.log(err.message);
      }
    );
  }

  ngOnInit() {
    this.getDetails();
    this.getWatchProviders();
    this.getCredits();
  }
}
