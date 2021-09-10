import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { User } from 'src/app/models/user';
import { ReturnUser } from 'src/app/returnUser';
import { FollowService } from 'src/app/services/follow.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.page.html',
  styleUrls: ['./connections.page.scss'],
})
export class ConnectionsPage implements OnInit {

  userArray: Array<any> = [];
  currentUser = {} as User;
  inputtedUser = {} as User;

  constructor(public nativeStorage: NativeStorage,
    public followService: FollowService, public returnUser: ReturnUser, private route: ActivatedRoute,
    public router: Router,
  ) {

  }

  ionViewWillEnter() {

  }

  ngOnInit() {

    // this.nativeStorage.getItem('user')
    //   .then(
    //     loggedInUser => {
    //       console.log("This is the native data: ", loggedInUser.uid)
    //       this.currentUser = loggedInUser;

    //     }
    //   );

    this.route.queryParams.subscribe(
      (params) => {
        if (params) {
          this.inputtedUser = JSON.parse(params.state);
          console.log("%%%%%%%%%%%%%%%%% This is the user passed through query params into the connections page", this.inputtedUser)
        }
      },
      async (err) => {
        console.log(err.message);
      }
    );
    let loggedInUser = JSON.parse(this.returnUser.checkPlatform());
    this.currentUser = loggedInUser;


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
