(self["webpackChunkFlickMate1_0"] = self["webpackChunkFlickMate1_0"] || []).push([["default-src_app_pages_movie-page_movie-page_module_ts"],{

/***/ 9079:
/*!***************************************************************!*\
  !*** ./src/app/pages/movie-page/movie-page-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoviePagePageRoutingModule": () => (/* binding */ MoviePagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _movie_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie-page.page */ 3690);




const routes = [
    {
        path: '',
        component: _movie_page_page__WEBPACK_IMPORTED_MODULE_0__.MoviePagePage
    }
];
let MoviePagePageRoutingModule = class MoviePagePageRoutingModule {
};
MoviePagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MoviePagePageRoutingModule);



/***/ }),

/***/ 9085:
/*!*******************************************************!*\
  !*** ./src/app/pages/movie-page/movie-page.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoviePagePageModule": () => (/* binding */ MoviePagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _movie_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie-page-routing.module */ 9079);
/* harmony import */ var _movie_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-page.page */ 3690);







let MoviePagePageModule = class MoviePagePageModule {
};
MoviePagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _movie_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.MoviePagePageRoutingModule
        ],
        declarations: [_movie_page_page__WEBPACK_IMPORTED_MODULE_1__.MoviePagePage]
    })
], MoviePagePageModule);



/***/ }),

/***/ 3690:
/*!*****************************************************!*\
  !*** ./src/app/pages/movie-page/movie-page.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoviePagePage": () => (/* binding */ MoviePagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_movie_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./movie-page.page.html */ 4299);
/* harmony import */ var _movie_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-page.page.scss */ 5035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_imdb_rating_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/imdb-rating.service */ 9945);
/* harmony import */ var src_app_services_read_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/read-movie.service */ 2399);
/* harmony import */ var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/review.service */ 9264);
/* harmony import */ var src_app_services_time_ago_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/time-ago.service */ 8215);
/* harmony import */ var src_app_services_youtube_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/youtube.service */ 2767);
/* harmony import */ var _review_modal_review_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../review-modal/review-modal.page */ 6875);
/* harmony import */ var _recommend_modal_recommend_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../recommend-modal/recommend-modal.page */ 1197);














