(self["webpackChunkFlickMate1_0"] = self["webpackChunkFlickMate1_0"] || []).push([["src_app_tab4_tab4_module_ts"],{

/***/ 5355:
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageRoutingModule": () => (/* binding */ Tab4PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3631);




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ 2486:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageModule": () => (/* binding */ Tab4PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4-routing.module */ 5355);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page */ 3631);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 5642);








let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_0__.Tab4PageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_1__.Tab4Page]
    })
], Tab4PageModule);



/***/ }),

/***/ 3631:
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4Page": () => (/* binding */ Tab4Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab4.page.html */ 8203);
/* harmony import */ var _tab4_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page.scss */ 5300);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_follow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/follow.service */ 1854);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ 3815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);








let Tab4Page = class Tab4Page {
    constructor(followService, auth, router) {
        this.followService = followService;
        this.auth = auth;
        this.router = router;
        this.userArray = [];
        this.followersArr = [];
        this.followingArr = [];
        this.currentUser = {};
        this.followingCount = 0;
        this.followerCount = 0;
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.currentUser = yield this.auth.getUser();
            // retrieves the follower count for a user's profile
            this.followersC = this.followService.getFollowers(this.currentUser.uid).valueChanges()
                .subscribe(followers => {
                this.followersArr = Object.keys(followers);
                this.followerCount = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.size)(followers);
            }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log("This user has no followers", err.message);
            }));
            // retrieves the following count for a user's profile
            this.followingC = this.followService.getFollowing(this.currentUser.uid).valueChanges()
                .subscribe(following => {
                this.followingArr = Object.keys(following);
                this.followingCount = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.size)(following);
            }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log("This user has no following", err.message);
            }));
        });
    }
    viewFollowing(showWhich) {
        console.log("Show which is: ", showWhich);
        let navigationExtras = {
            queryParams: {
                showFollowing: showWhich,
                inputtedUser: JSON.stringify(this.currentUser),
                followersArr: JSON.stringify(this.followersArr),
                followingArr: JSON.stringify(this.followingArr),
            }
        };
        this.router.navigate(['/connections'], navigationExtras);
    }
    ngOnDestroy() {
        this.followersC.unsubscribe();
        this.followingC.unsubscribe();
    }
};
Tab4Page.ctorParameters = () => [
    { type: _services_follow_service__WEBPACK_IMPORTED_MODULE_2__.FollowService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
Tab4Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tab4',
        template: _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab4_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab4Page);



/***/ }),

/***/ 5300:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".blue-text {\n  color: var(--ion-color-primary, black);\n  font-weight: 500;\n}\n\n.user-profile__user-details-image__col {\n  max-width: 78px;\n  margin-right: 20px;\n  margin-left: auto;\n}\n\n.user-profile__user-details-image {\n  width: 78px;\n  height: 78px;\n  max-width: 78px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.user-profile__user-details-name__col {\n  margin: auto 0;\n  margin-right: auto;\n}\n\n.user-profile__user-details-name__text {\n  font-size: 22px;\n  font-weight: 600;\n}\n\n.user-profile__user-details-follow-count__row {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n\n.user-profile__user-details-follow__col:nth-child(1) {\n  padding-left: 0;\n}\n\n.user-profile__user-details-follow__col {\n  padding-right: 10px;\n  padding-top: 0;\n}\n\n.vertical-line {\n  border-left: 1px solid;\n  padding-right: 5px;\n  height: 2.2em;\n  margin: auto 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0Usc0NBQUE7RUFDRixnQkFBQTtBQUxBOztBQVFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFMRjs7QUFRQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUFMRjs7QUFRQTtFQUNFLGVBQUE7QUFMRjs7QUFRQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUxGOztBQVFBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBTEYiLCJmaWxlIjoidGFiNC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAudXNlci1wcm9maWxlX191c2VyLWRldGFpbHN7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gfVxuXG4uYmx1ZS10ZXh0e1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIGJsYWNrKTtcbmZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi51c2VyLXByb2ZpbGVfX3VzZXItZGV0YWlscy1pbWFnZV9fY29se1xuICBtYXgtd2lkdGg6IDc4cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi51c2VyLXByb2ZpbGVfX3VzZXItZGV0YWlscy1pbWFnZXtcbiAgd2lkdGg6IDc4cHg7XG4gIGhlaWdodDogNzhweDtcbiAgbWF4LXdpZHRoOiA3OHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi51c2VyLXByb2ZpbGVfX3VzZXItZGV0YWlscy1uYW1lX19jb2x7XG4gIG1hcmdpbjogYXV0byAwO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi51c2VyLXByb2ZpbGVfX3VzZXItZGV0YWlscy1uYW1lX190ZXh0e1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi51c2VyLXByb2ZpbGVfX3VzZXItZGV0YWlscy1mb2xsb3ctY291bnRfX3Jvd3tcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLnVzZXItcHJvZmlsZV9fdXNlci1kZXRhaWxzLWZvbGxvd19fY29sOm50aC1jaGlsZCgxKXtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4udXNlci1wcm9maWxlX191c2VyLWRldGFpbHMtZm9sbG93X19jb2x7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4udmVydGljYWwtbGluZXtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBoZWlnaHQ6IDIuMmVtO1xuICBtYXJnaW46IGF1dG8gMDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 8203:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"user-profile__user-details\">\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"user-profile__user-details-image__col\">\n            <ion-img class=\"user-profile__user-details-image\" [src]=\"currentUser.photoURL\"></ion-img>\n          </ion-col>\n          <ion-col class=\"user-profile__user-details-name__col\">\n            <ion-text class=\"user-profile__user-details-name__text\"> {{currentUser.displayName}}</ion-text>\n            <ion-row class=\"user-profile__user-details-follow-count__row\">\n              <ion-col (click)=\"viewFollowing(true)\" class=\"user-profile__user-details-follow__col\">\n                <ion-text class=\"blue-text\">Following</ion-text>\n                <ion-row>\n                  <ion-text>{{followingCount}}</ion-text>\n                </ion-row>\n              </ion-col>\n              <div class=\"vertical-line\"></div>\n              <ion-col (click)=\"viewFollowing(false)\" class=\"user-profile__user-details-follow__col\">\n                <ion-text class=\"blue-text\">Followers</ion-text>\n                <ion-row>\n                  <ion-text> {{followerCount}}</ion-text>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <app-user-profile [inputtedUser]=\"currentUser\"></app-user-profile>\n  <ion-button (click)=\"auth.SignOut()\" class=\"ion-margin-bottom\" fill=\"outline\" color=\"danger\" expand=\"block\">\n    Log out\n  </ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab4_tab4_module_ts.js.map