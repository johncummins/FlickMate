import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FollowService } from '../services/follow.service';
import { AuthenticationService } from '../shared/authentication-service';
import { size } from 'lodash';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {


  userArray: Array<any> = [];
  currentUser = {} as User;
  followersC;
  followingC;
  followingCount: number;
  followerCount: number;

  constructor(
    public nativeStorage: NativeStorage,
    public followService: FollowService,
    public authService: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.nativeStorage.getItem('user')
      .then(
        loggedInUser => {
          console.log("This is the native data: ", loggedInUser.uid)
          this.currentUser.uid = loggedInUser.uid;
          // this.currentUserID = loggedInUser.uid;
          console.log("This is the current USer ID baaaaaaaa: ", this.currentUser.uid);

          // retrieves the follower count for a user's profile
          this.followersC = this.followService.getFollowers(this.currentUser.uid).valueChanges()
            .subscribe(followersC => {
              this.followerCount = size(followersC);
              console.log("This is the follower count: ", this.followerCount)
            })

          // retrieves the following count for a user's profile
          this.followingC = this.followService.getFollowing(this.currentUser.uid).valueChanges()
            .subscribe(followingC => {
              this.followingCount = size(followingC);
            })
        }
      );
  }

}