let MoviePagePage = class MoviePagePage {
    constructor(route, router, readmovieservice, youtubeservice, reviewService, modalCtrl, afStore, timeAGo, imdbRatingService) {
        this.route = route;
        this.router = router;
        this.readmovieservice = readmovieservice;
        this.youtubeservice = youtubeservice;
        this.reviewService = reviewService;
        this.modalCtrl = modalCtrl;
        this.afStore = afStore;
        this.timeAGo = timeAGo;
        this.imdbRatingService = imdbRatingService;
        this.segmentModel = 'info';
        this.ishidden = false;
        //object to store the resutls of get details fucntion
        this.movieDetails = {};
        this.hideAvailabilityMessage = true;
        this.hideCastMessage = true;
        this.videoResults = {};
        this.movieTrailerDetails = {};
        this.movieTrailerThumb = {};
        this.providersFlatrateArr = {};
        this.movieTemp = {};
        // this variable sets the region for the watch providers fucntion
        this.region = 'IE';
        this.posterUrl = 'https://www.themoviedb.org/t/p/w342';
        this.backgroundUrl = 'https://www.themoviedb.org/t/p/w780';
        this.logoUrl = 'https://www.themoviedb.org/t/p/w92';
        this.profileUrl = 'https://www.themoviedb.org/t/p/w185';
        this.videoUrl = 'https://www.youtube.com/watch?v=';
        // console.log("This is the test", this.test);
        this.route.queryParams.subscribe((params) => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.movie = this.router.getCurrentNavigation().extras.state;
                console.log("MovieID here", this.movie.movieID);
                console.log(this.movie.title);
                this.movieDetails.movieID = this.movie.movieID;
            }
        }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log(err.message);
        }));
    }
    //changes the segment based on the value of segment button pressed
    segmentChanged(event) {
        console.log('Segment changed to', this.segmentModel);
        // if statement below hides and shows the twitter cards
        if (this.segmentModel == 'reviews') {
            let movieIDStr = JSON.stringify(this.movieDetails.movieID);
            // const userReviewRef = this.afStore.collection('posts').doc(movieIDStr).collection('userReviews').doc("o2Z2hETZHPUVuSRZtOG8B8xbtBd2")
            const userReviewRef = this.afStore.collection('posts').doc(movieIDStr).collection('userReviews');
            userReviewRef.get().toPromise().then((querySnapshot) => {
                const tempDoc = [];
                querySnapshot.forEach((doc) => {
                    console.log(doc.data().date.seconds);
                    this.dateTemp = doc.data().date.seconds;
                    this.reviewDateTime = new Date(this.dateTemp * 1000);
                    this.reviewHowLongAgo = this.timeAGo.timeAgo(this.reviewDateTime);
                    //push all data to the tempDoc array
                    tempDoc.push({ id: doc.id, data: doc.data(), reviewHowLongAgo: this.reviewHowLongAgo });
                    return this.returnedReview = tempDoc;
                });
            })
                .catch((error) => {
                console.log("Error getting documents: ", error);
            });
            this.ishidden = true;
        }
        else {
            this.ishidden = false;
        }
    }
    getDetails() {
        this.readmovieservice.getDetails(this.movieDetails.movieID).subscribe((result) => {
            this.movieTemp = result;
            this.movieDetails.imdbID = this.movieTemp.imdb_id;
            this.movieDetails.movieGenre1 = this.movieTemp.genres[0].name;
            this.movieDetails.movieGenre2 = this.movieTemp.genres[1].name;
            this.movieDetails.title = this.movieTemp.title;
            this.movieDetails.posterPath = this.posterUrl + this.movieTemp.poster_path;
            this.movieDetails.backdropPath = this.backgroundUrl + this.movieTemp.backdrop_path;
            this.movieDetails.releaseDate = this.movieTemp.release_date;
            this.movieDetails.overview = this.movieTemp.overview;
            this.movieDetails.runtime = this.timeConvert();
            this.getIMDbRating();
            console.log("THIS IS HTE TITLE ", this.movieDetails.title);
            console.log("THIS movie poster path ", this.movieDetails.posterPath);
        }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log(err.message);
        }));
    }
    getWatchProviders() {
        this.readmovieservice.getWatchProviders(this.movieDetails.movieID).subscribe((result) => {
            let providersRes = {};
            providersRes = result;
            if (
            //check its availabilty in ireland
            providersRes.results.hasOwnProperty('IE') &&
                //check its available for streaming
                providersRes.results[this.region].hasOwnProperty('flatrate')) {
                this.providersFlatrateArr = providersRes.results[this.region];
                console.log(providersRes.results.hasOwnProperty('IE'));
                // this.movieDetails.streamingProviders = providersFlatrateArr;
            }
            else {
                this.hideAvailabilityMessage = false;
            }
        }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log(err.message);
        }));
    }
    getCredits() {
        // this.noCastErrorMsg = '';
        let creditsRes = {};
        let castArrayTemp = [];
        this.readmovieservice.getCredits(this.movieDetails.movieID).subscribe((result) => {
            creditsRes = result;
            castArrayTemp = creditsRes.cast;
            if (castArrayTemp.length > 0) {
                this.movieDetails.castArray = castArrayTemp.slice(0, 16);
            }
            else {
                this.hideCastMessage = false;
                console.log('Sorry, there is no information regarding cast members of this movie');
            }
        }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log(err.message);
        }));
    }
    getVideos() {
        this.readmovieservice.getVideos(this.movieDetails.movieID).subscribe((result) => {
            this.videoResults = result;
            console.log(' this is the movie trailer ID: ', this.videoResults.results[0].key);
            this.getTrailer();
        }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log(err.message);
        }));
    }
    getTrailer() {
        this.youtubeservice.getTrailer(this.videoResults.results[0].key).subscribe((result) => {
            console.log('inside the movie page here ', result);
            this.movieTrailerDetails = result;
            this.movieTrailerThumb = this.movieTrailerDetails.items[0].snippet.thumbnails.medium.url;
        }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log(err.message);
        }));
    }
    getIMDbRating() {
        let movieRatingTemp;
        let imdbIdFinal = this.movieDetails.imdbID;
        this.imdbRatingService.getIMDbRatings(imdbIdFinal).subscribe((result) => {
            movieRatingTemp = result;
            if (movieRatingTemp.imdbRating !== "N/A") {
                this.movieDetails.imdbRating = movieRatingTemp.imdbRating;
            }
            else {
                this.movieDetails.imdbRating = "";
            }
        }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log(err.message);
        }));
    }
    timeConvert() {
        const t = this.movieTemp.runtime;
        var hours = (t / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        return rhours + "h " + rminutes + "m";
    }
    openReviewModal(componentType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Here is the inputted event ", componentType);
            let componentVar = null;
            if (componentType == "review") {
                componentVar = _review_modal_review_modal_page__WEBPACK_IMPORTED_MODULE_7__.ReviewModalPage;
            }
            else if (componentType == "recommend") {
                componentVar = _recommend_modal_recommend_modal_page__WEBPACK_IMPORTED_MODULE_8__.RecommendModalPage;
            }
            const modal = yield this.modalCtrl.create({
                component: componentVar,
                componentProps: {
                    'movieID': this.movieDetails.movieID,
                    'movieTitle': this.movieDetails.title,
                    'moviePoster': this.movieDetails.posterPath
                }
            });
            modal.onDidDismiss().then((modalDataResponse) => {
                if (modalDataResponse !== null) {
                    this.modalDataResponse = modalDataResponse.data;
                    console.log('Modal Sent Data : ', modalDataResponse.data);
                }
            });
            return yield modal.present();
        });
    }
    ngOnInit() {
        this.getDetails();
        this.getWatchProviders();
        this.getCredits();
        this.getVideos();
    }
    ngOnDestroy() {
        //
    }
};
MoviePagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_read_movie_service__WEBPACK_IMPORTED_MODULE_3__.ReadMovieService },
    { type: src_app_services_youtube_service__WEBPACK_IMPORTED_MODULE_6__.YoutubeService },
    { type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_4__.ReviewService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.AngularFirestore },
    { type: src_app_services_time_ago_service__WEBPACK_IMPORTED_MODULE_5__.TimeAgoService },
    { type: src_app_services_imdb_rating_service__WEBPACK_IMPORTED_MODULE_2__.IMDbRatingService }
];
MoviePagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-movie-page',
        template: _raw_loader_movie_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_movie_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MoviePagePage);



/***/ }),

/***/ 1197:
/*!***************************************************************!*\
  !*** ./src/app/pages/recommend-modal/recommend-modal.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecommendModalPage": () => (/* binding */ RecommendModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_recommend_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./recommend-modal.page.html */ 4107);
/* harmony import */ var _recommend_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recommend-modal.page.scss */ 4088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_follow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/follow.service */ 1854);







