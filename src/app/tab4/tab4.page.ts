import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FollowService } from '../services/follow.service';
import { AuthenticationService } from '../shared/authentication-service';

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
    public followService: FollowService,
    public authService: AuthenticationService
  ) {
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
