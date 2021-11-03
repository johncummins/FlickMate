import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { FollowService } from 'src/app/services/follow.service';
import { size } from 'lodash';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})

export class ProfilePagePage implements OnInit {

  inputtedUser: any;
  clickedUserID: string;
  followersC;
  followingC;
  followersArr = [];
  followingArr = [];
  followingCount;
  followerCount;
  currentUserBool = false;

  constructor(private route: ActivatedRoute,
    public router: Router, public followService: FollowService,
  ) {
    this.route.queryParams.subscribe(
      (params) => {
        if (params) {
          this.inputtedUser = JSON.parse(params.state);
          this.clickedUserID = this.inputtedUser.uid;

          // retrieves the follower count for a user's profile
          this.followersC = this.followService.getFollowers(this.clickedUserID).valueChanges()
            .subscribe(followers => {
              this.followersArr = Object.keys(followers)
              this.followerCount = size(followers);
              // console.log("This is the followers Array ---------: ", this.followersArr)

            })
          // retrieves the following count for a user's profile
          this.followingC = this.followService.getFollowing(this.clickedUserID).valueChanges()
            .subscribe(following => {
              this.followingArr = Object.keys(following)
              this.followingCount = size(following);
              // console.log("This is the following Array ---------: ", this.followingArr)

            })
        }
      },
      async (err) => {
        console.log(err.message);
      }
    );

  }
  ngOnInit() {
  }


  viewFollowing(showWhich: boolean) {
    console.log("This is the inputted user befroe its sent off( in view following)", this.inputtedUser)
    // Create Navigation Extras object to pass to movie page
    // This is passed into movie page from tab2.page.html
    let navigationExtras: NavigationExtras = {
      queryParams: {
        showFollowing: showWhich,
        inputtedUser: JSON.stringify(this.inputtedUser),
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
