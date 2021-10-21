import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthenticationService } from '../../shared/authentication-service';
import { AuthService } from '../../services/auth.service';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';

import { FacebookLogin, FacebookLoginResponse } from '@capacitor-community/facebook-login';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  // userInfo = null;
  user = null;
  token = null;

  constructor(
    public authService: AuthService,
    public router: Router,
    public http: HttpClient
  ) { }

  ngOnInit() { }

  signUp(name, email, password) {
    console.log(email, password)
    this.authService
      .RegisterUser(name.value, email.value, password.value)
      .then((res) => {
        // Do something here
        console.log("Theres no error: ", res)

        this.authService.SendVerificationMail();
        this.router.navigate(['verify-email']);
      })
      .catch((error) => {
        console.log("Theres an error: ", error.code)
        window.alert(error.message);
        if (error.code == "auth/email-already-in-use") {
          this.router.navigate(['login']);

        }
      });
  }

  openLoginPage() {
    this.router.navigate(['login']);
  }
  // async googleSignup() {
  //   const googleUser = await Plugins.GoogleAuth.signIn(null) as any;
  //   console.log('my user: ', googleUser);
  //   this.userInfo = googleUser;

  // }

  // async fbLogin() {
  //   const FACEBOOK_PERMISSIONS = ['email', 'user_birthday', 'user_photos', 'user_gender'];
  //   const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
  //   console.log("In Fb login function")

  //   if (result.accessToken) {
  //     // Login successful.
  //     console.log(`Facebook access token is ${result.accessToken.token}`);
  //   }

  //   if (result.accessToken && result.accessToken.userId) {
  //     this.token = result.accessToken;
  //     this.loadUserData();
  //   } else if (result.accessToken && !result.accessToken.userId) {
  //     // Web only gets the token but not the user ID
  //     // Directly call get token to retrieve it now
  //     this.getCurrentToken();
  //   } else {
  //     // Login failed
  //   }
  // }

  // async getCurrentToken() {
  //   const result = await FacebookLogin.getCurrentAccessToken();

  //   if (result.accessToken) {
  //     this.token = result.accessToken;
  //     this.loadUserData();
  //   } else {
  //     // Not logged in.
  //   }
  // }

  // async loadUserData() {
  //   const url = `https://graph.facebook.com/${this.token.userId}?fields=id,name,picture.width(720),birthday,email&access_token=${this.token.token}`;
  //   this.http.get(url).subscribe(res => {
  //     this.user = res;
  //     console.log("THis is the user ID: " , this.token.userId)
  //     console.log("THis is the user Token: " ,this.token.token)
  //   });
  // }

  // async logout() {
  //   await FacebookLogin.logout();
  //   this.I = null;
  //   this.token = null;
  // }
}
