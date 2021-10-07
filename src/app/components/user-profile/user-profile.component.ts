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
  topMovieArr = [];
  movieDetails = {} as MovieObj;
  movieTemp = {} as any;
  catMovieID = [];
  // catMovieTitles = [];
  public posterUrl = 'https://www.themoviedb.org/t/p/w342';
  public segmentCategory: string = 'top10';
  showTop10;
  showWatchlist;
  showRatings;
  showLists;

  profileContent = {
    top10: [],
    watchlist: [],
    ratings: [],
    lists: []
  }

  constructor(private profile: ProfileService, private readmovieservice: ReadMovieService, public followService: FollowService, private router: Router, public auth: AuthService,

  ) {
  }

  ngOnInit() {
    this.profileID = this.inputtedUser.uid;
    if (this.profileID !== undefined) {
      this.getCategory();
    }
    else {
      async () => {
        const { uid } = await this.auth.getUser();
        this.profileID = uid;
      }

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
    this.profile.getProfileContent(this.profileID, this.segmentCategory).valueChanges().pipe(take(1)).subscribe(res => {
      console.log("This is the res from the getProfileContent", res, "| The user is", this.profileID)
      this.catMovieID = res.items;
      console.log("This is the catMovieID********", this.catMovieID)

      let i = 0;
      this.catMovieID.map((a) => this.getMovieDetials(a, i++));
      // console.log("Top movie titles ", this.topMovieTitles);
      // console.log("Here in side the getopmovies fucntion");
    })
  }

  getMovieDetials(inputtedID, position: number) {
    this.readmovieservice.getDetails(inputtedID).subscribe(
      (result) => {
        this.movieTemp = result;
        this.movieDetails.title = this.movieTemp.title;
        console.log("THis is the movie and the inutted posiiton", this.movieDetails.title, position)
        this.movieDetails.posterPath = this.posterUrl + this.movieTemp.poster_path;
        if (this.segmentCategory == 'top10' && this.profileContent.top10.length < this.catMovieID.length) {
          this.profileContent.top10.push({ title: this.movieDetails.title, poster: this.movieDetails.posterPath, ID: inputtedID });
          // this.profileContent.top10.splice(position, 1, { title: this.movieDetails.title, poster: this.movieDetails.posterPath, ID: inputtedID });
        }
        else if (this.segmentCategory == 'watchlist' && this.profileContent.watchlist.length < this.catMovieID.length) {
          this.profileContent.watchlist.push({ title: this.movieDetails.title, poster: this.movieDetails.posterPath, ID: inputtedID })
          console.log('This is the profile contentArray: ', this.profileContent)
        }
        else if (this.segmentCategory == 'ratings' && this.profileContent.watchlist.length < this.catMovieID.length) {
          this.profileContent.ratings.push({ title: this.movieDetails.title, poster: this.movieDetails.posterPath, ID: inputtedID })
        }
        else if (this.segmentCategory == 'lists' && this.profileContent.watchlist.length < this.catMovieID.length) {
          this.profileContent.lists.push({ title: this.movieDetails.title, poster: this.movieDetails.posterPath, ID: inputtedID })
        }
      },
      async (err) => {
        console.log("Heres the error: ", err.message);
      }
    )
  }

  checkSegment() {
    this.showTop10 = false;
    this.showWatchlist = false;
    this.showRatings = false;
    this.showLists = false;
    if (this.segmentCategory == 'top10') {
      this.showTop10 = true;
    }
    else if (this.segmentCategory == 'watchlist') {
      this.showWatchlist = true;
    }
    else if (this.segmentCategory == 'ratings') {
      this.showRatings = true;
    }
    else if (this.segmentCategory == 'lists') {
      this.showLists = true;
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

}
