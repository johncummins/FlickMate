import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/authentication-service';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  // userInfo = null;

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() { }

  signUp(email, password) {
    this.authService
      .RegisterUser(email.value, password.value)
      .then((res) => {
        // Do something here
        this.authService.SendVerificationMail();
        this.router.navigate(['verify-email']);
      })
      .catch((error) => {
        window.alert(error.message);
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
}
