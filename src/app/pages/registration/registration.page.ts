import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthenticationService } from '../../shared/authentication-service';
import { AuthService } from '../../services/auth.service';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';

import { FacebookLogin, FacebookLoginResponse } from '@capacitor-community/facebook-login';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ManualSignUpModalPage } from '../manual-sign-up-modal/manual-sign-up-modal.page'



@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  // userInfo = null;
  user = null;
  token = null;
  currentUser;


  constructor(
    public authService: AuthService,
    public router: Router,
    public http: HttpClient,
    public modalCtrl: ModalController,

  ) { }

  async ngOnInit() {
    this.currentUser = await this.authService.getUser();

    if (this.currentUser) {
      console.log("This is the constuctor of the regisation page, user is present: ", this.currentUser);
      this.router.navigate(['tabs']);
    } else {
      return false;
    }
  }

  async openSignUp() {
    const modal = await this.modalCtrl.create({
      component: ManualSignUpModalPage
    });
    return await modal.present();
  }

  openLoginPage() {
    this.router.navigate(['login']);
  }
}
