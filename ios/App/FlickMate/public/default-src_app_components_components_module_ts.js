(self["webpackChunkFlickMate1_0"] = self["webpackChunkFlickMate1_0"] || []).push([["default-src_app_components_components_module_ts"],{

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _user_profile_card_user_profile_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-profile-card/user-profile-card.component */ 2519);
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile/user-profile.component */ 6584);
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chat.component */ 3203);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _recommend_user_card_recommend_user_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recommend-user-card/recommend-user-card.component */ 7064);









let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_user_profile_card_user_profile_card_component__WEBPACK_IMPORTED_MODULE_0__.UserProfileCardComponent, _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__.UserProfileComponent, _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__.ChatComponent, _recommend_user_card_recommend_user_card_component__WEBPACK_IMPORTED_MODULE_3__.RecommendUserCardComponent],
        exports: [_user_profile_card_user_profile_card_component__WEBPACK_IMPORTED_MODULE_0__.UserProfileCardComponent, _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__.UserProfileComponent, _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__.ChatComponent, _recommend_user_card_recommend_user_card_component__WEBPACK_IMPORTED_MODULE_3__.RecommendUserCardComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule]
    })
], ComponentsModule);



/***/ }),

/***/ 7064:
/*!*********************************************************************************!*\
  !*** ./src/app/components/recommend-user-card/recommend-user-card.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecommendUserCardComponent": () => (/* binding */ RecommendUserCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_recommend_user_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./recommend-user-card.component.html */ 8479);
/* harmony import */ var _recommend_user_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recommend-user-card.component.scss */ 8308);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/chat.service */ 9014);





let RecommendUserCardComponent = class RecommendUserCardComponent {
    constructor(chatService) {
        this.chatService = chatService;
        this.isSent = false;
    }
    ngOnInit() { }
    sendRecommendation(recipientUid) {
        this.isSent = true;
        let chatID;
        let chatID$ = this.chatService.getChatID(recipientUid);
        //Subsribing to the chatID observable to check if chat exists with this user already
        chatID$.subscribe(event => {
            chatID = event;
            if (chatID.length > 0) {
                //send message using this chat ID
                this.chatService.sendMessage(chatID[0], this.movieId, this.moviePoster, this.selectedRating, this.inputtedMessage);
            }
            else if (chatID.length == 0) {
                // create new chat
                let newChatPromise = this.chatService.create(recipientUid);
                newChatPromise.then((newChatId) => {
                    this.chatService.sendMessage(newChatId, this.movieId, this.moviePoster, this.selectedRating, this.inputtedMessage);
                });
            }
            else if (chatID == undefined) {
                console.log("error, ID udefined");
            }
        });
    }
};
RecommendUserCardComponent.ctorParameters = () => [
    { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__.ChatService }
];
RecommendUserCardComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    movieId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    moviePoster: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    selectedRating: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    inputtedMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
RecommendUserCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-recommend-user-card',
        template: _raw_loader_recommend_user_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_recommend_user_card_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RecommendUserCardComponent);



/***/ }),

/***/ 2519:
/*!*****************************************************************************!*\
  !*** ./src/app/components/user-profile-card/user-profile-card.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileCardComponent": () => (/* binding */ UserProfileCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_user_profile_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-profile-card.component.html */ 772);
/* harmony import */ var _user_profile_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile-card.component.scss */ 7910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_follow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/follow.service */ 1854);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 7556);