let RecommendModalPage = class RecommendModalPage {
    constructor(modalCtr, followService, auth) {
        this.modalCtr = modalCtr;
        this.followService = followService;
        this.auth = auth;
        this.movieID = '';
        this.movieTitle = '';
        this.moviePoster = '';
        this.selectedRating = 0;
        this.inputtedMessage = '';
        this.readonly = false;
        this.currentUser = {};
    }
    ngOnInit() {
    }
    close() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const closeModal = "Modal Closed";
            yield this.modalCtr.dismiss(closeModal);
        });
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.currentUser = yield this.auth.getUser();
            let followingArr = [];
            // retrieves the following count for a user's profile
            this.followingSub = this.followService.getFollowing(this.currentUser.uid).valueChanges()
                .subscribe(following => {
                followingArr = Object.keys(following);
                console.log("THis is the folloiwngArr in recommedn", followingArr);
                this.inUserFollowingArrObj = this.followService.getUserList(followingArr);
            }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log("This user has no following", err.message);
            }));
        });
    }
    ngOnDestroy() {
        this.followingSub.unsubscribe();
    }
};
RecommendModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_services_follow_service__WEBPACK_IMPORTED_MODULE_3__.FollowService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
RecommendModalPage.propDecorators = {
    movieID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    movieTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    moviePoster: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
RecommendModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-recommend-modal',
        template: _raw_loader_recommend_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_recommend_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RecommendModalPage);



/***/ }),

/***/ 6875:
/*!*********************************************************!*\
  !*** ./src/app/pages/review-modal/review-modal.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewModalPage": () => (/* binding */ ReviewModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_review_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./review-modal.page.html */ 4572);
/* harmony import */ var _review_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review-modal.page.scss */ 4499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/review.service */ 9264);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);







let ReviewModalPage = class ReviewModalPage {
    constructor(modalCtr, reviewService, auth) {
        this.modalCtr = modalCtr;
        this.reviewService = reviewService;
        this.auth = auth;
        this.movieToReviewID = '';
        this.movieTitle = '';
        this.moviePoster = '';
        this.inputtedReview = '';
        this.inputtedRating = null;
        this.inputtedTags = null;
        this.loggedInUserName = '';
        this.loggedInUserID = '';
        this.loggedInUserPhoto = '';
        this.currentUser = {};
        this.selected = 0;
        this.hovered = 0;
        this.readonly = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log("The text", this.inputtedReview);
            this.currentUser = yield this.auth.getUser();
            this.loggedInUserName = this.currentUser.displayName;
            this.loggedInUserID = this.currentUser.uid;
            this.loggedInUserPhoto = this.currentUser.photoURL;
        });
    }
    close() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const closeModal = "Modal Closed";
            yield this.modalCtr.dismiss(closeModal);
        });
    }
    submitReview() {
        console.log("This is the review content FIRST: ", this.inputtedReview);
        if (this.inputtedReview != "") {
            const currentDate = new Date();
            const userReview = {
                date: currentDate,
                likes: null,
                movieID: this.movieToReviewID,
                rating: this.inputtedRating,
                tags: this.inputtedTags,
                content: this.inputtedReview,
                title: this.movieTitle,
                comments: null,
                authorName: this.loggedInUserName,
                authorID: this.loggedInUserID,
                authorPhoto: this.loggedInUserPhoto
            };
            this.reviewService.submitReview(userReview);
            this.close();
        }
        else {
            window.alert('Please enter your review in the text box');
            return false;
        }
    }
    changeing(event) {
        console.log(event);
        this.inputtedReview = event;
    }
};
ReviewModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_2__.ReviewService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
ReviewModalPage.propDecorators = {
    movieToReviewID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    movieTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    moviePoster: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
ReviewModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-review-modal',
        template: _raw_loader_review_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_review_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReviewModalPage);



/***/ }),

/***/ 9945:
/*!*************************************************!*\
  !*** ./src/app/services/imdb-rating.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMDbRatingService": () => (/* binding */ IMDbRatingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ 3835);




let IMDbRatingService = class IMDbRatingService {
    constructor(http) {
        this.http = http;
        this.omdb_api_key = _config__WEBPACK_IMPORTED_MODULE_0__.config.OMDb_API_KEY;
    }
    getIMDbRatings(imdbID) {
        console.log("This is the imdb id in the service " + imdbID);
        return this.http.get('https://www.omdbapi.com/?i=' + imdbID + '&apikey=' + this.omdb_api_key);
    }
};
IMDbRatingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
IMDbRatingService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], IMDbRatingService);



/***/ }),

/***/ 9264:
/*!********************************************!*\
  !*** ./src/app/services/review.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewService": () => (/* binding */ ReviewService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);



let ReviewService = class ReviewService {
    constructor(afStore) {
        this.afStore = afStore;
    }
    submitReview(userReview) {
        console.log("THis is the movie eviewed ID: ", userReview.movieID);
        let movieReviewedIDStr = JSON.stringify(userReview.movieID);
        let authorIDStr = userReview.authorID;
        const userReviewRef = this.afStore.collection('posts').doc(movieReviewedIDStr).collection('userReviews');
        return userReviewRef.doc(authorIDStr).set(userReview, {
            merge: true,
        });
    }
};
ReviewService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.AngularFirestore }
];
ReviewService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ReviewService);



/***/ }),

