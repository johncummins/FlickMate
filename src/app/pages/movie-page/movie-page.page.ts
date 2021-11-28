import { JsonPipe } from '@angular/common';
import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { filter, map } from 'rxjs/operators';

import { IMDbRatingService } from 'src/app/services/imdb-rating.service';
import { ReadMovieService } from 'src/app/services/read-movie.service';
import { ReviewService } from 'src/app/services/review.service';
import { TimeAgoService } from 'src/app/services/time-ago.service';
import { YoutubeService } from 'src/app/services/youtube.service';
import { Review } from 'src/app/models/review';
import { User } from 'src/app/models/user';
import { ReviewModalPage } from '../review-modal/review-modal.page';
import { RecommendModalPage } from '../recommend-modal/recommend-modal.page'
import { MovieObj } from 'src/app/models/movieObj';
import { from, Observable } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthService } from 'src/app/services/auth.service';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
// import { Plugins, Capacitor } from '@capacitor/core'; // Native version
import { YoutubePlayer } from 'capacitor-youtube-player';



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
  isAdded = false;
  isAdded10 = false;

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

  imdbMovieRating$;

  // this variable sets the region for the watch providers fucntion
  region = 'IE';
  public posterUrl = 'https://www.themoviedb.org/t/p/w342';
  public backgroundUrl = 'https://www.themoviedb.org/t/p/w780';
  public logoUrl = 'https://www.themoviedb.org/t/p/w154';
  public profileUrl = 'https://www.themoviedb.org/t/p/w185';
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
    private profileService: ProfileService,
    public auth: AuthService,
    public toastController: ToastController,
    private youtube: YoutubeVideoPlayer
  ) {
    this.route.queryParams.subscribe(
      (params) => {
        // retrieving the movi
        if (this.router.getCurrentNavigation().extras.state) {
          this.movie = this.router.getCurrentNavigation().extras.state;
          console.log("MovieID here", this.movie.movieID);
          this.movieDetails.movieID = this.movie.movieID;
        }
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
    this.getVideos();
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
        // temporary movie obj to store the api result
        this.movieTemp = result;
        console.log("getDetails() Result: ", this.movieTemp)
        this.movieDetails.imdbID = this.movieTemp.imdb_id;
        // calls to a seperate function which retrieves this movies imdb
        // rating using a seperate api
        this.getIMDbRating(this.movieTemp.imdb_id);

        this.movieDetails.movieGenre1 = this.movieTemp.genres[0].name;
        this.movieDetails.movieGenre2 = this.movieTemp.genres[1].name;
        this.movieDetails.title = this.movieTemp.title;
        this.movieDetails.posterPath = this.posterUrl + this.movieTemp.poster_path;
        this.movieDetails.backdropPath = this.backgroundUrl + this.movieTemp.backdrop_path;
        this.movieDetails.releaseDate = this.movieTemp.release_date;
        this.movieDetails.overview = this.movieTemp.overview;
        this.movieDetails.language = this.movieTemp.original_language;
        this.movieDetails.runtime = this.timeConvert();

        let releaseDatesISOArr = this.movieTemp.release_dates.results;
        let ageRatingTemp;


        releaseDatesISOArr.forEach(function (entry) {
          if (entry.iso_3166_1 === 'IE') {
            // this.release_dates.results[10].release_dates[0].certification
            console.log("This is the entry name without the name : ", entry.release_dates[0].certification);
            ageRatingTemp = entry.release_dates[0].certification;
          }
        })
        this.movieDetails.ageRating = ageRatingTemp;
        console.log("THIS IS the movie temp ", this.movieTemp)
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
        console.log("This is the creidts result: ", creditsRes.crew);
        var directors = [];
        creditsRes.crew.forEach(function (entry) {
          if (entry.job === 'Director') {
            directors.push(entry.name);
          }
        })
        this.movieDetails.directors = directors;
        // console.log('Director: ' + directors.join(', '));

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
        console.log('this is the video results : ', this.videoResults);
        console.log('this is the movie trailer Key: ', this.videoResults.results[0].key);
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
        console.log('inside the movie page here ', result);
        this.movieTrailerDetails = result;
        this.movieTrailerThumb = this.movieTrailerDetails.items[0].snippet.thumbnails.medium.url;
      },
      async (err) => {
        console.log(err.message);
      }
    );
  }

  // does not play full screen
  // async invokeVideoPlayer() {
  //   let videoIDStr: string = this.videoResults.results[0].key;
  //   console.log("InvokedViedoPlayer: ", videoIDStr);
  //   const options = {
  //     playerId: 'youtube-player-div', playerSize: { width: 640, height: 360 },
  //     videoId: videoIDStr, fullscreen: true, debug: true
  //   };
  //   const playerReady = await YoutubePlayer.initialize(options);
  //   console.log(playerReady);
  // }

  // plays fullscreen but is slower to load
  openVideo() {
    let videoIDStr: string = this.videoResults.results[0].key;
    console.log("OpenMyVideo: ", videoIDStr);
    if (videoIDStr) {
      this.youtube.openVideo(videoIDStr);
    }
    else {
      return alert('Error playing the video');

    }

  }



  getIMDbRating(imdb_id) {
    let movieRatingTemp: any;
    // let imdbIdFinal = this.movieDetails.imdbID;

    this.imdbMovieRating$ = this.imdbRatingService.getIMDbRatings(imdb_id);

    this.imdbRatingService.getIMDbRatings(imdb_id).subscribe((result) => {
      movieRatingTemp = result;
      console.log("imdb result: ", result)
      if (movieRatingTemp.imdbRating !== "N/A") {
        this.movieDetails.imdbRating = movieRatingTemp.imdbRating
      }
      else {
        this.movieDetails.imdbRating = ""
      }
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

  async openReviewModal(componentType: string) {
    console.log("Here is the inputted event ", componentType)
    let componentVar = null;
    if (componentType == "review") {
      componentVar = ReviewModalPage
    }
    else if (componentType == "recommend") {
      componentVar = RecommendModalPage

    }

    const coreMovieDetails = {
      movieID: this.movieDetails.movieID,
      movieTitle: this.movieDetails.title,
      moviePoster: this.movieDetails.posterPath,
      releaseYear: this.movieDetails.releaseDate.slice(0, 4)
    }

    const modal = await this.modalCtrl.create({
      component: componentVar,
      componentProps: {
        'coreMovieDetails': coreMovieDetails
      }
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : ', modalDataResponse.data);
      }
    });
    return await modal.present();
  }

  async addMovieToWatchlist(category: string) {
    console.log("THIS IS THE MOVIE OF THE MOVIE THAT WAS CLICKED:", this.movieDetails.movieID, category);

    let currentUser = await this.auth.getUser();
    this.profileService.writeProfileContent(currentUser.uid, category, this.movieDetails);
    if (category == "watchlist") {
      this.presentToast("Added to your watchlist");
      this.isAdded = true;
    }
    else if (category == "top10") {
      this.presentToast("Added to your top 10 movie list");
      this.isAdded10 = true;
    }
  }


  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'tertiary',
      cssClass: "toastAboveTab"
    });
    toast.present();
  }

  ngOnDestroy() {
    //
  }
}