let UserProfileCardComponent = class UserProfileCardComponent {
    constructor(authService, followService, router, auth) {
        this.authService = authService;
        this.followService = followService;
        this.router = router;
        this.auth = auth;
    }
    ngOnChanges() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var userId;
            userId = this.user.uid;
            this.currentUser = yield this.auth.getUser();
            const currentUserId = this.currentUser.uid;
            if (this.user.uid == null) {
                console.log("user ID is null", userId);
            }
            else {
                console.log("user ID is not null", userId);
            }
            // checks if the currently logged in user is following this.user
            this.following = this.followService.isFollowing(currentUserId).valueChanges()
                .subscribe(following => {
                console.log("Inside the isfollwing fucntions", following);
                this.isFollowing = following[`${userId}`];
                console.log("Inside ngChanges", currentUserId, "is following", userId, "=", this.isFollowing);
            });
        });
    }
    toggleFollow() {
        const userId = this.user.uid;
        const currentUserId = this.currentUser.uid;
        console.log("Inside toggle follow", currentUserId, "is following", userId, "=", this.isFollowing);
        if (this.isFollowing) {
            this.followService.unfollow(currentUserId, userId);
        }
        else {
            this.followService.follow(currentUserId, userId);
        }
    }
    viewUser(clickedUser) {
        // console.log("View user function, ", clickedUser)
        let navigationExtras = {
            queryParams: {
                state: JSON.stringify(clickedUser)
            }
        };
        // this.router.navigate(['/connections/profile-page', clickedUser.uid]);
        this.router.navigate(['/connections/profile-page'], navigationExtras);
    }
    ngOnDestroy() {
        this.following.unsubscribe();
    }
};
UserProfileCardComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: src_app_services_follow_service__WEBPACK_IMPORTED_MODULE_2__.FollowService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
UserProfileCardComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
UserProfileCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-user-profile-card',
        template: _raw_loader_user_profile_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_profile_card_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserProfileCardComponent);



/***/ }),

/***/ 6584:
/*!*******************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileComponent": () => (/* binding */ UserProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-profile.component.html */ 9258);
/* harmony import */ var _user_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile.component.scss */ 9178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var src_app_services_follow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/follow.service */ 1854);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ 7715);
/* harmony import */ var src_app_services_read_movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/read-movie.service */ 2399);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);










