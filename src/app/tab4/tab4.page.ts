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
export class Tab4Page implements OnInit {


  userArray: Array<any> = [];
  followersArr = [];
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
  }

  ngOnInit() {
    let loggedInUser = JSON.parse(this.returnUser.checkPlatform())
    // this.nativeStorage.getItem('user')
    console.log("This is the native data: ", loggedInUser.uid)
    this.currentUser = loggedInUser;

    // followerRef.get().toPromise()
    //   .then(docSnapshot => {
    //     if (docSnapshot.exists && followerId == undefined)
    //       console.log("Error: cannot add follower, The user is not defined (not logged in)")
    //     else if (docSnapshot.exists)
    //       followerRef.update({ [followerId]: true })
    //     else
    //       followerRef.set({ [followerId]: true })
    //   });

    // retrieves the follower count for a user's profile
    this.followersC = this.followService.getFollowers(this.currentUser.uid).get().toPromise().then(docSnapshot => {
      console.log("This is the doc snapshot: ", docSnapshot.data(),
        this.followersArr = Object.keys(docSnapshot.data())
      );
      console.log("This is the followrs array: ", this.followersArr);

    })



    // .subscribe(followers => {
    //   // for (const key in followers) {

    //   // }
    //   this.followersArr.push(followers);
    //   console.log("This is the userArray: ", this.followersArr)


    //   console.log("This is the followers from subscirbe: ", followers)
    //   this.followerCount = size(followers);
    //   console.log("This is the follower count: ", this.followerCount)
    // })

    // retrieves the following count for a user's profile
    this.followingC = this.followService.getFollowing(this.currentUser.uid).valueChanges()
      .subscribe(following => {
        this.followingCount = size(following);
      })
  }

  viewFollowing() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        currUser: JSON.stringify(this.currentUser)
      }
    };
    this.router.navigate(['/connections'], navigationExtras);
  }

  ngOnDestroy() {
    this.followersC.unsubscribe()
    this.followingC.unsubscribe()
  }

  // getEach(){

  // }
}
