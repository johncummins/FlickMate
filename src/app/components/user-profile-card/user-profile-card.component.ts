import { Component, Input, OnInit, NgModule } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { User } from 'src/app/models/user';
import { FollowService } from 'src/app/services/follow.service';
import { AuthenticationService } from 'src/app/shared/authentication-service';
// import { size } from 'lodash';

@Component({
  selector: 'app-user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.scss'],
})

export class UserProfileCardComponent implements OnInit {

  @Input() user;        // a user who can be followed
  @Input() currentUser; // currently logged in user

  isFollowing: boolean;
  // followingCount: number;
  // followerCount: number;

  following;
  // followersC;
  // followingC;



  constructor(
    public authService: AuthenticationService,
    public nativeStorage: NativeStorage,
    public followService: FollowService,
    private router: Router
  ) {

  }

  ngOnInit() {
    const userId = this.user.uid;
    const currentUserId = this.currentUser.uid

    // checks if the currently logged in user is following this.user
    this.following = this.followService.isFollowing(currentUserId).valueChanges()
      .subscribe(following => {
        this.isFollowing = following[`${userId}`]
      })

    // // retrieves the follower count for a user's profile
    // this.followersC = this.followService.getFollowers(userId).valueChanges()
    //   .subscribe(followersC => {
    //     this.followerCount = size(followersC)
    //   })

    // // retrieves the following count for a user's profile
    // this.followingC = this.followService.getFollowing(userId).valueChanges()
    //   .subscribe(followingC => {
    //     this.followingCount = size(followingC)
    //   })
  }

  toggleFollow() {
    // console.log(this.user.email)
    const userId = this.user.uid;
    const currentUserId = this.currentUser.uid;
    if (this.isFollowing) this.followService.unfollow(currentUserId, userId)
    else this.followService.follow(currentUserId, userId)
  }

  ngOnDestroy() {
    this.following.unsubscribe()
    // this.followersC.unsubscribe()
    // this.followingC.unsubscribe()
  }
  viewUser(clickedUser) {
    // Create Navigation Extras object to pass to movie page
    // This is passed into movie page from tab2.page.html
    let navigationExtras: NavigationExtras = {
      queryParams: {
        state: JSON.stringify(clickedUser)
      }
    };
    this.router.navigate(['/connections/profile-page'], navigationExtras);
  }

}