// import { NativeStorage } from '@ionic-native/native-storage/ngx';
// import { Tab2Page } from '../../tab2/tab2.page'
let UserProfileComponent = class UserProfileComponent {
    constructor(profile, readmovieservice, followService, router, auth) {
        this.profile = profile;
        this.readmovieservice = readmovieservice;
        this.followService = followService;
        this.router = router;
        this.auth = auth;
        this.topMovieArr = [];
        this.movieDetails = {};
        this.movieTemp = {};
        this.catMovieID = [];
        // catMovieTitles = [];
        this.posterUrl = 'https://www.themoviedb.org/t/p/w342';
        this.segmentCategory = 'top10';
        this.profileContent = {
            top10: [],
            watchlist: [],
            ratings: [],
            lists: []
        };
    }
    ngOnInit() {
        this.profileID = this.inputtedUser.uid;
        if (this.profileID !== undefined) {
            this.getCategory();
        }
        else {
            () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                const { uid } = yield this.auth.getUser();
                this.profileID = uid;
            });
            // this.nativeStorage.getItem('user')
            //   .then(
            //     loggedInUserItem => {
            //       this.profileID = loggedInUserItem.uid;
            //       console.log("This is the current user data in ngonit: ", this.profileID)
            //       this.getCategory();
            //     }
            //   );
        }
    }
    getCategory() {
        this.checkSegment();
        this.profile.getProfileContent(this.profileID, this.segmentCategory).valueChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(res => {
            console.log("This is the res from the getProfileContent", res, "| The user is", this.profileID);
            this.catMovieID = res.items;
            console.log("This is the catMovieID********", this.catMovieID);
            let i = 0;
            this.catMovieID.map((a) => this.getMovieDetials(a, i++));
            // console.log("Top movie titles ", this.topMovieTitles);
            // console.log("Here in side the getopmovies fucntion");
        });
    }
    getMovieDetials(inputtedID, position) {
        this.readmovieservice.getDetails(inputtedID).subscribe((result) => {
            this.movieTemp = result;
            this.movieDetails.title = this.movieTemp.title;
            console.log("THis is the movie and the inutted posiiton", this.movieDetails.title, position);
            this.movieDetails.posterPath = this.posterUrl + this.movieTemp.poster_path;
            if (this.segmentCategory == 'top10' && this.profileContent.top10.length < this.catMovieID.length) {
                this.profileContent.top10.push({ title: this.movieDetails.title, poster: this.movieDetails.posterPath, ID: inputtedID });
                // this.profileContent.top10.splice(position, 1, { title: this.movieDetails.title, poster: this.movieDetails.posterPath, ID: inputtedID });
            }
            else if (this.segmentCategory == 'watchlist' && this.profileContent.watchlist.length < this.catMovieID.length) {
                this.profileContent.watchlist.push({ title: this.movieDetails.title, poster: this.movieDetails.posterPath, ID: inputtedID });
                console.log('This is the profile contentArray: ', this.profileContent);
            }
            else if (this.segmentCategory == 'ratings' && this.profileContent.watchlist.length < this.catMovieID.length) {
                this.profileContent.ratings.push({ title: this.movieDetails.title, poster: this.movieDetails.posterPath, ID: inputtedID });
            }
            else if (this.segmentCategory == 'lists' && this.profileContent.watchlist.length < this.catMovieID.length) {
                this.profileContent.lists.push({ title: this.movieDetails.title, poster: this.movieDetails.posterPath, ID: inputtedID });
            }
        }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Heres the error: ", err.message);
        }));
    }
    checkSegment() {
        this.showTop10 = false;
        this.showWatchlist = false;
        this.showRatings = false;
        this.showLists = false;
        if (this.segmentCategory == 'top10') {
            this.showTop10 = true;
        }
        else if (this.segmentCategory == 'watchlist') {
            this.showWatchlist = true;
        }
        else if (this.segmentCategory == 'ratings') {
            this.showRatings = true;
        }
        else if (this.segmentCategory == 'lists') {
            this.showLists = true;
        }
    }
    viewMovie(movieID) {
        // Create Navigation Extras object to pass to movie page
        // This is passed into movie page from tab2.page.html
        let navigationExtras = {
            state: { movieID },
        };
        this.router.navigate(['tabs/tab4/movie-page'], navigationExtras);
    }
};
UserProfileComponent.ctorParameters = () => [
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService },
    { type: src_app_services_read_movie_service__WEBPACK_IMPORTED_MODULE_4__.ReadMovieService },
    { type: src_app_services_follow_service__WEBPACK_IMPORTED_MODULE_2__.FollowService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService }
];
UserProfileComponent.propDecorators = {
    inputtedUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
UserProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-user-profile',
        template: _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserProfileComponent);



/***/ }),

/***/ 1854:
/*!********************************************!*\
  !*** ./src/app/services/follow.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowService": () => (/* binding */ FollowService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 2329);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 7556);