/***/ 8215:
/*!**********************************************!*\
  !*** ./src/app/services/time-ago.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeAgoService": () => (/* binding */ TimeAgoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let TimeAgoService = class TimeAgoService {
    constructor() {
        // https://muffinman.io/blog/javascript-time-ago-function/
        this.MONTH_NAMES = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        // --- DEMO
        this.minuteInMs = 60000;
        this.hourInMs = this.minuteInMs * 60;
        this.dayInMs = this.hourInMs * 24;
        this.dates = [
            new Date(),
            new Date(new Date().getTime() - this.minuteInMs),
            new Date(new Date().getTime() - this.minuteInMs * 45),
            new Date(new Date().getTime() - this.hourInMs),
            new Date(new Date().getTime() - this.hourInMs * 24),
            new Date(new Date().getTime() - this.dayInMs * 5),
        ];
    }
    // unixTime = 1628172123
    // date1 = new Date(this.unixTime * 1000);
    getFormattedDate(date, prefomattedDate = false, hideYear = false, todayOrYest) {
        const day = date.getDate();
        const month = this.MONTH_NAMES[date.getMonth()];
        const year = date.getFullYear();
        const hours = date.getHours();
        let minutes = date.getMinutes();
        if (minutes < 10) {
            // Adding leading zero to minutes
            minutes = `0${minutes}`;
        }
        // console.log(todayOrYest)
        if (prefomattedDate) {
            // Today at 10:20
            // Yesterday at 10:20
            return `${todayOrYest} at ${hours}:${minutes}`;
        }
        if (hideYear) {
            // 10. January at 10:20
            return `${day}. ${month} at ${hours}:${minutes}`;
        }
        // 10. January 2017. at 10:20
        return `${day}. ${month} ${year}. at ${hours}:${minutes}`;
    }
    // --- Main function
    timeAgo(dateParam) {
        // dateParam = this.date1
        if (!dateParam) {
            return null;
        }
        const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
        const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
        const today = new Date();
        const yesterday = new Date(today.valueOf() - DAY_IN_MS.valueOf());
        const seconds = Math.round((today.valueOf() - date.valueOf()) / 1000);
        const minutes = Math.round(seconds / 60);
        const isToday = today.toDateString() === date.toDateString();
        const isYesterday = yesterday.toDateString() === date.toDateString();
        const isThisYear = today.getFullYear() === date.getFullYear();
        if (seconds < 5) {
            return 'now';
        }
        else if (seconds < 60) {
            return `${seconds} seconds ago`;
        }
        else if (seconds < 90) {
            return 'about a minute ago';
        }
        else if (minutes < 60) {
            return `${minutes} minutes ago`;
        }
        else if (isToday) {
            return this.getFormattedDate(date, true, null, 'Today'); // Today at 10:20
        }
        else if (isYesterday) {
            return this.getFormattedDate(date, true, null, 'Yesterday'); // Yesterday at 10:20
        }
        else if (isThisYear) {
            return this.getFormattedDate(date, false, true, 'neither'); // 10. January at 10:20
        }
        return this.getFormattedDate(date, false, null, 'neither'); // 10. January 2017. at 10:20
    }
};
TimeAgoService.ctorParameters = () => [];
TimeAgoService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], TimeAgoService);



/***/ }),

/***/ 2767:
/*!*********************************************!*\
  !*** ./src/app/services/youtube.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YoutubeService": () => (/* binding */ YoutubeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/config */ 3835);




let YoutubeService = class YoutubeService {
    constructor(http) {
        this.http = http;
        // getting the api key from the config varibale in the confg.js file
        this.youTubeApiKey = _src_config__WEBPACK_IMPORTED_MODULE_0__.config.youTube_API_KEY;
        this.youTubeUrl = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=';
    }
    getTrailer(videoid) {
        return this.http.get(this.youTubeUrl + videoid + '&key=' + this.youTubeApiKey);
    }
};
YoutubeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
YoutubeService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], YoutubeService);



/***/ }),

