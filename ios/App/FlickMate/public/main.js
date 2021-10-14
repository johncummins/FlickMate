(self["webpackChunkFlickMate1_0"] = self["webpackChunkFlickMate1_0"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/chat/chat.component */ 3203);




const routes = [
    {
        path: '',
        // redirectTo: '/registration',
        redirectTo: 'tabs',
        pathMatch: 'full',
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then((m) => m.TabsPageModule),
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then((m) => m.LoginPageModule),
    },
    {
        path: 'verify-email',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_verify-email_verify-email_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/verify-email/verify-email.module */ 8736)).then((m) => m.VerifyEmailPageModule),
    },
    {
        path: 'registration',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_registration_registration_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/registration/registration.module */ 15)).then((m) => m.RegistrationPageModule),
    },
    {
        path: 'connections',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_connections_connections_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/connections/connections.module */ 4063)).then(m => m.ConnectionsPageModule)
    },
    {
        path: 'profile-page/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-node_modules_lodash_lodash_js"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile-page/profile-page.module */ 9935)).then(m => m.ProfilePagePageModule)
    },
    {
        path: 'chats/:id', component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_0__.ChatComponent
    },
    {
        path: 'recommend-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_recommend-modal_recommend-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/recommend-modal/recommend-modal.module */ 7659)).then(m => m.RecommendModalPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AppComponent = class AppComponent {
    // userId = "777";
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire */ 57);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ 9743);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/database */ 4134);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _pages_registration_registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/registration/registration.page */ 8010);
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ 3885);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);














// import { ReadMovieService } from './services/read-movie.service';



let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_fire__WEBPACK_IMPORTED_MODULE_10__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuthModule,
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__.AngularFireDatabaseModule,
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__.AngularFirestoreModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule
        ],
        providers: [
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__.AngularFirestoreModule,
            _pages_registration_registration_page__WEBPACK_IMPORTED_MODULE_3__.RegistrationPage,
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeStorage,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 3203:
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatComponent": () => (/* binding */ ChatComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chat.component.html */ 4220);
/* harmony import */ var _chat_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.component.scss */ 296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chat.service */ 9014);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 7556);






// import { AuthenticationService } from '../../shared/authentication-service';

let ChatComponent = class ChatComponent {
    constructor(cs, auth, route) {
        this.cs = cs;
        this.auth = auth;
        this.route = route;
    }
    ngOnInit() {
        const chatId = this.route.snapshot.paramMap.get('id');
        const source = this.cs.get(chatId);
        this.chat$ = this.cs.joinUsers(source);
        this.scrollBottom();
    }
    submit(chatId) {
        if (!this.newMsg) {
            return alert('you need to enter something');
        }
        this.cs.sendMessage(chatId, this.newMsg, null, null, null);
        this.newMsg = '';
        this.scrollBottom();
    }
    trackByCreated(i, msg) {
        return msg.createdAt;
    }
    scrollBottom() {
        setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 500);
    }
};
ChatComponent.ctorParameters = () => [
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__.ChatService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
ChatComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-chat',
        template: _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chat_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChatComponent);



/***/ }),

/***/ 8010:
/*!*********************************************************!*\
  !*** ./src/app/pages/registration/registration.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationPage": () => (/* binding */ RegistrationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registration.page.html */ 1279);
/* harmony import */ var _registration_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.page.scss */ 5563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ 1543);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);





// import { AuthenticationService } from '../../shared/authentication-service';



let RegistrationPage = class RegistrationPage {
    constructor(authService, router, http) {
        this.authService = authService;
        this.router = router;
        this.http = http;
        // userInfo = null;
        this.user = null;
        this.token = null;
    }
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
};
RegistrationPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient }
];
RegistrationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-registration',
        template: _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registration_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistrationPage);



/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 2329);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ 9743);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8049);
/* harmony import */ var _capacitor_community_facebook_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor-community/facebook-login */ 4185);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ 1543);




// import { auth } from 'firebase/app';