let FollowService = class FollowService {
    constructor(afs, auth) {
        this.afs = afs;
        this.auth = auth;
    }
    getUsers() {
        // Used to build the follower count
        return this.afs.collection(`users/`);
        // return this.afStore.collection(`users/`).doc(`${userToSearch}`);
    }
    getFollowers(userId) {
        // Used to build the follower count
        return this.afs.collection(`followers/`).doc(`${userId}`);
    }
    getFollowing(userId) {
        // Used to build the following count
        return this.afs.collection(`following/`).doc(`${userId}`);
    }
    getUserList(inUserListArr) {
        return this.afs.collection('users').get().toPromise()
            .then((collections) => {
            let userList = [];
            collections.forEach((doc) => {
                for (let index = 0; index < inUserListArr.length; index++) {
                    if (doc.id == inUserListArr[index]) {
                        userList.push({ id: doc.id, data: doc.data() });
                    }
                }
            });
            return userList;
        });
        // return this.afs
        //   .collection('users', ref => ref.where('uid', '==', tempUser))
        //   .snapshotChanges()
        //   .pipe(
        //     map(actions => {
        //       return actions.map(a => {
        //         const data: Object = a.payload.doc.data();
        //         const id = a.payload.doc.id;
        //         return { id, ...data };
        //       });
        //     })
        //   );
    }
    isFollowing(followerId) {
        // Used to see if UserFoo if following UserBar
        return this.afs.collection(`following/`).doc(`${followerId}`);
    }
    follow(followerId, followedId) {
        // if the follower id does not exist here then use set, otherwise use update
        const followerRef = this.afs.doc(`followers/${followedId}`);
        const followingRef = this.afs.doc(`following/${followerId}`);
        followerRef.get().toPromise()
            .then(docSnapshot => {
            if (docSnapshot.exists && followerId == undefined)
                console.log("Error: cannot add follower, The user is not defined (not logged in)");
            else if (docSnapshot.exists)
                followerRef.update({ [followerId]: true });
            else
                followerRef.set({ [followerId]: true });
        });
        followingRef.get().toPromise()
            .then(docSnapshot => {
            if (docSnapshot.exists && followerId == undefined)
                console.log("Error: cannot add following, The user is not defined (not logged in)");
            else if (docSnapshot.exists)
                followingRef.update({ [followedId]: true });
            else
                followingRef.set({ [followedId]: true });
        });
    }
    unfollow(followerId, followedId) {
        this.afs.doc(`followers/${followedId}`).update({ [followerId]: firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.firestore.FieldValue.delete() });
        this.afs.doc(`following/${followerId}`).update({ [followedId]: firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.firestore.FieldValue.delete() });
        // this.afStore.doc(`following/${followedId}`).update({ [followerId]: null })
        // this.afStore.doc(`following/${followerId}`).update({ [followedId]: null })
    }
};
FollowService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService }
];
FollowService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], FollowService);



/***/ }),

/***/ 7715:
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileService": () => (/* binding */ ProfileService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);



let ProfileService = class ProfileService {
    constructor(afStore) {
        this.afStore = afStore;
    }
    getProfileContent(userId, category) {
        // Used to build the follower count
        let top10Ref = this.afStore.collection(`users/`).doc(`${userId}`).collection('profileContent').doc(`${category}`);
        return top10Ref;
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.AngularFirestore }
];
ProfileService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ProfileService);



/***/ }),

/***/ 2399:
/*!************************************************!*\
  !*** ./src/app/services/read-movie.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadMovieService": () => (/* binding */ ReadMovieService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/config */ 3835);




let ReadMovieService = class ReadMovieService {
    constructor(http) {
        this.http = http;
        // getting the api key from the config varibale in the confg.js file
        this.tmdbApiKey = _src_config__WEBPACK_IMPORTED_MODULE_0__.config.TMDb_API_KEY;
        // https://api.themoviedb.org/3/movie/770?api_key=[tmdb-apikey]&language=en-US
        this.baseUrl = 'https://api.themoviedb.org/3/movie/';
        this.endUrl = '?api_key=' + this.tmdbApiKey + '&language=en-US';
    }
    getPopular() {
        return this.http.get(this.baseUrl + 'popular' + this.endUrl + '&page=1&region=IE');
    }
    getTopRated() {
        return this.http.get(this.baseUrl + 'top_rated' + this.endUrl + '&page=1&region=IE');
    }
    getTrendingToday() {
        return this.http.get('https://api.themoviedb.org/3/trending/movie/day?api_key=' +
            this.tmdbApiKey +
            '&region=IE');
    }
    getDetails(movieid) {
        // let movieidString = JSON.stringify(movieid);
        // JSON.stringify;
        // console.log('This is the movie ID in the searvice fucntion' + movieid);
        // console.log(
        //   'This is the movie ID in the searvice fucntion (string)' + movieidString
        // );
        return this.http.get(this.baseUrl +
            movieid +
            this.endUrl +
            '&append_to_response=images,release_dates');
    }
    getCredits(movieid) {
        return this.http.get(this.baseUrl + movieid + '/credits' + this.endUrl);
    }
    getWatchProviders(movieid) {
        return this.http.get(this.baseUrl + movieid + '/watch/providers?api_key=' + this.tmdbApiKey);
    }
    getVideos(movieid) {
        return this.http.get(this.baseUrl + movieid + '/videos' + this.endUrl);
    }
};
ReadMovieService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ReadMovieService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], ReadMovieService);



