import { Component, Input, OnInit, NgModule } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FollowService } from 'src/app/services/follow.service';
import { AuthenticationService } from 'src/app/shared/authentication-service';
import { size } from 'lodash';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})

export class UserProfileComponent implements OnInit {

  @Input() user;        // a user who can be followed
  @Input() currentUser; // currently logged in user

  followerCount: number;
  isFollowing: boolean;

  followers;
  following;


  constructor(
    public authService: AuthenticationService,
    public nativeStorage: NativeStorage,
    public followService: FollowService,
  ) {

  }

  ngOnInit() {
    const userId = this.user.uid;
    const currentUserId = this.currentUser.uid

    // checks if the currently logged in user is following this.user
    this.following = this.followService.getFollowing(currentUserId).valueChanges()
      .subscribe(following => {
        this.isFollowing = following[`${userId}`]
      })

    // retrieves the follower count for a user's profile
    this.followers = this.followService.getFollowers(userId).valueChanges()
      .subscribe(followers => {
        this.followerCount = size(followers)
      })
  }

  toggleFollow() {
    const userId = this.user.uid;
    const currentUserId = this.currentUser.uid;
    if (this.isFollowing) this.followService.unfollow(currentUserId, userId)
    else this.followService.follow(currentUserId, userId)
  }

  ngOnDestroy() {
    this.followers.unsubscribe()
    this.following.unsubscribe()
  }

}
