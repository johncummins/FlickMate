(self["webpackChunkFlickMate1_0"] = self["webpackChunkFlickMate1_0"] || []).push([["src_app_services_follow_service_ts-src_app_services_read-movie_service_ts"],{

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


/***/ })

}]);
//# sourceMappingURL=src_app_services_follow_service_ts-src_app_services_read-movie_service_ts.js.map