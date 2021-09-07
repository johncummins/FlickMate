import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage implements OnInit {

  inputtedUser: any;
  clickedUserID: string;
  followingCount;
  followerCount;

  constructor(private route: ActivatedRoute,
    public router: Router,) {
    this.route.queryParams.subscribe(
      (params) => {
        if (params) {
          this.inputtedUser = JSON.parse(params.state);
          console.log("This is te inputted user: ", this.inputtedUser);
          console.log("This is te inputted userID: ", this.inputtedUser.uid);
        }

      },
      async (err) => {
        console.log(err.message);
      }
    );
  }

  ngOnInit() {



  }
}