/***/ 5035:
/*!*******************************************************!*\
  !*** ./src/app/pages/movie-page/movie-page.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@charset \"UTF-8\";\nion-title {\n  font-size: 20px;\n}\n.top-div {\n  display: grid;\n  height: 450px;\n  color: white;\n}\n.top-div__poster {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 32px;\n  height: 250px;\n}\n.top-div__background {\n  width: 100%;\n  position: absolute;\n  z-index: -1;\n  height: 450px;\n  object-fit: cover;\n  filter: brightness(0.8);\n  background-color: #1d6adc;\n}\n.top-div {\n  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));\n  font-size: 18px;\n  font-weight: 500;\n}\n.top-div__facts {\n  text-align: center;\n  margin-bottom: 0;\n  padding: 8px;\n}\n.top-div__fact {\n  display: inline;\n}\n.top-div__fact ~ div:before {\n  content: \" • \";\n}\n.top-div__imdb {\n  text-align: center;\n}\n.top-div__imdb__image {\n  width: 40px;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.top-div__imdb__rating {\n  display: inline;\n  margin: auto 0;\n}\n.top-div__buttons {\n  display: flex;\n  justify-content: space-evenly;\n  margin: 0 16px;\n}\nion-button {\n  --border-radius: 32px;\n  width: 40%;\n  font-weight: 600;\n  font-size: 16px;\n  padding: 2px;\n}\n.bottom-div {\n  padding: 10px;\n  background: white;\n}\n.top-div__button--rate-icon {\n  margin-right: 4px;\n  font-size: 20px;\n}\n.bottom-div__available-on {\n  display: inline-block;\n}\n.bottom-div__available-on--image {\n  width: 65px;\n  padding-right: 12px;\n}\n.bottom-div__cast__carousel {\n  white-space: nowrap;\n  overflow-x: auto !important;\n}\n.bottom-div__cast__carousel::-webkit-scrollbar {\n  display: none;\n}\n.bottom-div__cast--item {\n  display: inline-block;\n  text-align: left;\n}\n.bottom-div__cast--actor,\n.bottom-div__cast--character,\n.bottom-div__cast--image {\n  padding-right: 15px;\n  font-size: 12px;\n  width: 100px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.bottom-div__cast--actor {\n  color: var(--ion-color-primary, black);\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n.bottom-div__cast--character {\n  color: var(--ion-text-color-grey, grey);\n  margin-top: 0;\n}\n.reviews__card {\n  color: var(--ion-text-color-main, black);\n}\n.reviews__card__profile-image__col {\n  margin: auto;\n}\n.reviews__card__profile-image__img-tag {\n  margin: auto auto;\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.reviews__card__review-details__user-name {\n  margin-bottom: 0;\n}\n.reviews__card__review-details__date {\n  margin-top: 0;\n  color: var(--ion-text-color-grey, --ion-text-color-grey);\n}\n.reviews__card__avatar {\n  width: 58px;\n  height: 58px;\n  max-width: 58px;\n  object-fit: cover;\n  margin-right: 0;\n}\n.reviews__card__card-content {\n  margin-top: 0px;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGVBQUE7QUFFSjtBQW1CQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQWhCSjtBQW1CQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFoQko7QUFvQkE7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFJQSx5QkFBQTtBQXJCSjtBQXdCQTtFQUNJLGlFQUNBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBdEJKO0FBeUJBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUF0Qko7QUEyQkE7RUFDSSxlQUFBO0FBeEJKO0FBMkJBO0VBQ0ksY0FBQTtBQXhCSjtBQTJCQTtFQUNJLGtCQUFBO0FBeEJKO0FBMkJBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUF4Qko7QUEyQkE7RUFFSSxlQUFBO0VBQ0EsY0FBQTtBQXpCSjtBQTZCQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUExQko7QUE4QkE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBM0JKO0FBOEJBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBM0JKO0FBOEJBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBM0JGO0FBaURFO0VBQ0kscUJBQUE7QUE5Q047QUFpREU7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUE5Q047QUFpREE7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0FBOUNKO0FBK0NJO0VBQ0ksYUFBQTtBQTdDUjtBQWlEQTtFQUNJLHFCQUFBO0VBRUEsZ0JBQUE7QUEvQ0o7QUFrREE7OztFQUdJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUEvQ0o7QUFtREE7RUFDRSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWhERjtBQW1EQTtFQUNFLHVDQUFBO0VBQ0EsYUFBQTtBQWhERjtBQXNEQTtFQUNFLHdDQUFBO0FBbkRGO0FBc0RBO0VBQ0UsWUFBQTtBQW5ERjtBQXFEQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBbERGO0FBcURBO0VBQ0UsZ0JBQUE7QUFsREY7QUFxREE7RUFDRSxhQUFBO0VBQ0Esd0RBQUE7QUFsREY7QUFxREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFsREY7QUFxREE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFsREYiLCJmaWxlIjoibW92aWUtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLy8gaHRtbHtcbi8vICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLW1haW4sIGJsYWNrKTtcblxuLy8gfVxuXG4vL1RyYW5zcGFyZW50IHRvb2xiYXIgLSBiYWNrZ3JvdW5kIGltYWdlIGdldHMgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuKGJpdCBidWdneSB0aG91Z2gpXG4vLyBpb24tdG9vbGJhciB7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBuby1yZXBlYXQgZml4ZWQgY2VudGVyO1xuLy8gICAgIC0tY29sb3I6IGJsYWNrO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB0b3A6IDA7XG4vLyAgIH1cblxuLy8gaW9uLWNvbnRlbnR7XG4vLyAgICAgZm9udC1zaXplOiAxNnB4O1xuLy8gICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvci1tYWluLCBncmVlbik7XG5cbi8vIH1cblxuLnRvcC1kaXYge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgaGVpZ2h0OiA0NTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi50b3AtZGl2X19wb3N0ZXJ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggYmxhY2s7XG59XG5cbi50b3AtZGl2X19iYWNrZ3JvdW5ke1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTE7XG4gICAgaGVpZ2h0OiA0NTBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcbiAgICAvLyBmaWx0ZXI6IGJsdXIoMnB4KTtcbiAgICAvLyBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAvLyAtd2Via2l0LWZpbHRlcjogYmx1cig1cHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzFkNmFkYztcbn1cblxuLnRvcC1kaXZ7XG4gICAgYmFja2dyb3VuZDpcbiAgICBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwKSwgIHJnYmEoMCwgMCwgMCwgMC42KSk7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50b3AtZGl2X19mYWN0c3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgLy8gZm9udC1zaXplOiAxOHB4O1xuICAgIC8vIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50b3AtZGl2X19mYWN0e1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnRvcC1kaXZfX2ZhY3QgfiBkaXY6YmVmb3Jle1xuICAgIGNvbnRlbnQ6XCIg4oCiIFwiO1xufVxuXG4udG9wLWRpdl9faW1kYntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50b3AtZGl2X19pbWRiX19pbWFnZXtcbiAgICB3aWR0aDogNDBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnRvcC1kaXZfX2ltZGJfX3JhdGluZ3tcbiAgICAvLyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtYXJnaW46IGF1dG8gMDtcblxufVxuXG4udG9wLWRpdl9fYnV0dG9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIG1hcmdpbjogMCAxNnB4O1xuXG59XG5cbmlvbi1idXR0b24ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogMzJweDtcbiAgICB3aWR0aDogNDAlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmc6IDJweDtcbn1cblxuLmJvdHRvbS1kaXZ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnRvcC1kaXZfX2J1dHRvbi0tcmF0ZS1pY29ue1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4vLyBpb24tc2VnbWVudHtcbi8vICAgICBtYXJnaW4tbGVmdDogYXV0bztcbi8vICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4vLyAgICAgbWFyZ2luLXRvcDogMTBweDtcbi8vIH1cblxuLy8gaW9uLXNlZ21lbnR7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMjJweDtcbi8vICAgICBoZWlnaHQ6IDQwcHg7XG4vLyAgICAgLS1mb250LXNpemU6IDkwcHg7XG4vLyAgICAgY29sb3I6IGJsYWNrO1xuLy8gICAgIC8vIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCk7XG4vLyB9XG5cbi8vIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4vLyAgICAgLS1pbmRpY2F0b3ItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbi8vICAgICAtLWJvcmRlci1yYWRpdXM6IDIycHg7XG4vLyAgIH1cblxuICAuYm90dG9tLWRpdl9fYXZhaWxhYmxlLW9ue1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLmJvdHRvbS1kaXZfX2F2YWlsYWJsZS1vbi0taW1hZ2V7XG4gICAgICB3aWR0aDogNjVweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gIH1cblxuLmJvdHRvbS1kaXZfX2Nhc3RfX2Nhcm91c2Vse1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3cteDogYXV0byAhaW1wb3J0YW50O1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi5ib3R0b20tZGl2X19jYXN0LS1pdGVte1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAvLyB3aWR0aDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmJvdHRvbS1kaXZfX2Nhc3QtLWFjdG9yLFxuLmJvdHRvbS1kaXZfX2Nhc3QtLWNoYXJhY3Rlcixcbi5ib3R0b20tZGl2X19jYXN0LS1pbWFnZXtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC8vIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5ib3R0b20tZGl2X19jYXN0LS1hY3RvcntcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCBibGFjayk7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4uYm90dG9tLWRpdl9fY2FzdC0tY2hhcmFjdGVye1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3ItZ3JleSwgZ3JleSk7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cblxuLy8gKioqKioqKioqKioqKioqKioqKioqIFJFVklFV1MgKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi5yZXZpZXdzX19jYXJke1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3ItbWFpbiwgYmxhY2spO1xufVxuXG4ucmV2aWV3c19fY2FyZF9fcHJvZmlsZS1pbWFnZV9fY29se1xuICBtYXJnaW46IGF1dG87XG59XG4ucmV2aWV3c19fY2FyZF9fcHJvZmlsZS1pbWFnZV9faW1nLXRhZ3tcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG4gIHdpZHRoOiA1OHB4O1xuICBoZWlnaHQ6IDU4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnJldmlld3NfX2NhcmRfX3Jldmlldy1kZXRhaWxzX191c2VyLW5hbWV7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5yZXZpZXdzX19jYXJkX19yZXZpZXctZGV0YWlsc19fZGF0ZXtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLWdyZXksIC0taW9uLXRleHQtY29sb3ItZ3JleSlcbn1cblxuLnJldmlld3NfX2NhcmRfX2F2YXRhcntcbiAgd2lkdGg6IDU4cHg7XG4gIGhlaWdodDogNThweDtcbiAgbWF4LXdpZHRoOiA1OHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4ucmV2aWV3c19fY2FyZF9fY2FyZC1jb250ZW50e1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuIl19 */");

