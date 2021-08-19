import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FollowService } from '../services/follow.service';




@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {


  userArray: Array<any> = [];
  currentUser = {} as User;

  constructor(
    public nativeStorage: NativeStorage,
    public followService: FollowService
  ) {
    this.currentUser.displayName = 'currentUser(JohnC)';
    this.currentUser.photoURL = 'https://lh3.googleusercontent.com/a-/AOh14Ggd-AsZIfCpdRkrbroV14r30AyJQGnnVeDzr7WRFA=s96-c';
    this.currentUser.uid = 'JMbNO0FXEgNDtgNVLFTmBAtrhwC2'
  }

  ngOnInit() {

    this.nativeStorage.getItem('user')
      .then(
        loggedInUser => {
          console.log("This is the native data: ", loggedInUser.uid)
          this.currentUser = loggedInUser;

        }
      );

    this.followService.getUsers().get().toPromise()
      .then((collections) => {
        var getUsersPromise = new Promise((resolve, reject) => {
          collections.forEach((doc) => {
            this.userArray.push(doc.data())
          })
          if (this.userArray.length > 0) {
            resolve(this.userArray)
          }
          else {
            reject({
              message: 'User array does not have data present'
            })
          }
        });

        getUsersPromise.then((message) => {
          console.log("All done", message)
        })
      })

  }
}
