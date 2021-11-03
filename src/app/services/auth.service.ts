import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

// import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap, first, map } from 'rxjs/operators';
import { FacebookLogin, FacebookLoginResponse } from '@capacitor-community/facebook-login';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Plugins } from '@capacitor/core';
import '@codetrix-studio/capacitor-google-auth';


@Injectable({ providedIn: 'root' })
export class AuthService {

  user$: Observable<any>;
  user = null;
  token = null;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    public ngZone: NgZone,
    public http: HttpClient,


  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  getUser() {
    console.log("Here in the getuser auth servcie", this.user$.pipe(first()).toPromise())
    return this.user$.pipe(first()).toPromise();
  }

  /// --------- another google sign in (dont think it woorks on mobile )

  // googleSignIn() {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   return this.oAuthLogin(provider);
  // }

  // private async oAuthLogin(provider) {
  //   const credential = await this.afAuth.signInWithPopup(provider);
  //   return this.updateUserData(credential.user);
  // }

  // private updateUserData({ uid, email, displayName, photoURL }) {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${uid}`);

  //   const data = {
  //     uid,
  //     email,
  //     displayName,
  //     photoURL
  //   };

  //   return userRef.set(data, { merge: true });
  // }

  // async signOut() {
  //   await this.afAuth.signOut();
  //   return this.router.navigate(['/']);
  // }




  //  --------- Merge ------------

  // ------------------  Manual  Sign IN -------------------------------------------

  // Store user in firestore
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    if (user.photoURL == null) {
      this.user.photoURL = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
    }
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


  // Login in with email/password
  SignIn(email, password) {
    // found potential soultion to emial verifiction not working
    // const user = firebase.auth().currentUser;
    // user.reload().then(() => {
    //   console.log({ emailVerified: user.emailVerified })
    //   console.log({ emailVerified: this.userData.emailVerified })
    // })
    // window.location.reload()
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Register user with email/password
  RegisterUser(name, email, password) {

    return this.afAuth.createUserWithEmailAndPassword(email, password).then((result) => {
      const userData: User = {
        uid: result.user.uid,
        email: result.user.email,
        displayName: name,
        photoURL: result.user.photoURL,
        emailVerified: result.user.emailVerified,
      };
      console.log("This is inside the crediantial part-----------", userData);
      console.log("This is the display name from the result ----", result.user.displayName);

      this.SetUserData(userData);
    })
      .catch((error) => {
        // window.alert(error);
      });
  }

  // Email verification when new user register
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u) => u.sendEmailVerification()) //currentuser depreicated with auth - found fix on stack overflow
      .then(() => {
        this.router.navigate(['verify-email']);
      });
  }

  // Recover password
  PasswordRecover(passwordResetEmail) {
    return this.afAuth
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
  // get isLoggedIn(): boolean {
  //   const user = this.nativeStorage.getItem('user');
  //   return user !== null && firebase.auth().currentUser.emailVerified !== false ? true : false;
  // }

  // Returns true when user's email is verified
  get isEmailVerified(): boolean {
    return firebase.auth().currentUser.emailVerified !== false ? true : false;
    // return user.emailVerified !== false ? true : false;

  }

  // Sign-out
  SignOut() {
    // below is for tsting purposes only
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['registration']);
    });
  }


  // ------------------GOOGLE Sign IN -------------------------------------------

  async googleSignIn() {
    let googleUser = await Plugins.GoogleAuth.signIn(null) as any;
    // this.userInfo = googleUser;
    console.log('my user: ', googleUser);
    // console.log('TOKEN -----------: ', this.userInfo.authentication.idToken);
    // firebase.auth.FacebookAuthProvider.credential
    const credential = firebase.auth.GoogleAuthProvider.credential(googleUser.authentication.idToken);
    return this.afAuth.signInWithCredential(credential)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['tabs']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        // window.alert(error);
      });
  }

  googleSignOut() {
    Plugins.GoogleAuth.signOut();
    this.router.navigate(['registration']);
  }

  // ------------------ Facebook Sign IN -------------------------------------------


  async fbLogin() {
    const FACEBOOK_PERMISSIONS = ['email', 'user_birthday', 'user_photos', 'user_gender', 'user_friends'];
    const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
    console.log("In Fb login function")

    // attach to firebase node  ----------------
    const credential = firebase.auth.FacebookAuthProvider.credential(result.accessToken.token);
    this.afAuth.signInWithCredential(credential)
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
      console.log("this is the photo ", this.user.picture.data.url)
    });
  }

  async fbSignOut() {
    await FacebookLogin.logout();
    this.user = null;
    this.token = null;
  }
}
