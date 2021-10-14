(self["webpackChunkFlickMate1_0"] = self["webpackChunkFlickMate1_0"] || []).push([["src_app_pages_verify-email_verify-email_module_ts"],{

/***/ 608:
/*!*******************************************************************!*\
  !*** ./src/app/pages/verify-email/verify-email-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailPageRoutingModule": () => (/* binding */ VerifyEmailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _verify_email_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-email.page */ 1285);




const routes = [
    {
        path: '',
        component: _verify_email_page__WEBPACK_IMPORTED_MODULE_0__.VerifyEmailPage
    }
];
let VerifyEmailPageRoutingModule = class VerifyEmailPageRoutingModule {
};
VerifyEmailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerifyEmailPageRoutingModule);



/***/ }),

/***/ 8736:
/*!***********************************************************!*\
  !*** ./src/app/pages/verify-email/verify-email.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailPageModule": () => (/* binding */ VerifyEmailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-email-routing.module */ 608);
/* harmony import */ var _verify_email_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-email.page */ 1285);







let VerifyEmailPageModule = class VerifyEmailPageModule {
};
VerifyEmailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerifyEmailPageRoutingModule
        ],
        declarations: [_verify_email_page__WEBPACK_IMPORTED_MODULE_1__.VerifyEmailPage]
    })
], VerifyEmailPageModule);



/***/ }),

/***/ 1285:
/*!*********************************************************!*\
  !*** ./src/app/pages/verify-email/verify-email.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailPage": () => (/* binding */ VerifyEmailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_verify_email_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./verify-email.page.html */ 9587);
/* harmony import */ var _verify_email_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-email.page.scss */ 9575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _registration_registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../registration/registration.page */ 8010);




// import { AuthenticationService } from '../../shared/authentication-service';


let VerifyEmailPage = class VerifyEmailPage {
    constructor(authService, registrationPg) {
        this.authService = authService;
        this.registrationPg = registrationPg;
    }
    ngOnInit() { }
};
VerifyEmailPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _registration_registration_page__WEBPACK_IMPORTED_MODULE_3__.RegistrationPage }
];
VerifyEmailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-verify-email',
        template: _raw_loader_verify_email_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_verify_email_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VerifyEmailPage);



/***/ }),

/***/ 9575:
/*!***********************************************************!*\
  !*** ./src/app/pages/verify-email/verify-email.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJpZnktZW1haWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 9587:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify-email/verify-email.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>verify-email</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <h2>Ionic 5 Firebase Verify Email</h2>\n      <p>\n        Please check your email and click on the link to verfiy your email\n        address.\n      </p>\n\n      <ion-col>\n        <ion-button type=\"submit\" (click)=\"registrationPg.openLoginPage()\" expand=\"block\">Login</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button type=\"submit\" (click)=\"authService.SendVerificationMail()\" expand=\"block\" color=\"warning\">\n          Resend Verification Email\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_verify-email_verify-email_module_ts.js.map