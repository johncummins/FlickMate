(self["webpackChunkFlickMate1_0"] = self["webpackChunkFlickMate1_0"] || []).push([["src_app_pages_connections_connections_module_ts"],{

/***/ 4592:
/*!*****************************************************************!*\
  !*** ./src/app/pages/connections/connections-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionsPageRoutingModule": () => (/* binding */ ConnectionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _connections_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connections.page */ 8714);




const routes = [
    {
        path: '',
        component: _connections_page__WEBPACK_IMPORTED_MODULE_0__.ConnectionsPage
    },
    {
        path: 'profile-page',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_lodash_lodash_js"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ../profile-page/profile-page.module */ 9935)).then(m => m.ProfilePagePageModule)
    },
    {
        path: 'movie-page',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_pages_movie-page_movie-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/movie-page/movie-page.module */ 9085)).then((m) => m.MoviePagePageModule)
    }
];
let ConnectionsPageRoutingModule = class ConnectionsPageRoutingModule {
};
ConnectionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConnectionsPageRoutingModule);



/***/ }),

/***/ 4063:
/*!*********************************************************!*\
  !*** ./src/app/pages/connections/connections.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionsPageModule": () => (/* binding */ ConnectionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _connections_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connections-routing.module */ 4592);
/* harmony import */ var _connections_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connections.page */ 8714);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 5642);








let ConnectionsPageModule = class ConnectionsPageModule {
};
ConnectionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _connections_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConnectionsPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_connections_page__WEBPACK_IMPORTED_MODULE_1__.ConnectionsPage]
    })
], ConnectionsPageModule);



/***/ }),

/***/ 8714:
/*!*******************************************************!*\
  !*** ./src/app/pages/connections/connections.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionsPage": () => (/* binding */ ConnectionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_connections_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./connections.page.html */ 9862);
/* harmony import */ var _connections_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connections.page.scss */ 2068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_follow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/follow.service */ 1854);






let ConnectionsPage = class ConnectionsPage {
    constructor(followService, route, router) {
        this.followService = followService;
        this.route = route;
        this.router = router;
        // userArray: Array<any> = [];
        this.inputtedUser = {};
        this.inUserFollowersArr = [];
        this.inUserFollowingArr = [];
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            if (params) {
                this.showFollowing = JSON.parse(params.showFollowing),
                    console.log("showFollowing in the query params", this.showFollowing);
                // this.inputtedUser = JSON.parse(params.inputtedUser),
                this.inUserFollowersArr = JSON.parse(params.followersArr),
                    this.inUserFollowingArr = JSON.parse(params.followingArr);
            }
        }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log(err.message);
        }));
    }
    ionViewWillEnter() {
        this.inUserFollowingArrObj = this.followService.getUserList(this.inUserFollowingArr);
        this.inUserFollowersArrObj = this.followService.getUserList(this.inUserFollowersArr);
        console.log("inUserFollowingARROBJ: ", this.inUserFollowingArrObj);
        // console.log("This is the temp getlist user: ", this.usersList$)
        // this.followService.getUsers().get().toPromise()
        //   .then((collections) => {
        //     let tempFollowingArr = []
        //     let tempFollowerArr = []
        //     collections.forEach((doc) => {
        //       if (this.showFollowing) {
        //         // console.log("Show following has been clicked: ", this.showFollowing);
        //         for (let index = 0; index < this.inUserFollowingArr.length; index++) {
        //           if (doc.id == this.inUserFollowingArr[index]) {
        //             // console.log("These have a match: ", doc.id)
        //             tempFollowingArr.push({ id: doc.id, data: doc.data() })
        //           }
        //         }
        //       }
        //       else {
        //         // console.log("Show followers has been clicked: ", this.showFollowing);
        //         for (let index = 0; index < this.inUserFollowersArr.length; index++) {
        //           if (doc.id == this.inUserFollowersArr[index]) {
        //             // console.log("These have a match: ", doc.id)
        //             tempFollowerArr.push({ id: doc.id, data: doc.data() })
        //           }
        //         }
        //       }
        //     })
        //     this.inUserFollowingArrObj = tempFollowingArr;
        //     this.inUserFollowersArrObj = tempFollowerArr;
        //     // console.log("USERARROBJ", this.inUserFollowingArrObj)
        //   })
    }
};
ConnectionsPage.ctorParameters = () => [
    { type: src_app_services_follow_service__WEBPACK_IMPORTED_MODULE_2__.FollowService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ConnectionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-connections',
        template: _raw_loader_connections_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_connections_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConnectionsPage);



/***/ }),

/***/ 2068:
/*!*********************************************************!*\
  !*** ./src/app/pages/connections/connections.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25uZWN0aW9ucy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 9862:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/connections/connections.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <span *ngIf=\"showFollowing; then followingTitle else followersTitle\"></span>\n    <ng-template #followingTitle>\n      <ion-title>Following</ion-title>\n    </ng-template>\n    <ng-template #followersTitle>\n      <ion-title>Followers</ion-title>\n    </ng-template>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <span *ngIf=\"showFollowing; then followingDiv else followersDiv\"></span>\n  <ng-template #followingDiv>\n    <div *ngFor=\"let user of inUserFollowingArrObj | async\">\n      <app-user-profile-card [user]=\"user.data\"></app-user-profile-card>\n    </div>\n  </ng-template>\n  <ng-template #followersDiv>\n    <div *ngFor=\"let user of inUserFollowersArrObj | async\">\n      <app-user-profile-card [user]=\"user.data\"></app-user-profile-card>\n    </div>\n  </ng-template>\n\n\n  <!----------------  TRIAL STUFF  --------------- -->\n  <!-- <div>\n    <ul>\n      <li *ngFor=\"let user of usersList$ | async\">\n        <a>{{ user.id }} - {{ user.displayName }} List </a>\n      </li>\n    </ul>\n  </div> -->\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_connections_connections_module_ts.js.map