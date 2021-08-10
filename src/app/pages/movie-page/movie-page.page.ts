import { JsonPipe } from '@angular/common';
import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IMDbRatingService } from 'src/app/services/imdb-rating.service';
import { ReadMovieService } from 'src/app/services/read-movie.service';
import { ReviewService } from 'src/app/services/review.service';
import { TimeAgoService } from 'src/app/services/time-ago.service';
import { YoutubeService } from 'src/app/services/youtube.service';
import { Review } from 'src/app/models/review';
import { User } from 'src/app/models/user';
import { ReviewModalPage } from '../review-modal/review-modal.page';
import { MovieObj } from 'src/app/models/movieObj';




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
  movieDetails = {} as MovieObj;
  hideAvailabilityMessage: boolean = true;
  hideCastMessage: boolean = true;
  videoResults = {} as any;
  movieTrailerDetails = {} as any;
  movieTrailerThumb = {} as any;
  modalDataResponse: any;
  providersFlatrateArr = {} as any;

  dateTemp: any;
  reviewDateTime: any;
  reviewHowLongAgo: string;
  returnedReview: any;

  movieTemp = {} as any;

  // this variable sets the region for the watch providers fucntion
  region = 'IE';
  public posterUrl = 'https://www.themoviedb.org/t/p/w154';
  public backgroundUrl = 'https://www.themoviedb.org/t/p/w500';
  public logoUrl = 'https://www.themoviedb.org/t/p/w45';
  videoUrl = 'https://www.youtube.com/watch?v=';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readmovieservice: ReadMovieService,
    private youtubeservice: YoutubeService,
    public reviewService: ReviewService,
    public modalCtrl: ModalController,
    public afStore: AngularFirestore,
    public timeAGo: TimeAgoService,
    private imdbRatingService: IMDbRatingService,

  ) {
    this.route.queryParams.subscribe(
      (params) => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.movie = this.router.getCurrentNavigation().extras.state;
          console.log("MovieID here" + this.movie.movieID);
          console.log(this.movie.title);
          this.movieDetails.movieID = this.movie.movieID;
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
      let movieIDStr = JSON.stringify(this.movieDetails.movieID)
      // const userReviewRef = this.afStore.collection('posts').doc(movieIDStr).collection('userReviews').doc("o2Z2hETZHPUVuSRZtOG8B8xbtBd2")
      const userReviewRef = this.afStore.collection('posts').doc(movieIDStr).collection('userReviews');

      userReviewRef.get().toPromise().then((querySnapshot) => {
        const tempDoc = []
        querySnapshot.forEach((doc) => {
          console.log(doc.data().date.seconds)
          this.dateTemp = doc.data().date.seconds
          this.reviewDateTime = new Date(this.dateTemp * 1000);
          this.reviewHowLongAgo = this.timeAGo.timeAgo(this.reviewDateTime);

          //push all data to the tempDoc array
          tempDoc.push({ id: doc.id, data: doc.data(), reviewHowLongAgo: this.reviewHowLongAgo })
          return this.returnedReview = tempDoc;
        });
      })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
      this.ishidden = true;
    } else {
      this.ishidden = false;
    }
  }



  getDetails() {
    this.readmovieservice.getDetails(this.movieDetails.movieID).subscribe(
      (result) => {
        this.movieTemp = result;
        this.movieDetails.imdbID = this.movieTemp.imdb_id;
        this.movieDetails.movieGenre1 = this.movieTemp.genres[0].name;
        this.movieDetails.movieGenre2 = this.movieTemp.genres[1].name;
        this.movieDetails.title = this.movieTemp.title
        this.movieDetails.posterPath = this.posterUrl + this.movieTemp.poster_path
        this.movieDetails.backdropPath = this.backgroundUrl + this.movieTemp.backdrop_path;
        this.movieDetails.releaseDate = this.movieTemp.release_date;
        this.movieDetails.runtime = this.timeConvert();
        this.getIMDbRating();
        console.log("THIS IS HTE TITLE " + this.movieDetails.title)
      },
      async (err) => {
        console.log(err.message);
      }
    );
  }

  getWatchProviders() {
    this.readmovieservice.getWatchProviders(this.movieDetails.movieID).subscribe(
      (result) => {
        let providersRes = {} as any;
        providersRes = result;
        if (
          //check its availabilty in ireland
          providersRes.results.hasOwnProperty('IE') &&
          //check its available for streaming
          providersRes.results[this.region].hasOwnProperty('flatrate')
        ) {
          this.providersFlatrateArr = providersRes.results[this.region];
          console.log(providersRes.results.hasOwnProperty('IE'));
          // this.movieDetails.streamingProviders = providersFlatrateArr;
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
    let creditsRes = {} as any;
    let castArrayTemp = [];
    this.readmovieservice.getCredits(this.movieDetails.movieID).subscribe(
      (result) => {
        creditsRes = result;
        castArrayTemp = creditsRes.cast;
        if (castArrayTemp.length > 0) {
          this.movieDetails.castArray = castArrayTemp.slice(0, 16);
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
    this.readmovieservice.getVideos(this.movieDetails.movieID).subscribe(
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

      },
      async (err) => {
        console.log(err.message);
      }
    );
  }

  getIMDbRating() {
    let movieRatingTemp: any;
    let imdbIdFinal = this.movieDetails.imdbID;
    this.imdbRatingService.getIMDbRatings(imdbIdFinal).subscribe((result) => {
      movieRatingTemp = result,
        this.movieDetails.imdbRating = movieRatingTemp.imdbRating
    },
      async (err) => {
        console.log(err.message);
      }
    );
  }

  timeConvert() {
    const t = this.movieTemp.runtime
    var hours = (t / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "m";
  }

  async openReviewModal() {
    const modal = await this.modalCtrl.create({
      component: ReviewModalPage,
      componentProps: {
        'movieToReviewID': this.movieDetails.movieID,
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