let AuthService = class AuthService {
    constructor(afAuth, afs, router, ngZone, http) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.ngZone = ngZone;
        this.http = http;
        this.user = null;
        this.token = null;
        this.user$ = this.afAuth.authState.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(user => {
            if (user) {
                return this.afs.doc(`users/${user.uid}`).valueChanges();
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
            }
        }));
    }
    getUser() {
        console.log("Here in the getuser auth servcie", this.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.first)()).toPromise());
        return this.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.first)()).toPromise();
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
        const userRef = this.afs.doc(`users/${user.uid}`);
        const userData = {
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
        return this.afAuth.signInWithEmailAndPassword(email, password).then((result) => {
            console.log("This is inside the crediantial part-----------");
            this.SetUserData(result.user);
        })
            .catch((error) => {
            window.alert(error);
        });
    }
    // Register user with email/password
    RegisterUser(email, password) {
        return this.afAuth.createUserWithEmailAndPassword(email, password);
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
            window.alert('Password reset email has been sent, please check your inbox.');
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
    get isEmailVerified() {
        return firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.auth().currentUser.emailVerified !== false ? true : false;
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
    googleSignIn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let googleUser = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Plugins.GoogleAuth.signIn(null);
            // this.userInfo = googleUser;
            console.log('my user: ', googleUser);
            // console.log('TOKEN -----------: ', this.userInfo.authentication.idToken);
            // firebase.auth.FacebookAuthProvider.credential
            const credential = firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.GoogleAuthProvider.credential(googleUser.authentication.idToken);
            return this.afAuth.signInWithCredential(credential)
                .then((result) => {
                this.ngZone.run(() => {
                    this.router.navigate(['tabs']);
                });
                this.SetUserData(result.user);
            })
                .catch((error) => {
                window.alert(error);
            });
        });
    }
    googleSignOut() {
        _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Plugins.GoogleAuth.signOut();
        this.router.navigate(['registration']);
    }
    // ------------------ Facebook Sign IN -------------------------------------------
    fbLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const FACEBOOK_PERMISSIONS = ['email', 'user_birthday', 'user_photos', 'user_gender', 'user_friends'];
            const result = yield _capacitor_community_facebook_login__WEBPACK_IMPORTED_MODULE_1__.FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
            console.log("In Fb login function");
            // attach to firebase node  ----------------
            const credential = firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.FacebookAuthProvider.credential(result.accessToken.token);
            this.afAuth.signInWithCredential(credential)
                .then((result) => {
                console.log("This is inside the crediantial part-----------");
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
            }
            else if (result.accessToken && !result.accessToken.userId) {
                // Web only gets the token but not the user ID
                // Directly call get token to retrieve it now
                this.getCurrentToken();
            }
            else {
                // Login failed
            }
        });
    }
    getCurrentToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const result = yield _capacitor_community_facebook_login__WEBPACK_IMPORTED_MODULE_1__.FacebookLogin.getCurrentAccessToken();
            if (result.accessToken) {
                this.token = result.accessToken;
                this.loadFacebookData();
            }
            else {
                // Not logged in.
            }
        });
    }
    loadFacebookData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const url = `https://graph.facebook.com/${this.token.userId}?fields=id,name,picture.width(720),birthday,email&access_token=${this.token.token}`;
            this.http.get(url).subscribe(res => {
                this.user = res;
                console.log("this is the photo ", this.user.picture.data.url);
            });
        });
    }
    fbSignOut() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_community_facebook_login__WEBPACK_IMPORTED_MODULE_1__.FacebookLogin.logout();
            this.user = null;
            this.token = null;
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({ providedIn: 'root' })
], AuthService);



/***/ }),

/***/ 9014:
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatService": () => (/* binding */ ChatService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ 2329);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9112);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5917);








