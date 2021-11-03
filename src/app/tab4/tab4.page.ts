import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user';
import { FollowService } from '../services/follow.service';
import { AuthService } from '../services/auth.service';
import { size } from 'lodash';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

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
  followingCount: number = 0;
  followerCount: number = 0;
  currentUserBool = true;

  constructor(
    public followService: FollowService,
    public auth: AuthService,
    private router: Router,
    private menu: MenuController

  ) {
  }

  async ionViewWillEnter() {
    this.currentUser = await this.auth.getUser();

    // retrieves the follower count for a user's profile
    this.followersC = this.followService.getFollowers(this.currentUser.uid).valueChanges()
      .subscribe(followers => {
        this.followersArr = Object.keys(followers);
        this.followerCount = size(followers);
      },
        async (err) => {
          console.log("This user has no followers", err.message);
        })
    // retrieves the following count for a user's profile
    this.followingC = this.followService.getFollowing(this.currentUser.uid).valueChanges()
      .subscribe(following => {
        this.followingArr = Object.keys(following)
        this.followingCount = size(following);
      },
        async (err) => {
          console.log("This user has no following", err.message);
        })
  }

  viewFollowing(showWhich: boolean) {
    console.log("Show which is: ", showWhich)
    let navigationExtras: NavigationExtras = {
      queryParams: {
        showFollowing: showWhich,
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

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}
