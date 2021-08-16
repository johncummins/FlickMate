import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication-service';
import { User } from '../models/user';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FollowService } from '../services/follow.service';
import { size } from 'lodash';




@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  currentUser = {} as User;

  followerCount: number;
  isFollowing: boolean;

  profile = {} as User;


  followers;
  following;


  constructor(
    public authService: AuthenticationService,
    public nativeStorage: NativeStorage,
    public followService: FollowService
  ) {
    // this.getCurrentUser();
    this.currentUser.displayName = 'currentUser(JohnC)';
    this.currentUser.photoURL = 'https://lh3.googleusercontent.com/a-/AOh14Ggd-AsZIfCpdRkrbroV14r30AyJQGnnVeDzr7WRFA=s96-c';
    this.currentUser.uid = 'JMbNO0FXEgNDtgNVLFTmBAtrhwC2'
  }

  ngOnInit() {

    const userId = '123';
    const currentUserId = this.currentUser.uid;


    // checks if the currently logged in user is following this.user
    this.following = this.followService.getFollowing(currentUserId).valueChanges()
      .subscribe(following => {
        console.log(following[`${userId}`])
        this.isFollowing = following[`${userId}`]
      })


    // retrieves the follower count for a user's profile
    this.followers = this.followService.getFollowers(userId).valueChanges()
      .subscribe(followers => {
        console.log("Inside init func ", followers[`field`])
        this.followerCount = this.countFollowers(followers)

      })
  }


  private countFollowers(followers) {
    // return size(followers)
    console.log("Inside countFollowers", followers)
    if (followers[`field`] === null) return 0
    else return size(followers)
  }


  toggleFollow() {
    const userId = '123';
    const currentUserId = this.currentUser.uid

    if (this.isFollowing) this.followService.unfollow(currentUserId, userId)
    else this.followService.follow(currentUserId, userId)
  }


  ngOnDestroy() {
    this.followers.unsubscribe()
    this.following.unsubscribe()
  }


  async getCurrentUser() {
    await this.nativeStorage.getItem('user')
      .then(
        loggedInUser => {
          console.log("This is the native data: ", loggedInUser.uid)
          // this.currentUser = loggedInUser;

        }
      );
  }

}