/***/ }),

/***/ 3835:
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
const config = {
    TMDb_API_KEY: 'a69ae288e13db0638a2dac2c0c1ddcee',
    youTube_API_KEY: 'AIzaSyAtp9ZssZucZSfN6EfYWLiGDbp3ZTK8cc8',
    OMDb_API_KEY: '9a2e7f49'
};


/***/ }),

/***/ 8308:
/*!***********************************************************************************!*\
  !*** ./src/app/components/recommend-user-card/recommend-user-card.component.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvbW1lbmQtdXNlci1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 7910:
/*!*******************************************************************************!*\
  !*** ./src/app/components/user-profile-card/user-profile-card.component.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".profile-card__row {\n  margin-bottom: 8px;\n}\n\n.profile-card__display-name__col {\n  margin: auto 0;\n}\n\n.profile-card__display-name__text {\n  margin: auto 0;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.profile-card__follow-button__col {\n  margin: auto;\n  text-align: right;\n}\n\n.profile-card__follow-button {\n  width: 100%;\n  margin-right: 0;\n}\n\nion-button {\n  height: 32px;\n  width: 100px;\n}\n\nion-avatar {\n  width: 58px;\n  height: 58px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFHQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFBOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFGIiwiZmlsZSI6InVzZXItcHJvZmlsZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtY2FyZF9fcm93e1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5wcm9maWxlLWNhcmRfX2Rpc3BsYXktbmFtZV9fY29se1xuICBtYXJnaW46IGF1dG8gMDtcbn1cblxuLnByb2ZpbGUtY2FyZF9fZGlzcGxheS1uYW1lX190ZXh0e1xuICBtYXJnaW46IGF1dG8gMDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbn1cblxuLnByb2ZpbGUtY2FyZF9fZm9sbG93LWJ1dHRvbl9fY29se1xubWFyZ2luOiBhdXRvO1xudGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5wcm9maWxlLWNhcmRfX2ZvbGxvdy1idXR0b257XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbmlvbi1idXR0b257XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG5pb24tYXZhdGFye1xuICB3aWR0aDogNThweDtcbiAgaGVpZ2h0OiA1OHB4O1xufVxuIl19 */");

/***/ }),