let ChatService = class ChatService {
    // currentUserID;
    constructor(afs, auth, router) {
        this.afs = afs;
        this.auth = auth;
        this.router = router;
    }
    get(chatId) {
        return this.afs
            .collection('chats')
            .doc(chatId)
            .snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(doc => {
            return Object.assign({ id: doc.payload.id }, doc.payload.data());
        }));
    }
    getUserChats() {
        return this.auth.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(user => {
            return this.afs
                .collection('chats', ref => ref.where('chatUsers', 'array-contains', user.uid))
                .snapshotChanges()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    console.log("THis is the id in the chat servce: ", id);
                    return Object.assign({ id }, data);
                });
            }));
        }));
    }
    /// still need to work on this ----------------------
    // getChatID(otherUser) {
    //   // let otherUser = "9krRAy1dxKZJTe4xOd6VvMGQWvj2"
    //   return this.auth.user$.pipe(
    //     switchMap(user => {
    //       return this.afs
    //         .collection('chats', ref => ref.where('chatUsers', 'array-contains', otherUser).where('uid', '==', user.uid))
    //         .snapshotChanges()
    //         .pipe(
    //           map(actions => {
    //             return actions.map(a => {
    //               // const data: Object = a.payload.doc.data();
    //               const id: string = a.payload.doc.id;
    //               return id;
    //             });
    //           })
    //         );
    //     })
    //   );
    // }
    getChatID(otherUser) {
        // let otherUser = "9krRAy1dxKZJTe4xOd6VvMGQWvj2"
        var chatId = [];
        return this.auth.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(user => {
            return this.afs
                .collection('chats', ref => ref.where('chatUsers', 'array-contains', otherUser).where('uid', '==', user.uid))
                .get().toPromise().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // console.log(`${doc.id} => ${doc.data()}`);
                    // console.log("Normla doc . id", doc.id)
                    chatId.push(doc.id);
                });
                return chatId;
            });
        }));
    }
    create(sendToUid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const { uid } = yield this.auth.getUser();
            const otherUser = sendToUid;
            // const { uid } = await this.currentUserID
            const data = {
                uid,
                createdAt: Date.now(),
                count: 0,
                messages: [],
                chatUsers: [otherUser, uid]
            };
            const docRef = yield this.afs.collection('chats').add(data);
            // return this.router.navigate(['chats', docRef.id]);
            return docRef.id;
        });
    }
    sendMessage(chatId, movieId, moviePoster, selectedRating, content) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const { uid } = yield this.auth.getUser();
            const data = {
                uid,
                content,
                movieid: movieId,
                moviePoster: moviePoster,
                selectedRating: selectedRating,
                createdAt: Date.now()
            };
            if (uid) {
                const ref = this.afs.collection('chats').doc(chatId);
                return ref.update({
                    messages: firebase_app__WEBPACK_IMPORTED_MODULE_1__.default.firestore.FieldValue.arrayUnion(data)
                });
            }
        });
    }
    deleteMessage(chat, msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const { uid } = yield this.auth.getUser();
            const ref = this.afs.collection('chats').doc(chat.id);
            console.log(msg);
            if (chat.uid === uid || msg.uid === uid) {
                // Allowed to delete
                delete msg.user;
                return ref.update({
                    messages: firebase_app__WEBPACK_IMPORTED_MODULE_1__.default.firestore.FieldValue.arrayRemove(msg)
                });
            }
        });
    }
    joinUsers(chat$) {
        let chat;
        const joinKeys = {};
        return chat$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(c => {
            // Unique User IDs
            chat = c;
            const uids = Array.from(new Set(c.messages.map(v => v.uid)));
            // Firestore User Doc Reads
            const userDocs = uids.map(u => this.afs.doc(`users/${u}`).valueChanges());
            return userDocs.length ? (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)(userDocs) : (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(arr => {
            arr.forEach(v => (joinKeys[v.uid] = v));
            chat.messages = chat.messages.map(v => {
                return Object.assign(Object.assign({}, v), { user: joinKeys[v.uid] });
            });
            return chat;
        }));
    }
};
ChatService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
ChatService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root'
    })
], ChatService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyAtp9ZssZucZSfN6EfYWLiGDbp3ZTK8cc8",
        authDomain: "flickmate.firebaseapp.com",
        databaseURL: "https://flickmate-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "flickmate",
        storageBucket: "flickmate.appspot.com",
        messagingSenderId: "24424440866",
        appId: "1:24424440866:web:4500bf8fe39f93688d167b",
        measurementId: "G-VEZNHSQ2TB"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3519,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		2239,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 296:
