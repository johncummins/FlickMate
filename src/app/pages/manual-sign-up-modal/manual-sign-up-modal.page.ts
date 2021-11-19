import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-manual-sign-up-modal',
  templateUrl: './manual-sign-up-modal.page.html',
  styleUrls: ['./manual-sign-up-modal.page.scss'],
})
export class ManualSignUpModalPage implements OnInit {

  constructor(public authService: AuthService, public router: Router, private modalCtr: ModalController,

  ) { }

  ngOnInit() {

  }

  signUp(name, email, password) {
    console.log(email, password)
    this.authService
      .RegisterUser(name.value, email.value, password.value)
      .then((res) => {
        if (res == 0) {
          console.log("Theres an error: ", res);
        }
        else {
          console.log("Theres no error: ", res);
          this.authService.SendVerificationMail();
          this.close();
          this.router.navigate(['verify-email']);
        }
      })
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtr.dismiss(closeModal);
  }
}