/***/ 9178:
/*!*********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("div {\n  width: 95%;\n  margin: 16px auto 16px auto;\n}\n\nion-item {\n  float: left;\n}\n\n.user-profile__card__number__col {\n  margin-top: auto;\n  margin-right: 16px;\n  margin-bottom: auto;\n  font-size: 22px;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  padding: auto auto;\n  color: var(--ion-color-primary, black);\n}\n\n.user-profile__card__movie-poster__col {\n  margin-right: 0;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n\n.user-profile__card__movie-poster {\n  width: 94px;\n}\n\n.user-profile__card__movie-title__col {\n  margin-top: auto;\n  margin-bottom: auto;\n  font-size: 22px;\n  padding-inline-start: 0;\n}\n\n.user-profile__card__movie-title__col ion-text {\n  color: var(--ion-text-color-main, black);\n  font-size: 18px;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQkE7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsV0FBQTtBQWhCRjs7QUFtQkE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBR0Esa0JBQUE7RUFDQSxzQ0FBQTtBQWxCRjs7QUFxQkE7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0FBbEJGOztBQXFCQTtFQUNFLFdBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQWxCRjs7QUFvQkE7RUFDRSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWpCRiIsImZpbGUiOiJ1c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tc2VnbWVudHtcbi8vICAgLy8gbWFyZ2luLXRvcDogMTZweDtcbi8vICAgLy8gcGFkZGluZzogMTBweDtcbi8vICAgd2lkdGg6IDk1JTtcbi8vICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4vLyAgIG1hcmdpbi1yaWdodDogYXV0bztcbi8vICAgbWFyZ2luLXRvcDogMTZweDtcbi8vICAgYm9yZGVyLXJhZGl1czogMzJweDtcbi8vIH1cblxuLy8gaW9uLXNlZ21lbnQtYnV0dG9ue1xuLy8gLS1ib3JkZXItcmFkaXVzOiAzMnB4O1xuLy8gcGFkZGluZzogNnB4O1xuLy8gZm9udC1zaXplOiAxZW07XG5cbi8vIH1cblxuZGl2e1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDE2cHggYXV0byAxNnB4IGF1dG87XG59XG5cbmlvbi1pdGVte1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnVzZXItcHJvZmlsZV9fY2FyZF9fbnVtYmVyX19jb2x7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuXG4gIC8vIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgcGFkZGluZzogYXV0byBhdXRvO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIGJsYWNrKTtcbn1cblxuLnVzZXItcHJvZmlsZV9fY2FyZF9fbW92aWUtcG9zdGVyX19jb2x7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLnVzZXItcHJvZmlsZV9fY2FyZF9fbW92aWUtcG9zdGVye1xuICB3aWR0aDogOTRweDtcbn1cblxuLnVzZXItcHJvZmlsZV9fY2FyZF9fbW92aWUtdGl0bGVfX2NvbHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbn1cbi51c2VyLXByb2ZpbGVfX2NhcmRfX21vdmllLXRpdGxlX19jb2wgaW9uLXRleHR7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvci1tYWluLCBibGFjayk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuIl19 */");

/***/ }),

/***/ 8479:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/recommend-user-card/recommend-user-card.component.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"profile\">\n  <ion-grid>\n    <ion-row class=\"profile-card__row\">\n      <!-- <ion-col size=\"2\" (click)=\"viewUser(user)\"> -->\n      <ion-col size=\"2\">\n        <ion-avatar>\n          <ion-img [src]=\"user.photoURL\"></ion-img>\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"6\" class=\"profile-card__display-name__col\">\n        <h5 class=\"profile-card__display-name__text\">{{user.displayName}}</h5>\n      </ion-col>\n      <ion-col size class=\"profile-card__follow-button__col\">\n        <div *ngIf=\"isSent; then sentButton else sendButton\">\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n\n<ng-template #sendButton class=\"profile-card__follow-button\">\n  <ion-button (click)=\"sendRecommendation(user.uid)\" value=\"new\">Send</ion-button>\n</ng-template>\n\n<ng-template #sentButton class=\"profile-card__follow-button\">\n  <ion-button fill=\"outline\">Sent</ion-button>\n</ng-template>\n");

/***/ }),

/***/ 772:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-profile-card/user-profile-card.component.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"profile\">\n  <ion-grid>\n    <ion-row class=\"profile-card__row\">\n      <ion-col size=\"2\" (click)=\"viewUser(user)\">\n        <ion-avatar>\n          <ion-img [src]=\"user.photoURL\"></ion-img>\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"6\" (click)=\"viewUser(user)\" class=\"profile-card__display-name__col\">\n        <h5 class=\"profile-card__display-name__text\">{{user.displayName}}</h5>\n      </ion-col>\n      <ion-col size class=\"profile-card__follow-button__col\">\n        <div *ngIf=\"isFollowing; then unfollowButton else followButton\">\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n\n<ng-template #followButton class=\"profile-card__follow-button\">\n  <ion-button (click)=\"toggleFollow()\" value=\"new\">Follow</ion-button>\n</ng-template>\n\n<ng-template #unfollowButton class=\"profile-card__follow-button\">\n  <ion-button fill=\"outline\" (click)=\"toggleFollow()\">Following</ion-button>\n</ng-template>\n");

