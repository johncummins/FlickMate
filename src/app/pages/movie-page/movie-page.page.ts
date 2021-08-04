import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ReadMovieService } from 'src/app/services/read-movie.service';
import { ReviewService } from 'src/app/services/review.service';
import { YoutubeService } from 'src/app/services/youtube.service';
import { ReviewModalPage } from '../review-modal/review-modal.page';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.page.html',
  styleUrls: ['./movie-page.page.scss'],
})
export class MoviePagePage implements OnInit {
  //stores the movie id - which is passed into the getDetials function in the read-movei service
  movie: any;
  segmentModel = 'info';
  ishidden = false;

  //object to store the resutls of get details fucntion
  movieDetails = {} as any;
  providersRes = {} as any;
  providersFlatrateArr = {} as any;
  creditsRes = {} as any;
  hideAvailabilityMessage: boolean = true;
  hideCastMessage: boolean = true;
  videoResults = {} as any;
  movieTrailerDetails = {} as any;
  movieTrailerThumb = {} as any;
  modalDataResponse: any;


  // this variable sets the region for the watch providers fucntion
  region = 'IE';
  public posterUrl = 'https://www.themoviedb.org/t/p/w92';
  public logoUrl = 'https://www.themoviedb.org/t/p/w45';
  videoUrl = 'https://www.youtube.com/watch?v=';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readmovieservice: ReadMovieService,
    private youtubeservice: YoutubeService,
    public reviewService: ReviewService,
    public modalCtrl: ModalController
  ) {
    this.route.queryParams.subscribe(
      (params) => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.movie = this.router.getCurrentNavigation().extras.state;
          console.log("MovieID here" + this.movie.movieID);
          // console.log(this.movie.poster);
          // console.log(this.movie.title);
        }
      },
      async (err) => {
        console.log(err.message);
      }
    );
  }

  //changes the segment based on the value of segment button pressed
  segmentChanged(event) {
    console.log('Segment changed to', this.segmentModel);
    // if statement below hides and shows the twitter cards
    if (this.segmentModel == 'reviews') {
      this.ishidden = true;
    } else {
      this.ishidden = false;
    }
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
        this.providersRes = result;

        if (
          //check its availabilty in ireland
          this.providersRes.results.hasOwnProperty('IE') &&
          //check its available for streaming
          this.providersRes.results[this.region].hasOwnProperty('flatrate')
        ) {
          this.providersFlatrateArr = this.providersRes.results[this.region];
          console.log(this.providersRes.results.hasOwnProperty('IE'));
        } else {
          this.hideAvailabilityMessage = false;
        }
      },
      async (err) => {
        console.log(err.message);
      }
    );
  }

  getCredits() {
    // this.noCastErrorMsg = '';
    let castArray = [];
    this.readmovieservice.getCredits(this.movie.movieID).subscribe(
      (result) => {
        this.creditsRes = result;
        castArray = this.creditsRes.cast;
        if (castArray.length > 0) {
          console.log(
            'This is the credits results: ' + this.creditsRes.cast[0].name
          );
        } else {
          this.hideCastMessage = false;
          console.log(
            'Sorry, there is no information regarding cast members of this movie'
          );
        }
      },
      async (err) => {
        console.log(err.message);
      }
    );
  }

  getVideos() {
    this.readmovieservice.getVideos(this.movie.movieID).subscribe(
      (result) => {
        this.videoResults = result;
        console.log(
          ' this is the movie trailer ID: ' + this.videoResults.results[0].key
        );
        this.getTrailer();
      },
      async (err) => {
        console.log(err.message);
      }
    );
  }

  getTrailer() {
    this.youtubeservice.getTrailer(this.videoResults.results[0].key).subscribe(
      (result) => {
        console.log('inside the movie page here ' + result);
        this.movieTrailerDetails = result;
        this.movieTrailerThumb = this.movieTrailerDetails.items[0].snippet.thumbnails.medium.url;
        console.log(
          'THese are the movie trailer detaisl' +
          this.movieTrailerDetails.items[0].snippet.thumbnails.default.url
        );
      },
      async (err) => {
        console.log(err.message);
      }
    );
  }

  async openReviewModal() {
    const modal = await this.modalCtrl.create({
      component: ReviewModalPage,
      componentProps: {
        'movieToReviewID': this.movie.movieID,
        'movieToReviewTitle': this.movieDetails.title
      }
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : ' + modalDataResponse.data);
      }
    });
    return await modal.present();
  }

  ngOnInit() {
    this.getDetails();
    this.getWatchProviders();
    this.getCredits();
    this.getVideos();
  }
}
