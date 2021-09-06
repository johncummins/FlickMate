import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { MovieObj } from 'src/app/models/movieObj';
import { FollowService } from 'src/app/services/follow.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ReadMovieService } from 'src/app/services/read-movie.service';
import { size } from 'lodash';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {

  // @Input() user;        // a user who can be followed

  // @Input() user;        // a user who can be followed

  profileID = '9krRAy1dxKZJTe4xOd6VvMGQWvj2';
  // topMovieArr = [];
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

  followingCount: number;
  followerCount: number;

  following;
  followersC;
  followingC;


  profileContent = {
    top10: [],
    watchlist: [],
    ratings: [],
    lists: []
  }

  constructor(private profile: ProfileService, private readmovieservice: ReadMovieService, public followService: FollowService,) { }

  ngOnInit() {
    this.getCategory();
  }

  ngAfterContentInit() {
    // console.log("This is the ID that is passed in to get followeers: ", this.user.uid)

    // const userToViewID = this.user.uid;

    // // retrieves the follower count for a user's profile
    // this.followersC = this.followService.getFollowers(userToViewID).valueChanges()
    //   .subscribe(followersC => {
    //     this.followerCount = size(followersC);
    //     console.log("This is the follower count: ", this.followerCount)
    //   })

    // // retrieves the following count for a user's profile
    // this.followingC = this.followService.getFollowing(userToViewID).valueChanges()
    //   .subscribe(followingC => {
    //     this.followingCount = size(followingC);
    //   })
  }


  getCategory() {
    this.checkSegment();
    console.log(this.segmentCategory);
    this.profile.getTop10(this.profileID, this.segmentCategory).valueChanges().pipe(take(1)).subscribe(res => {
      this.catMovieID = res.items;
      // console.log('This is the top 10 array1: ', this.topMovieArr);
      this.catMovieID.map((a) => this.getMovieDetials(a));
      // console.log("Top movie titles ", this.topMovieTitles);
      // console.log("Here in side the getopmovies fucntion");
    })
  }

  getMovieDetials(inputtedID) {
    this.readmovieservice.getDetails(inputtedID).subscribe(
      (result) => {
        this.movieTemp = result;
        this.movieDetails.title = this.movieTemp.title;
        this.movieDetails.posterPath = this.posterUrl + this.movieTemp.poster_path;
        if (this.segmentCategory == 'top10' && this.profileContent.top10.length < this.catMovieID.length) {
          this.profileContent.top10.push({ title: this.movieDetails.title, poster: this.movieDetails.posterPath })
        }
        else if (this.segmentCategory == 'watchlist' && this.profileContent.watchlist.length < this.catMovieID.length) {
          this.profileContent.watchlist.push({ title: this.movieDetails.title, poster: this.movieDetails.posterPath })
        }
        else if (this.segmentCategory == 'ratings' && this.profileContent.watchlist.length < this.catMovieID.length) {
          this.profileContent.ratings.push({ title: this.movieDetails.title, poster: this.movieDetails.posterPath })
        }
        else if (this.segmentCategory == 'lists' && this.profileContent.watchlist.length < this.catMovieID.length) {
          this.profileContent.lists.push({ title: this.movieDetails.title, poster: this.movieDetails.posterPath })
        }
      },
      async (err) => {
        console.log(err.message);
      }
    )
    console.log('This is the profile contentArray: ', this.profileContent)
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

  ngOnDestroy() {
    this.followersC.unsubscribe()
    this.followingC.unsubscribe()
  }
}
