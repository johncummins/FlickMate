(self["webpackChunkFlickMate1_0"] = self["webpackChunkFlickMate1_0"] || []).push([["src_app_tab2_tab2_module_ts"],{

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

/***/ 4349:
/*!***************************************************!*\
  !*** ./src/app/services/search-movies.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchMoviesService": () => (/* binding */ SearchMoviesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/config */ 3835);




let SearchMoviesService = class SearchMoviesService {
    constructor(http) {
        this.http = http;
        // getting the api key from the config varibale in the confg.js file
        this.tmdbApiKey = _src_config__WEBPACK_IMPORTED_MODULE_0__.config.TMDb_API_KEY;
        this.baseUrl = 'https://api.themoviedb.org/3/search/movie?api_key=' + this.tmdbApiKey;
    }
    basicSearch(searchKeywords) {
        return this.http.get(this.baseUrl +
            '&language=en-US&query=' +
            searchKeywords +
            '&page=1&include_adult=false&region=IE');
    }
};
SearchMoviesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
SearchMoviesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], SearchMoviesService);



/***/ }),

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 7008:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab2.page.html */ 2477);
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss */ 2055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_read_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/read-movie.service */ 2399);
/* harmony import */ var _services_search_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/search-movies.service */ 4349);







// import { MovieBasic } from './MovieBasic';
let Tab2Page = class Tab2Page {
    constructor(searchmoviesservice, router, readmovieservice) {
        this.searchmoviesservice = searchmoviesservice;
        this.router = router;
        this.readmovieservice = readmovieservice;
        this.showSearchResults = true;
        this.showSearchTab = false;
        this.posterUrl = 'https://www.themoviedb.org/t/p/w185';
    }
    basicSearch(searchInput) {
        this.inputDisplay = searchInput;
        if (typeof this.inputDisplay !== undefined && this.inputDisplay) {
            this.showSearchResults = false;
            this.searchmoviesservice.basicSearch(searchInput).subscribe((result) => {
                this.searchRes = result['results'];
                console.log('THIS IS THE KEYWORD', searchInput);
            }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(err.message);
            }));
        }
        else {
            this.showSearchTab = true;
        }
    }
    clearResults() {
        this.showSearchResults = true;
        this.showSearchTab = false;
    }
    showTab() {
        this.showSearchTab = true;
    }
    viewMovie(movieID) {
        // Create Navigation Extras object to pass to movie page
        // This is passed into movie page from tab2.page.html
        let navigationExtras = {
            state: { movieID },
        };
        this.router.navigate(['/tabs/tab2/movie-page'], navigationExtras);
    }
    getPopular() {
        this.readmovieservice.getPopular().subscribe((result) => {
            this.popularMovies = result['results'];
            console.log('THIS IS THE popular results...', this.popularMovies);
        }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(err.message);
        }));
    }
    getTopRated() {
        this.readmovieservice.getTopRated().subscribe((result) => {
            this.topRatedMovies = result['results'];
            console.log('THIS IS THE top rated results...', this.topRatedMovies);
        }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(err.message);
        }));
    }
    getTrendingToday() {
        this.readmovieservice.getTrendingToday().subscribe((result) => {
            this.trendingMovies = result['results'];
            console.log('THIS IS THE top upcoming movies results...', this.trendingMovies);
        }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(err.message);
        }));
    }
    ngOnInit() {
        this.getPopular();
        this.getTopRated();
        this.getTrendingToday();
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_search_movies_service__WEBPACK_IMPORTED_MODULE_3__.SearchMoviesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_read_movie_service__WEBPACK_IMPORTED_MODULE_2__.ReadMovieService }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab2Page);



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