/***/ }),

/***/ 9258:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-profile/user-profile.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-segment [(ngModel)]=\"segmentCategory\">\n  <ion-segment-button (click)=\"getCategory()\" value=\"top10\">\n    Top 10\n  </ion-segment-button>\n  <ion-segment-button (click)=\"getCategory()\" value=\"watchlist\">\n    Watchlist\n  </ion-segment-button>\n  <ion-segment-button (click)=\"getCategory()\" value=\"ratings\">\n    Ratings\n  </ion-segment-button>\n  <ion-segment-button (click)=\"getCategory()\" value=\"lists\">\n    Lists\n  </ion-segment-button>\n</ion-segment>\n\n<!-- <ion-card> -->\n<ion-card-content *ngIf=\"showTop10\">\n  <ion-item *ngFor=\"let movie of profileContent.top10; let i = index\" class=\"ion-align-items-end\" lines=\"none\">\n    <ion-grid>\n      <ion-row (click)=\"viewMovie(movie.ID)\" class=\"user-profile__card__row\">\n        <ion-col class=\"user-profile__card__number__col\"><strong>{{i+1}}</strong></ion-col>\n        <ion-col class=\"user-profile__card__movie-poster__col\">\n          <ion-img class=\"user-profile__card__movie-poster\" [src]=\"movie.poster\"></ion-img>\n        </ion-col>\n        <ion-col class=\"user-profile__card__movie-title__col\">\n          <!-- <ion-title>Hey</ion-title> -->\n          <!-- <ion-card-title class=\"ion-margin-bottom\"></ion-card-title> -->\n          <ion-text>{{movie.title}}</ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n</ion-card-content>\n<ion-card-content *ngIf=\"showWatchlist\">\n  <ion-list *ngFor=\"let movie of profileContent.watchlist; let i = index\">\n    <ion-grid>\n      <ion-row (click)=\"viewMovie(movie.ID)\" class=\"user-profile__card__row\">\n        <ion-col size=\"3\">\n          <ion-img [src]=\"movie.poster\"> </ion-img>\n        </ion-col>\n        <ion-col size=\"9\" class=\"user-profile__card__movie-title__col\">\n          <h2 class=\"ion-margin-bottom\">{{movie.title}}</h2>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-card-content>\n<ion-card-content *ngIf=\"showRatings\">\n  <ion-list *ngFor=\"let movie of profileContent.ratings; let i = index\">\n    <ion-grid>\n      <ion-row (click)=\"viewMovie(movie.ID)\" class=\"user-profile__card__row\">\n        <ion-col size=\"3\">\n          <ion-img [src]=\"movie.poster\"> </ion-img>\n        </ion-col>\n        <ion-col size=\"9\" class=\"user-profile__card__movie-title__col\">\n          <h2 class=\"ion-margin-bottom\">{{movie.title}}</h2>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-card-content>\n<ion-card-content *ngIf=\"showLists\">\n  <ion-list *ngFor=\"let movie of profileContent.lists; let i = index\">\n    <ion-grid>\n      <ion-row (click)=\"viewMovie(movie.ID)\" class=\"user-profile__card__row\">\n        <ion-col size=\"3\">\n          <ion-img [src]=\"movie.poster\"> </ion-img>\n        </ion-col>\n        <ion-col size=\"9\" class=\"user-profile__card__movie-title__col\">\n          <h2 class=\"ion-margin-bottom\">{{movie.title}}</h2>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-card-content>\n<!-- </ion-card> -->\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_components_module_ts.js.map