import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthenticationService } from '../../shared/authentication-service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  tester: boolean = true;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() { }

  logIn(email, password) {
    this.authService
      .SignIn(email.value, password.value)
      .then((res) => {
        // WTACH OUT THIS IS ONLY SET UP FOR TESTING - NEED TO PUT THIS BACK
        // INTO THE IF STATEMENT - this.authService.isEmailVerified
        if (this.tester) {
          this.router.navigate(['tabs']);
        } else {
          window.alert('Email is not verified');
          return false;
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
