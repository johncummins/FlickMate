import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { isPlatform } from "@ionic/angular";
// import { User } from './models/user';


@Injectable({
  providedIn: 'root'
})

export class ReturnUser {

  user: any = {}

  constructor(
    public nativeStorage: NativeStorage,
  ) {
  }

  checkPlatform() {

    if (isPlatform("desktop")) {
      this.user = window.localStorage.getItem('user');
      // console.log("Here in the user in return User", this.user);
      console.log("Here in the user in return User with parse", JSON.parse(this.user));
      return this.user;

      // if (this.user !== null) {
      //   return this.user
      // }
    }
    else {
      this.user = this.nativeStorage.getItem('user');
      if (this.user !== null) {
        return this.user;
      }
    }
  }


}
