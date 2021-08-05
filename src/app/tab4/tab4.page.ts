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
        loggedInUser => {
          console.log("This is the native data: " + loggedInUser.uid)
          this.displayD = loggedInUser;
          return loggedInUser;
        }
      );
  }

}
