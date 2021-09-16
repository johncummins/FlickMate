import { Component, Input, OnInit, NgModule } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { User } from 'src/app/models/user';
import { FollowService } from 'src/app/services/follow.service';
import { AuthenticationService } from 'src/app/shared/authentication-service';

@Component({
  selector: 'app-user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.scss'],
})

export class UserProfileCardComponent {

  @Input() user;        // a user who can be followed
  // @Input() currentUser; // currently logged in user

  isFollowing: boolean;
  following;
  currentUser: User;

  constructor(
    public authService: AuthenticationService,
    public nativeStorage: NativeStorage,
    public followService: FollowService,
    private router: Router,
  ) {
  }

  ngOnChanges() {
    var userId: string;
    userId = this.user.uid;
    this.nativeStorage.getItem('user')
      .then(
        currentUserItem => {
          this.currentUser = currentUserItem;
          const currentUserId = this.currentUser.uid

          if (this.user.uid == null) {
            console.log("user ID is null", userId);
          }
          else {
            console.log("user ID is not null", userId);

          }

          // checks if the currently logged in user is following this.user
          this.following = this.followService.isFollowing(currentUserId).valueChanges()
            .subscribe(following => {
              console.log("Inside the isfollwing fucntions", following)
              this.isFollowing = following[`${userId}`];
              console.log("Inside ngChanges", currentUserId, "is following", userId, "=", this.isFollowing)
            })
        }
      );
  }

  toggleFollow() {
    const userId = this.user.uid;
    const currentUserId = this.currentUser.uid;

    console.log("Inside toggle follow", currentUserId, "is following", userId, "=", this.isFollowing)
    if (this.isFollowing) {
      this.followService.unfollow(currentUserId, userId)
    }
    else {
      this.followService.follow(currentUserId, userId)
    }
  }

  viewUser(clickedUser) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        state: JSON.stringify(clickedUser)
      }
    };
    this.router.navigate(['/connections/profile-page'], navigationExtras);
  }

  ngOnDestroy() {
    this.following.unsubscribe()
  }

}
