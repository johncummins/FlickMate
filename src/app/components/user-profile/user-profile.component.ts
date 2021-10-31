import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { MovieObj } from 'src/app/models/movieObj';
import { FollowService } from 'src/app/services/follow.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ReadMovieService } from 'src/app/services/read-movie.service';
import { size } from 'lodash';
import { User } from 'src/app/models/user';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable, combineLatest, of } from 'rxjs';

// import { NativeStorage } from '@ionic-native/native-storage/ngx';
// import { Tab2Page } from '../../tab2/tab2.page'


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {

  @Input() inputtedUser;        // a user who can be followed

  // @Input() user;        // a user who can be followed

  profileID;
  currentUserID;
  topMovieArr = [];
  movieDetails = {} as MovieObj;
  movieTemp = {} as any;
  catMovieID = [];
  // catMovieTitles = [];
  public posterUrl = 'https://www.themoviedb.org/t/p/w342';
  public segmentCategory: string = 'top10';
  showTop10;
  showWatchlist;
  showRecommendations;

  receivedRecs$;
  sentRecs$;
  allRecs$;

  profileContent = {
    top10: [],
    watchlist: [],
    recommendations: [],
    ratings: []
    // ratings: [{
    //   senderID: String,
    //   sendersRating: Number,
    //   yourRating: Number,
    //   moviePoster: String,
    //   movieTitle: String,
    //   movieID: String,
    // }]
  }

  constructor(private profile: ProfileService, private readmovieservice: ReadMovieService, public followService: FollowService, private router: Router, public auth: AuthService,

  ) {
  }

  async ngOnInit() {
    //to get currentUser id
    const { uid } = await this.auth.getUser();
    this.currentUserID = uid

    this.profileID = this.inputtedUser.uid;
    if (this.profileID !== undefined) {
      this.getCategory();
      console.log("THe profile id is undefinred")
    }
    else {
      // setss profile id to the current user
      this.profileID = uid;
      // this.nativeStorage.getItem('user')
      //   .then(
      //     loggedInUserItem => {
      //       this.profileID = loggedInUserItem.uid;
      //       console.log("This is the current user data in ngonit: ", this.profileID)
      //       this.getCategory();
      //     }
      //   );
    }

  }

  getCategory() {
    this.checkSegment();
    // this.profile.getProfileContent(this.profileID, this.segmentCategory).valueChanges().pipe(take(1)).subscribe(res => {
    //   console.log("This is the res from the getProfileContent", res, "| The user is", this.profileID)
    //   if (res.items !== null || undefined) {
    //     this.catMovieID = res.items;
    //     console.log("This is the catMovieID********", this.catMovieID)

    //     let i = 0;
    //     this.catMovieID.map((a) => this.getMovieDetials(a, i++));
    //     // console.log("Top movie titles ", this.topMovieTitles);
    //     // console.log("Here in side the getopmovies fucntion");
    //   }
    //   else {
    //     this.getRecommendations()

    //   }

    // })
  }

  // getMovieDetials(inputtedID, position: number) {
  //   this.readmovieservice.getDetails(inputtedID).subscribe(
  //     (result) => {
  //       this.movieTemp = result;
  //       this.movieDetails.title = this.movieTemp.title;
  //       console.log("THis is the movie and the inutted posiiton", this.movieDetails.title, position)
  //       this.movieDetails.posterPath = this.posterUrl + this.movieTemp.poster_path;
  //       if (this.segmentCategory == 'top10' && this.profileContent.top10.length < this.catMovieID.length) {
  //         this.profileContent.top10.push({ title: this.movieDetails.title, poster: this.movieDetails.posterPath, ID: inputtedID });
  //         // this.profileContent.top10.splice(position, 1, { title: this.movieDetails.title, poster: this.movieDetails.posterPath, ID: inputtedID });
  //       }
  //       else if (this.segmentCategory == 'watchlist' && this.profileContent.watchlist.length < this.catMovieID.length) {
  //         this.profileContent.watchlist.push({ title: this.movieDetails.title, poster: this.movieDetails.posterPath, ID: inputtedID })
  //         console.log('This is the profile contentArray: ', this.profileContent)
  //       }
  //       else if (this.segmentCategory == 'recommendations') {
  //         // this.getRecommendations()
  //         console.log("doing somehting else: ");
  //       }
  //     },
  //     async (err) => {
  //       console.log("Heres the error: ", err.message);
  //     }
  //   )
  //   console.log("***********  THis is the Profile Content ********* ", this.profileContent)
  // }

  checkSegment() {
    this.showTop10 = false;
    this.showWatchlist = false;
    this.showRecommendations = false;
    if (this.segmentCategory == 'top10') {
      this.showTop10 = true;
    }
    else if (this.segmentCategory == 'watchlist') {
      this.showWatchlist = true;
    }
    else if (this.segmentCategory == 'recommendations') {
      this.showRecommendations = true;
      this.getRecommendations()
    }

  }

  viewMovie(movieID) {
    // Create Navigation Extras object to pass to movie page
    // This is passed into movie page from tab2.page.html
    let navigationExtras: NavigationExtras = {
      state: { movieID },
    };
    this.router.navigate(['tabs/tab4/movie-page'], navigationExtras);

  }

  getRecommendations() {

    if (this.inputtedUser.uid == this.currentUserID) {
      // get the all the recommendations that the current user has sent
      console.log("This is the current users profile")
    }
    else if (this.inputtedUser.uid !== this.currentUserID) {

      // // recieved recommendations
      this.receivedRecs$ = this.profile.getRecommendations(this.inputtedUser, this.currentUserID);
      // this.sentRecs$ = this.profile.getRecommendations(this.currentUserID, this.inputtedUser);
      // // this.allRecs$.combine(this.receivedRecs$, this.sentRecs$);
      // combineLatest([this.receivedRecs$, this.sentRecs$]).subscribe((result) => {
      //   console.log("THis is the fork join res: ", result)
      // })



      this.receivedRecs$.subscribe((result) => {
        // this.profileContent.ratings = result;
        // if (result.ratingsArr.senderID == this.currentUserID) {
        //   console.log("   ************ The current user is the sender: ");
        // }
        console.log("************ THis is the result from the get recommendations subscription: ", result);
      })

      // // sent recommendations
      // this.sentRecs$ = this.profile.getRecommendations(this.currentUserID, this.inputtedUser);

      // this.sentRecs$.subscribe((result) => {
      //   this.profileContent.ratings.concat(result.ratingsArr)
      //   if (result.ratingsArr.senderID == this.currentUserID) {
      //     console.log("   ************ The current user is the sender: ");
      //   }
      //   console.log("************ THis is the result from the get recommendations subscription: ", result);
      // })
    }
    else {
      console.log("some error retireving the ids with one of the users");
    }

  }

}
