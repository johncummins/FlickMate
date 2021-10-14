(self["webpackChunkFlickMate1_0"] = self["webpackChunkFlickMate1_0"] || []).push([["src_app_pages_recommend-modal_recommend-modal_module_ts"],{

/***/ 1510:
/*!*************************************************************************!*\
  !*** ./src/app/pages/recommend-modal/recommend-modal-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecommendModalPageRoutingModule": () => (/* binding */ RecommendModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _recommend_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recommend-modal.page */ 1197);




const routes = [
    {
        path: '',
        component: _recommend_modal_page__WEBPACK_IMPORTED_MODULE_0__.RecommendModalPage
    }
];
let RecommendModalPageRoutingModule = class RecommendModalPageRoutingModule {
};
RecommendModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecommendModalPageRoutingModule);



/***/ }),

/***/ 7659:
/*!*****************************************************************!*\
  !*** ./src/app/pages/recommend-modal/recommend-modal.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecommendModalPageModule": () => (/* binding */ RecommendModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _recommend_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recommend-modal-routing.module */ 1510);
/* harmony import */ var _recommend_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recommend-modal.page */ 1197);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 5642);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);









let RecommendModalPageModule = class RecommendModalPageModule {
};
RecommendModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _recommend_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecommendModalPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule
        ],
        declarations: [_recommend_modal_page__WEBPACK_IMPORTED_MODULE_1__.RecommendModalPage]
    })
], RecommendModalPageModule);



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

/***/ })

}]);
//# sourceMappingURL=src_app_pages_recommend-modal_recommend-modal_module_ts.js.map