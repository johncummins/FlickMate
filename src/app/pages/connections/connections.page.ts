import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { User } from 'src/app/models/user';
import { FollowService } from 'src/app/services/follow.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.page.html',
  styleUrls: ['./connections.page.scss'],
})
export class ConnectionsPage implements OnInit {

  userArray: Array<any> = [];
  currentUser = {} as User;

  constructor(public nativeStorage: NativeStorage,
    public followService: FollowService,) { }

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
