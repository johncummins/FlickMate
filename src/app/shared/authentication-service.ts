import { Injectable, NgZone } from '@angular/core';
// import { auth } from 'firebase/app';
import firebase from 'firebase/app';
import { User } from './user';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { FacebookLogin, FacebookLoginResponse } from '@capacitor-community/facebook-login';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  user = null;
  token = null;
  userData: any;
  // userInfo = null;
  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public platfrom: Platform,
    public http: HttpClient
  ) {
    this.ngFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        let userItem = JSON.parse(localStorage.getItem('user'));
        console.log(
          'This is the local storage user data: ' +
          this.userData.uid +
          this.userData.photoURL +
          this.userData.displayName

        );
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  // Store user in localStorage
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  // ------------------  Manual  Sign IN -------------------------------------------


  // Login in with email/password
  SignIn(email, password) {
    // found potential soultion to emial verifiction not working 
    // const user = firebase.auth().currentUser;
    // user.reload().then(() => {
    //   console.log({ emailVerified: user.emailVerified })
    //   console.log({ emailVerified: this.userData.emailVerified })
    // })
    // window.location.reload()
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  // Register user with email/password
  RegisterUser(email, password) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  // Email verification when new user register
  SendVerificationMail() {
    return this.ngFireAuth.currentUser
      .then((u) => u.sendEmailVerification()) //currentuser depreicated with auth - found fix on stack overflow
      .then(() => {
        this.router.navigate(['verify-email']);
      });
  }

  // Recover password
  PasswordRecover(passwordResetEmail) {
    return this.ngFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert(
          'Password reset email has been sent, please check your inbox.'
        );
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && firebase.auth().currentUser.emailVerified !== false ? true : false;
  }

  // Returns true when user's email is verified
  get isEmailVerified(): boolean {
    return firebase.auth().currentUser.emailVerified !== false ? true : false;
    // return user.emailVerified !== false ? true : false;

  }

  // Sign-out
  SignOut() {
    // below is for tsting purposes only
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['registration']);
    });
  }


  // ------------------GOOGLE Sign IN -------------------------------------------

  async googleSignIn() {
    let googleUser = await Plugins.GoogleAuth.signIn(null) as any;
    // this.userInfo = googleUser;
    // console.log('my user: ', googleUser);
    // console.log('TOKEN -----------: ', this.userInfo.authentication.idToken);
    // firebase.auth.FacebookAuthProvider.credential
    const credential = firebase.auth.GoogleAuthProvider.credential(googleUser.authentication.idToken);
    return this.ngFireAuth.signInWithCredential(credential)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['tabs']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  googleSignOut() {
    Plugins.GoogleAuth.signOut()
  }

  // ------------------ Facebook Sign IN -------------------------------------------


  async fbLogin() {
    const FACEBOOK_PERMISSIONS = ['email', 'user_birthday', 'user_photos', 'user_gender', 'user_friends'];
    const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
    console.log("In Fb login function")

    // attach to firebase node  ----------------
    const credential = firebase.auth.FacebookAuthProvider.credential(result.accessToken.token);
    this.ngFireAuth.signInWithCredential(credential)
      .then((result) => {
        console.log("This is inside the crediantial part-----------")
        this.ngZone.run(() => {
          this.router.navigate(['tabs']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });


    if (result.accessToken) {
      // Login successful.
      console.log(`Facebook access token is ${result.accessToken.token}`);
    }

    if (result.accessToken && result.accessToken.userId) {
      this.token = result.accessToken;
      this.loadFacebookData();
    } else if (result.accessToken && !result.accessToken.userId) {
      // Web only gets the token but not the user ID
      // Directly call get token to retrieve it now
      this.getCurrentToken();
    } else {
      // Login failed
    }
  }

  async getCurrentToken() {
    const result = await FacebookLogin.getCurrentAccessToken();

    if (result.accessToken) {
      this.token = result.accessToken;
      this.loadFacebookData();
    } else {
      // Not logged in.
    }
  }

  async loadFacebookData() {
    const url = `https://graph.facebook.com/${this.token.userId}?fields=id,name,picture.width(720),birthday,email&access_token=${this.token.token}`;
    this.http.get(url).subscribe(res => {
      this.user = res;
      console.log("THis is the user ID: " + this.token.userId)
      console.log("THis is the user Token: " + this.token.token)
    });
  }

  async fbSignOut() {
    await FacebookLogin.logout();
    this.user = null;
    this.token = null;
  }
}