/***/ }),

/***/ 4088:
/*!*****************************************************************!*\
  !*** ./src/app/pages/recommend-modal/recommend-modal.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  font-size: 20px;\n}\n\nion-grid {\n  padding: 16px;\n}\n\nh4 {\n  margin-bottom: 10px;\n  font-weight: 600px;\n}\n\nh2 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nh1 {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.modal-close-button {\n  margin-left: 10px;\n  font-size: 30px;\n}\n\n.global--text-area {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n\n.recommend__movie-container {\n  background-color: #1d6adc;\n  background: linear-gradient(#1d6adc, black);\n  width: 200px;\n  margin: 16px auto;\n  height: 300px;\n}\n\n.recommend__movie-poster {\n  margin: 0 auto;\n}\n\n.recommend__rating-slider {\n  margin: 0 auto;\n  font-size: 2rem;\n  color: gold;\n}\n\n.recommend__rating-slider:focus {\n  outline: 0 !important;\n}\n\n.recommend__rating-number {\n  margin: 0 auto;\n  color: #1d6adc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZC1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLDJDQUNBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUFGOztBQUlBO0VBQ0EsY0FBQTtBQURBOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBREY7O0FBR0E7RUFDRSxxQkFBQTtBQUFGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUFERiIsImZpbGUiOiJyZWNvbW1lbmQtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmlvbi1ncmlke1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG5oNHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMHB4O1xufVxuXG5oMntcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaDF7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5tb2RhbC1jbG9zZS1idXR0b257XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5nbG9iYWwtLXRleHQtYXJlYXtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnJlY29tbWVuZF9fbW92aWUtY29udGFpbmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMxZDZhZGM7XG4gIGJhY2tncm91bmQ6XG4gIGxpbmVhci1ncmFkaWVudChyZ2IoMjksIDEwNiwgMjIwKSwgIHJnYmEoMCwgMCwgMCwgMSkpO1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogMTZweCBhdXRvO1xuICBoZWlnaHQ6IDMwMHB4O1xuXG59XG5cbi5yZWNvbW1lbmRfX21vdmllLXBvc3Rlcntcbm1hcmdpbjogMCBhdXRvO1xufVxuXG4ucmVjb21tZW5kX19yYXRpbmctc2xpZGVye1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogZ29sZDtcbn1cbi5yZWNvbW1lbmRfX3JhdGluZy1zbGlkZXI6Zm9jdXMge1xuICBvdXRsaW5lOjAgIWltcG9ydGFudDtcbiAgLy8gYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5cbi5yZWNvbW1lbmRfX3JhdGluZy1udW1iZXJ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogIzFkNmFkYztcbn1cbiJdfQ== */");

