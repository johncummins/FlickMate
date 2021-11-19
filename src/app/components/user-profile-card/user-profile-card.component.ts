import { Component, Input, OnInit, NgModule } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/models/user';
// import { FindFriendsModalPage } from 'src/app/pages/find-friends-modal/find-friends-modal.page';
import { FollowService } from 'src/app/services/follow.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.scss'],
})

export class UserProfileCardComponent {

  @Input() user;        // a user who can be followed
  @Input() closeModal;        // a user who can be followed
  // @Input() currentUser; // currently logged in user

  isFollowing: boolean;
  following;
  currentUser: User;

  constructor(
    public authService: AuthService,
    public followService: FollowService,
    private router: Router,
    public auth: AuthService, public modalCtrl: ModalController
  ) {
  }

  async ngOnChanges() {
    var userId: string;
    userId = this.user.uid;

    this.currentUser = await this.auth.getUser();
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
    // this.router.navigate(['/connections/profile-page', clickedUser.uid]);
    this.router.navigate(['/connections/profile-page'], navigationExtras);

    // take care of the find friends modal if needed
    if (this.closeModal) {
      this.close()
    }
    else {
      console.log("Dont need to close any modal")
    }
  }

  ngOnDestroy() {
    this.following.unsubscribe()
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtrl.dismiss(closeModal);
  }

}