/***/ 2055:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-searchbar {\n  margin-top: 14%;\n}\n\n.carousel {\n  white-space: nowrap;\n  overflow-x: auto !important;\n}\n\n.carousel::-webkit-scrollbar {\n  display: none;\n}\n\n.ion-pad {\n  padding-bottom: 10px;\n  margin-left: 6px;\n}\n\n.movie-thumb {\n  width: 105px;\n  margin-right: 16px;\n}\n\nh3 {\n  margin-left: 10px;\n  font-weight: 600;\n  margin-bottom: -2px;\n}\n\n.search-text {\n  margin-bottom: 10px;\n  margin-left: 16px;\n  margin-top: 16px;\n  font-weight: bold;\n  font-size: large;\n}\n\n.movie-search-result {\n  border-bottom: 5px;\n  border-bottom: 2px solid #ededed;\n  left: 0;\n}\n\n.movie-search-result ion-grid {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFFQSwyQkFBQTtBQUFGOztBQUdFO0VBQ0UsYUFBQTtBQURKOztBQUtBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUlBO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFFRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFPQTtFQUVFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFPQTtFQUVFLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxPQUFBO0FBTEY7O0FBT0E7RUFDRSxnQkFBQTtBQUpGIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlYXJjaGJhciB7XG4gIG1hcmdpbi10b3A6IDE0JTtcbn1cbi8vIEZvciB0aGUgY2Fyb3N1ZWxcbi5jYXJvdXNlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC8vICAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG8gIWltcG9ydGFudDtcbiAgLy8gICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAvLyAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmlvbi1wYWQge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cbi5tb3ZpZS10aHVtYiB7XG4gIC8vICAgaGVpZ2h0OiAxNDFweDtcbiAgd2lkdGg6IDEwNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbmgzIHtcbiAgLy8gY29sb3I6ICMwOTIwNDI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xuICAvLyAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uc2VhcmNoLXRleHQge1xuICAvLyAgIG1hcmdpbi10b3A6IC0xNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG4ubW92aWUtc2VhcmNoLXJlc3VsdCB7XG4gIC8vICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogNXB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VkZWRlZDtcbiAgbGVmdDogMDtcbn1cbi5tb3ZpZS1zZWFyY2gtcmVzdWx0IGlvbi1ncmlkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi8vIC5TZWFyY2gtcmVzdWx0cyB7XG4vLyAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuLy8gICAgICAgZGlzcGxheTogbm9uZTtcbi8vICAgICB9XG4vLyB9XG4iXX0= */");

/***/ }),

/***/ 2477:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header collapse=\"condense\">\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-searchbar placeholder=\"Search for a movie\" inputmode=\"search\" type=\"search\"\n        (ionChange)=\"basicSearch($event.target.value)\" (ionClear)=\"clearResults()\" (ionFocus)=\"showTab()\"\n        [debounce]=\"250\" showCancelButton=\"focus\" enterkeyhint=\"search\" spellcheck=\"true\"></ion-searchbar>\n    </ion-buttons>\n  </ion-toolbar>\n  <!-- Below is the segment for basic and advaced searches -->\n  <!-- <ion-toolbar [hidden]=\"!showSearchResults\" [hidden]=\"!showSearchTab\">\n    <ion-segment>\n      <ion-segment-button color=\"white\">\n        <ion-label>Recents</ion-label>\n      </ion-segment-button>\n      <ion-segment-button>\n        <ion-label>Advanced Search</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content [hidden]=\"!showSearchResults\">\n  <div [hidden]=\"!showSearchResults\">\n    <ion-grid>\n      <h3>Popular Movies</h3>\n      <ion-row class=\"carousel\">\n        <ion-col class=\"ion-pad\">\n          <span *ngFor=\"let item of popularMovies\" (click)=\"viewMovie(item.id)\">\n            <img class=\"movie-thumb\" src=\"{{posterUrl}}{{item.poster_path}}\" />\n          </span>\n        </ion-col>\n      </ion-row>\n\n      <h3>Top Rated</h3>\n      <ion-row class=\"carousel\">\n        <ion-col class=\"ion-pad\">\n          <span *ngFor=\"let item of topRatedMovies\" (click)=\"viewMovie(item.id)\">\n            <img class=\"movie-thumb\" src=\"{{posterUrl}}{{item.poster_path}}\" />\n          </span>\n        </ion-col>\n      </ion-row>\n\n      <h3>Trending Today</h3>\n      <ion-row class=\"carousel\">\n        <ion-col class=\"ion-pad\">\n          <span *ngFor=\"let item of trendingMovies\" (click)=\"viewMovie(item.id)\">\n            <img class=\"movie-thumb\" src=\"{{posterUrl}}{{item.poster_path}}\" />\n          </span>\n        </ion-col>\n      </ion-row>\n\n      <h3>Popular Among Friends</h3>\n      <ion-row class=\"carousel\">\n        <ion-col class=\"ion-pad\">\n          <span *ngFor=\"let item of topRatedMovies\">\n            <img class=\"movie-thumb\" src=\"{{posterUrl}}{{item.poster_path}}\" />\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n\n<ion-content [hidden]=\"showSearchResults\" class=\"Search-results\">\n  <div class=\"search-text\">Search results for \"{{inputDisplay}}\"</div>\n  <div *ngFor=\"let item of searchRes\" class=\"movie-search-result\" (click)=\"viewMovie(item.id);\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"auto\">\n          <img class=\"movie-thumb\" src=\"{{posterUrl}}{{item.poster_path}}\" />\n        </ion-col>\n        <ion-col>\n          <h2>{{item.title}}</h2>\n          <h6>{{item.release_date | slice:0:4}}</h6>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map