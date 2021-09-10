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
  @Input() inputtedUser; // currently logged in user

  isFollowing: boolean;
  following;


  constructor(
    public authService: AuthenticationService,
    public nativeStorage: NativeStorage,
    public followService: FollowService,
    private router: Router,
  ) { }

  ngOnChanges() {
    console.log("ppppppppppppppp pppppppppp This is called in the ng on changes ");
    // console.log(this.user.email)
    const userId = this.user.uid;
    const inputtedUserID = this.inputtedUser.uid;
    // checks if the currently logged in user is following this.user
    this.following = this.followService.isFollowing(inputtedUserID).valueChanges()
      .subscribe(following => {
        this.isFollowing = following[`${userId}`]
      })
  }

  toggleFollow() {
    // console.log(this.user.email)
    const userId = this.user.uid;
    const inputtedUserID = this.inputtedUser.uid;

    console.log("Inside toggle follow", inputtedUserID, "is following", userId, "=", this.isFollowing)
    console.log(this.isFollowing)
    if (this.isFollowing)
      this.followService.unfollow(inputtedUserID, userId)
    else this.followService.follow(inputtedUserID, userId)

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