/***/ }),

/***/ 4499:
/*!***********************************************************!*\
  !*** ./src/app/pages/review-modal/review-modal.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  font-size: 20px;\n}\n\nion-grid {\n  padding: 16px;\n}\n\nh4 {\n  margin-bottom: 10px;\n  font-weight: 600px;\n}\n\nh2 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nngb-rating {\n  color: #FFC107;\n  font-size: 80px;\n}\n\n.modal-close-button {\n  margin-left: 10px;\n  font-size: 30px;\n}\n\n.review__movie-container {\n  background-color: #1d6adc;\n  background: linear-gradient(#1d6adc, black);\n  width: 200px;\n  margin: 20px auto;\n  height: 300px;\n}\n\n.review__movie-poster {\n  margin: 0 auto;\n}\n\n.review-content__text-area__label {\n  margin-bottom: 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.global--text-area:nth-child(2) {\n  margin-top: 8px;\n}\n\n.review-content__submit-button {\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlldy1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsMkNBQ0E7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBQUY7O0FBSUE7RUFDQSxjQUFBO0FBREE7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtBQURGIiwiZmlsZSI6InJldmlldy1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLWdyaWR7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbmg0e1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwcHg7XG59XG5cbmgye1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5uZ2ItcmF0aW5nIHtcbiAgY29sb3I6ICNGRkMxMDc7XG4gIGZvbnQtc2l6ZTogODBweDtcbn1cblxuLm1vZGFsLWNsb3NlLWJ1dHRvbntcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnJldmlld19fbW92aWUtY29udGFpbmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMxZDZhZGM7XG4gIGJhY2tncm91bmQ6XG4gIGxpbmVhci1ncmFkaWVudChyZ2IoMjksIDEwNiwgMjIwKSwgIHJnYmEoMCwgMCwgMCwgMSkpO1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBoZWlnaHQ6IDMwMHB4O1xuXG59XG5cbi5yZXZpZXdfX21vdmllLXBvc3Rlcntcbm1hcmdpbjogMCBhdXRvO1xufVxuXG4ucmV2aWV3LWNvbnRlbnRfX3RleHQtYXJlYV9fbGFiZWx7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmdsb2JhbC0tdGV4dC1hcmVhOm50aC1jaGlsZCgyKXtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4ucmV2aWV3LWNvbnRlbnRfX3N1Ym1pdC1idXR0b257XG4gIHdpZHRoOiA4MCU7XG59XG4iXX0= */");

/***/ }),

