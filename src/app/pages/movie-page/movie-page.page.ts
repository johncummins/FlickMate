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
  public base_url = 'https://www.themoviedb.org/t/p/w92';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readmovieservice: ReadMovieService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.movie = this.router.getCurrentNavigation().extras.state;
        console.log(this.movie.movieID);
        // console.log(this.movie.poster);
        // console.log(this.movie.title);
      }
    });
  }

  getDetials() {
    this.readmovieservice.getDetails(this.movie.movieID).subscribe((result) => {
      this.movieDetails = result;
      console.log(
        'this is all the data as a object' + this.movieDetails.overview
      );
    });
  }
  ngOnInit() {
    this.getDetials();
  }
}
