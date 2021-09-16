import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FollowService } from '../services/follow.service';
import { AuthenticationService } from '../shared/authentication-service';
import { size } from 'lodash';
import { ReturnUser } from '../returnUser';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {


  userArray: Array<any> = [];
  followersArr = [];
  followingArr = [];
  currentUser = {} as User;
  followersC;
  followingC;
  followingCount: number;
  followerCount: number;

  constructor(
    public nativeStorage: NativeStorage,
    public followService: FollowService,
    public authService: AuthenticationService,
    public returnUser: ReturnUser,
    private router: Router

  ) {
    this.nativeStorage.getItem('user')
      .then(
        loggedInUserItem => {
          this.currentUser = loggedInUserItem;
          console.log("This is the current user  data: ", this.currentUser.uid)
          // retrieves the follower count for a user's profile
          this.followersC = this.followService.getFollowers(this.currentUser.uid).valueChanges()
            .subscribe(followers => {
              this.followersArr = Object.keys(followers);
              this.followerCount = size(followers);
              console.log("This is the followers Array --------: ", this.followersArr)

            })
          // retrieves the following count for a user's profile
          this.followingC = this.followService.getFollowing(this.currentUser.uid).valueChanges()
            .subscribe(following => {
              this.followingArr = Object.keys(following)
              this.followingCount = size(following);
              console.log("This is the following Array ---------: ", this.followingArr)
            })
        }
      );
  }

  viewFollowing() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        inputtedUser: JSON.stringify(this.currentUser),
        followersArr: JSON.stringify(this.followersArr),
        followingArr: JSON.stringify(this.followingArr),
      }
    };
    this.router.navigate(['/connections'], navigationExtras);
  }

  ngOnDestroy() {
    this.followersC.unsubscribe()
    this.followingC.unsubscribe()
  }
}