/***/ 4299:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movie-page/movie-page.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"/tabs/tab2\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{movieDetails.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <div class=\"top-div\">\n    <img class=\"top-div__poster\" src=\"{{movieDetails.posterPath}}\" />\n    <img class=\"top-div__background\" src=\"{{movieDetails.backdropPath}}\" />\n    <div class=\"top-div__facts\">\n      <div class=\"top-div__fact\">{{movieDetails.releaseDate | slice:0:4}}</div>\n      <div class=\"top-div__fact\">{{movieDetails.movieGenre1}}, {{movieDetails.movieGenre2}}</div>\n      <div class=\"top-div__fact\">{{movieDetails.runtime}}</div>\n    </div>\n    <div *ngIf=\"movieDetails.imdbRating\" class=\"top-div__imdb\">\n      <img class=\"top-div__imdb__image\" src=\"../../../assets/imdb_logo.svg\">\n      <div class=\"top-div__imdb__rating\" value=\" - \">{{movieDetails.imdbRating}}</div>\n    </div>\n    <div class=\"top-div__buttons\">\n      <ion-button class=\"top-div__button\" (click)=\"openReviewModal('review')\">\n        <ion-icon name=\"star-outline\" class=\"top-div__button--rate-icon\"></ion-icon>\n        Rate\n      </ion-button>\n      <ion-button class=\"top-div__button\">\n        <ion-icon name=\"add\"></ion-icon>\n        Watchlist\n      </ion-button>\n      <ion-button class=\"top-div__button\" (click)=\"openReviewModal('recommend')\">\n        Recommend</ion-button>\n    </div>\n\n  </div>\n  <div>\n    <ion-segment mode=\"ios\" [(ngModel)]=\"segmentModel\" (ionChange)=\"segmentChanged($event)\">\n      <ion-segment-button value=\"info\">\n        <ion-label>Info</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"reviews\">\n        <ion-label>Reviews</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <div *ngIf=\"segmentModel === 'info'\" class=\"bottom-div\">\n      <h1>Overview</h1>\n      {{movieDetails.overview}}\n      <h1>Available On</h1>\n      <ion-text [hidden]=\"hideAvailabilityMessage\">Not yet available in your chosen country</ion-text>\n      <div class=\"bottom-div__available-on\" *ngFor=\"let item of providersFlatrateArr.flatrate\">\n        <img class=\"bottom-div__available-on--image\" src=\"{{logoUrl}}{{item.logo_path}}\" />\n      </div>\n      <h2>Cast</h2>\n      <ion-text animated style=\"width: 50%\" [hidden]=\"hideCastMessage\">Sorry, there is no information regarding cast\n        members of this movie</ion-text>\n\n\n      <div class=\"bottom-div__cast__carousel\">\n        <div class=\"bottom-div__cast--item\" *ngFor=\"let item of movieDetails.castArray\">\n          <img class=\"bottom-div__cast--image\" src=\"{{profileUrl}}{{item.profile_path}}\">\n          <div>\n            <h6 class=\"bottom-div__cast--actor\">{{item.name}}</h6>\n          </div>\n          <div class=\"div-word-break\">\n            <h6 class=\"bottom-div__cast--character\"> {{item.character}}</h6>\n          </div>\n        </div>\n      </div>\n\n      <h1>Trailer</h1>\n      <img style=\"width: 100%\" src=\"{{movieTrailerThumb}}\" alt=\"Movie Trailer Thumbnail\" />\n    </div>\n\n\n    <div *ngIf=\"segmentModel === 'reviews'\">\n      <ion-card *ngFor=\"let review of returnedReview\" class=\"reviews__card\">\n        <ion-row class=\"reviews__card__row\">\n          <ion-col size=\"3\" class=\"reviews__card__profile-image__col\">\n            <ion-img class=\"reviews__card__profile-image__img-tag\" [src]=\"review.data.authorPhoto\"\n              alt=\"Profile Picture\"></ion-img>\n          </ion-col>\n          <ion-col size=\"9\" class=\"reviews__card__review-details\">\n            <h4 class=\"reviews__card__review-details__user-name\">{{review.data.authorName}}</h4>\n            <p class=\"reviews__card__review-details__date\">{{review.reviewHowLongAgo}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-card-content class=\"reviews__card__card-content\">\n          {{review.data.content}}\n          <!-- [{{review.id}}] -->\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 4107:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recommend-modal/recommend-modal.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Send Recommendation</ion-title>\n    <ion-icon class=\"modal-close-button\" (click)=\"close()\" name=\"close\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content>\n  <p *ngFor=\"let item of tab4.followersArr\">{{item}}</p>\n</ion-content> -->\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <!-- <h5>{{movieTitle}}</h5> -->\n      <div class=\"recommend__movie-container\">\n        <img class=\"recommend__movie-poster\" [src]=\"moviePoster\">\n      </div>\n    </ion-row>\n    <ion-row>\n      <ngb-rating class=\"recommend__rating-slider\" [(rate)]=\"selectedRating\" (hover)=\"hovered=$event\"\n        (leave)=\"hovered=0\" [readonly]=\"readonly\">\n        <!-- <span class=\"star\" [class.filled]=\"fill === 100\"\n          [class.bad]=\"index < 3\">&#9733;</span> -->\n      </ngb-rating>\n    </ion-row>\n    <ion-row>\n      <div class=\"recommend__rating-number\">\n        <h1><b>{{selectedRating}}</b></h1>\n      </div>\n    </ion-row>\n    <ion-row>\n      <ion-textarea class=\"global--text-area\" placeholder=\"Enter message here...\" [(ngModel)]=\"inputtedMessage\">\n      </ion-textarea>\n    </ion-row>\n    <ion-row>\n      <h4 style=\"font-weight: 600;\">People you Follow</h4>\n    </ion-row>\n    <div *ngFor=\"let user of inUserFollowingArrObj | async\">\n      <app-recommend-user-card [user]=\"user.data\" [movieId]=\"movieID\" [moviePoster]=\"moviePoster\"\n        [selectedRating]=\"selectedRating\" [inputtedMessage]=\"inputtedMessage\">\n      </app-recommend-user-card>\n    </div>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ 4572:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/review-modal/review-modal.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{movieTitle}}</ion-title>\n    <ion-icon class=\"modal-close-button\" (click)=\"close()\" name=\"close\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <h1 class=\"text-primary\">\n  Angular 10 Start Rating Example\n</h1>\n<ngb-rating [max]=\"5\" [(rate)]=\"currentRating\" [readonly]=\"false\"></ngb-rating>\n<p>Rate: </p> -->\n<ion-content>\n\n\n  <ion-grid>\n    <ion-row>\n      <div class=\"review__movie-container\">\n        <img class=\"review__movie-poster\" [src]=\"moviePoster\">\n      </div>\n    </ion-row>\n    <ion-row>\n      <!-- Textarea in an item with a placeholder -->\n      <ion-col>\n        <!-- <ion-input type=\"text\" class=\"review-content__text-area\" [(ngModel)]=\"inputtedReview\"  -->\n        <ion-textarea type=\"text\" class=\"global--text-area\" [(ngModel)]=\"inputtedReview\"\n          (ionChange)=\"changeing($event.target.value)\" placeholder=\"Enter your review here...\"></ion-textarea>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <!-- Textarea in an item with a placeholder -->\n        <ion-label class=\"review-content__text-area__label\">Tags:</ion-label>\n        <ion-textarea class=\"global--text-area\" [(ngModel)]=\"inputtedTags\" placeholder=\"Enter tags here...\">\n        </ion-textarea>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"text-center\">\n        <ion-button class=\"review-content__submit-button\" (click)=\"submitReview()\">Sumbit</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- <ngb-rating [(rate)]=\"selected\" (hover)=\"hovered=$event\" (leave)=\"hovered=0\" [readonly]=\"readonly\"></ngb-rating>\n  <hr>\n  <pre>\n  Selected: <b>{{selected}}</b>\n  Hovered: <b>{{hovered}}</b>\n  </pre> -->\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_movie-page_movie-page_module_ts.js.map