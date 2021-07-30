import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication-service';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  profileData: any;

  constructor(
    public authService: AuthenticationService
  ) {

  }

  ngOnInit() {
    //     let profileData = JSON.parse(localStorage.getItem('user'));
    // console.log("This is in the tab 4: This is the ID: " + profileData.uid + "\n" +
    //   "This is the photo url: " + profileData.photoURL)
  }

}
