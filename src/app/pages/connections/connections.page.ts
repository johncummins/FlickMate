import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { FollowService } from 'src/app/services/follow.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.page.html',
  styleUrls: ['./connections.page.scss'],
})
export class ConnectionsPage implements OnInit {

  // userArray: Array<any> = [];
  inputtedUser = {} as User;
  inUserFollowersArr = [];
  inUserFollowingArr = [];
  inUserFollowingArrObj;
  inUserFollowersArrObj;
  showFollowing: boolean;

  constructor(
    public followService: FollowService, private route: ActivatedRoute,
    public router: Router,
  ) {

  }
  ngOnInit() {
    this.route.queryParams.subscribe(
      (params) => {
        if (params) {
          this.showFollowing = JSON.parse(params.showFollowing),
            console.log("showFollowing in the query params", this.showFollowing)
          // this.inputtedUser = JSON.parse(params.inputtedUser),
          this.inUserFollowersArr = JSON.parse(params.followersArr),
            this.inUserFollowingArr = JSON.parse(params.followingArr);
        }
      },
      async (err) => {
        console.log(err.message);
      }
    );

  }

  ionViewWillEnter() {
    this.inUserFollowingArrObj = this.followService.getUserList(this.inUserFollowingArr);
    this.inUserFollowersArrObj = this.followService.getUserList(this.inUserFollowersArr);
    console.log("inUserFollowingARROBJ: ", this.inUserFollowingArrObj)

    // console.log("This is the temp getlist user: ", this.usersList$)
    // this.followService.getUsers().get().toPromise()
    //   .then((collections) => {
    //     let tempFollowingArr = []
    //     let tempFollowerArr = []
    //     collections.forEach((doc) => {
    //       if (this.showFollowing) {
    //         // console.log("Show following has been clicked: ", this.showFollowing);
    //         for (let index = 0; index < this.inUserFollowingArr.length; index++) {
    //           if (doc.id == this.inUserFollowingArr[index]) {
    //             // console.log("These have a match: ", doc.id)
    //             tempFollowingArr.push({ id: doc.id, data: doc.data() })
    //           }
    //         }
    //       }
    //       else {
    //         // console.log("Show followers has been clicked: ", this.showFollowing);
    //         for (let index = 0; index < this.inUserFollowersArr.length; index++) {
    //           if (doc.id == this.inUserFollowersArr[index]) {
    //             // console.log("These have a match: ", doc.id)
    //             tempFollowerArr.push({ id: doc.id, data: doc.data() })
    //           }
    //         }
    //       }
    //     })
    //     this.inUserFollowingArrObj = tempFollowingArr;
    //     this.inUserFollowersArrObj = tempFollowerArr;
    //     // console.log("USERARROBJ", this.inUserFollowingArrObj)
    //   })
  }
}