/*!*****************************************************!*\
  !*** ./src/app/components/chat/chat.component.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".chat {\n  padding: 10px;\n  margin: 70px auto 100px;\n  width: 100%;\n}\n\n.msg {\n  display: flex;\n  align-items: flex-start;\n  margin-left: auto;\n  order: 2;\n  text-align: left;\n  border: 1px solid blue;\n  padding: 10px;\n  width: 90vw;\n  font-size: 1.3em;\n  animation-delay: 0ms;\n  animation-duration: 600ms;\n}\n\n.msg .user {\n  margin-right: 10px;\n  min-width: 100px;\n  max-width: 200px;\n  border: 1px solid red;\n}\n\n.chat__movie-container {\n  background-color: #1d6adc;\n  background: linear-gradient(#1d6adc, black);\n  width: 200px;\n  margin: 16px auto;\n  height: 300px;\n}\n\n.chat__movie-poster {\n  margin: 0 auto;\n}\n\n.form {\n  display: flex;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100px;\n  padding: 20px 10vw;\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid cornflowerblue;\n}\n\n.top {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 70px;\n  padding: 20px 10vw;\n  background: rgba(255, 255, 255, 0.8);\n  z-index: 99;\n  border: 1px solid olivedrab;\n}\n\n.user-profile__image {\n  width: 78px;\n  height: 78px;\n  max-width: 78px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLDJDQUNBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQURGOztBQUtBO0VBQ0EsY0FBQTtBQUZBOztBQU1BO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSEYiLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiA3MHB4IGF1dG8gMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubXNnIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBvcmRlcjogMjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDkwdnc7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGFuaW1hdGlvbi1kZWxheTogMG1zO1xuICBhbmltYXRpb24tZHVyYXRpb246IDYwMG1zO1xuXG4gIC51c2VyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgfVxufVxuXG4uY2hhdF9fbW92aWUtY29udGFpbmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMxZDZhZGM7XG4gIGJhY2tncm91bmQ6XG4gIGxpbmVhci1ncmFkaWVudChyZ2IoMjksIDEwNiwgMjIwKSwgIHJnYmEoMCwgMCwgMCwgMSkpO1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogMTZweCBhdXRvO1xuICBoZWlnaHQ6IDMwMHB4O1xuXG59XG5cbi5jaGF0X19tb3ZpZS1wb3N0ZXJ7XG5tYXJnaW46IDAgYXV0bztcbn1cblxuXG4uZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcGFkZGluZzogMjBweCAxMHZ3O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xufVxuXG4udG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmc6IDIwcHggMTB2dztcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICB6LWluZGV4OiA5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgb2xpdmVkcmFiO1xufVxuXG4udXNlci1wcm9maWxlX19pbWFnZXtcbiAgd2lkdGg6IDc4cHg7XG4gIGhlaWdodDogNzhweDtcbiAgbWF4LXdpZHRoOiA3OHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuIl19 */");

/***/ }),

/***/ 5563:
/*!***********************************************************!*\
  !*** ./src/app/pages/registration/registration.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".already-registered {\n  position: absolute;\n  bottom: 60px;\n  left: 20px;\n}\n\nion-button {\n  padding: 0;\n  height: 50px;\n}\n\n.manual-sign-up__text {\n  margin-top: 80px;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxyZWFkeS1yZWdpc3RlcmVkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA2MHB4O1xuICAgIGxlZnQ6IDIwcHg7XG59XG5cbmlvbi1idXR0b257XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLm1hbnVhbC1zaWduLXVwX190ZXh0e1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuIl19 */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 4220:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat/chat.component.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>The Chat</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"/tabs/tab3\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ng-container *ngIf=\"chat$ | async as chat\">\n\n    <div class=\"chat\">\n\n      <div class=\"msg\" *ngFor=\"let msg of chat.messages; trackBy: trackByCreated\">\n\n        <div class=\"user\">\n          <ion-img class=\"user-profile__image\" [src]=\"msg.user?.photoURL\"></ion-img>\n          <!-- <div>{{ msg.user?.displayName }}</div> -->\n        </div>\n        <p>{{ msg.content }}</p>\n        <p>{{ msg.movieId }}</p>\n        <div class=\"chat__movie-container\">\n          <img class=\"chat__movie-poster\" [src]=\"msg.moviePoster\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form\">\n      <ion-input [(ngModel)]=\"newMsg\" (keydown.enter)=\"submit(chat.id)\">\n      </ion-input>\n      <ion-button (click)=\"submit(chat.id)\">Send</ion-button>\n\n    </div>\n  </ng-container>\n</ion-content>\n");

/***/ }),

/***/ 1279:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons> -->\n    <ion-title>Welcome to FlickMate</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <ion-button color=\"danger\" expand=\"block\" (click)=\"authService.googleSignIn()\">Sign up with Google\n        <ion-icon slot=\"start\" name=\"logo-google\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-button color=\"primary\" expand=\"block\" (click)=\"authService.fbLogin()\">Sign up with Facebook\n        <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n\n  <div class=\"manual-sign-up\">\n    <ion-item lines=\"full\">\n      <h3 class=\"manual-sign-up__text\">Manual Sign Up</h3>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"text\" #email required></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" #password required></ion-input>\n    </ion-item>\n    <ion-row>\n      <ion-col>\n        <ion-button (click)=\"signUp(email, password)\">Sign Up</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class=\"already-registered\">\n    <ion-row> Already have an account? </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button (click)=\"openLoginPage()\" color=\"medium\">Login</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map