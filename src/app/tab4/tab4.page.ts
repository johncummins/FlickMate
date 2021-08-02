import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication-service';
import { User } from '../shared/user';
import { NativeStorage } from '@ionic-native/native-storage/ngx';




@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  displayD: any;
  helloVar: string;

  constructor(
    public authService: AuthenticationService,
    public nativeStorage: NativeStorage
  ) {
    this.displayData();

  }

  ngOnInit() {



  }

  async displayData() {


    await this.nativeStorage.getItem('user')
      .then(
        data => {
          console.log("This is the native data: " + data.uid)
          this.displayD = data;
          // return data;
        }
      );

    let userItem = JSON.parse(localStorage.getItem('user'));
    console.log(
      'On the tab 4 page: ' +
      userItem.uid +
      userItem.photoURL +
      userItem.displayName

    );



  }



}
